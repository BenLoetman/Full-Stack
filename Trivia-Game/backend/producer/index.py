import os
import sys
import json
import time
import pika
import mysql.connector


class index:
    # Constructor variables for RabbitMQ and MySQL. 
    def __init__(self):
        self.rabbitmq_host = os.getenv('RABBITMQ_HOST')
        self.rabbitmq_port = os.getenv('RABBITMQ_PORT')
        self.rabbitmq_user = os.getenv('RABBITMQ_USER')
        self.rabbitmq_password = os.getenv('RABBITMQ_PASSWORD')
        
        self.host = os.getenv('MYSQL_HOST')
        self.user = os.getenv('MYSQL_USER')
        self.password = os.getenv('MYSQL_PASSWORD')
        self.database = os.getenv('MYSQL_DATABASE')

    def sqlConnect(self):
        # Connect to MySQL.
        connection = mysql.connector.connect(host=self.host, user=self.user, password=self.password, database=self.database)
        
        # Initialize variables.
        getCategory, getQuestion = "CALL getCategory();", "CALL getQuestion(%s);"
        questionData, categoryData = [], []

        # Execute MySQL stored procedure to get category.
        cursor = connection.cursor()
        cursor.execute(getCategory)        
        category = cursor.fetchall()

        # Loop through all categories.
        for i in category:
            cursor.nextset() 
            # set category id.
            category_id = i[0]
            # Execute MySQL stored procedure to get question for 1 category.
            cursor.execute(getQuestion, (category_id,))
            questions = cursor.fetchall()

            # Create a list of all questions.
            question_columns = [column[0] for column in cursor.description]
            question_list = [dict(zip(question_columns, row)) for row in questions]            

            # Append 1 category question list to all questionData.
            data = {"category_id": category_id, "questions": question_list}
            questionData.append(data)

            # Category data is used in RabbitMQ to set different queue.
            categoryData.append(f"category_{category_id}_questions")

        # Close MySQL connection.
        cursor.close()
        connection.close()
        return questionData, categoryData

    def connectRabbit(self):
        # Credentials to RabbitMQ.
        credentials = pika.PlainCredentials(self.rabbitmq_user, self.rabbitmq_password)
        connection_params = pika.ConnectionParameters(host=self.rabbitmq_host, port=self.rabbitmq_port, credentials=credentials)

        # Try to send data to RabbitMQ.
        try:
            # Connect to RabbitMQ.
            connection = pika.BlockingConnection(connection_params)
            channel = connection.channel()
            
            # Call function to get data from MySQL.
            message, category = self.sqlConnect()

            # Loop through categories to sent data to RabbitMQ with timestamp.
            for i in range(len(category)):
                channel.queue_declare(queue=category[i], durable=True)
                json_result = json.dumps(message[i], indent=4)
                channel.basic_publish(exchange="", routing_key=category[i], body=json_result, properties=pika.BasicProperties(delivery_mode=2,timestamp=int(time.time())))
            print(f"Sent: {category}")
            connection.close()

        # RabbitMQ connection error.
        except pika.exceptions.AMQPConnectionError as e:
            print(f"Connection to RabbitMQ failed: {e}")
            sys.exit(1)
        
        # Other error.
        except Exception as e:
            print(f"Error occurred: {e}")
            sys.exit(1)


# Call connectRabbit function inside index class.
if __name__ == "__main__":
    index().connectRabbit()