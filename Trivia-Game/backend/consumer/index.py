import os
import pika
import redis
import json


class index:
    # Constructor variables for RabbitMQ. 
    def __init__(self):
        self.rabbitmq_host = os.getenv('RABBITMQ_HOST')
        self.rabbitmq_port = os.getenv('RABBITMQ_PORT')
        self.rabbitmq_user = os.getenv('RABBITMQ_USER')
        self.rabbitmq_password = os.getenv('RABBITMQ_PASSWORD')
        self.quereName = os.getenv('RABBITMQ_QUERE')
        
    # Function to insert data intio Redis.
    def callback(self, ch, method, properties, body):
            data = {"data": body.decode(), "timestamp": properties.timestamp}
            r = redis.Redis(host="redis-service", port=6379, decode_responses=True)
            r.execute_command("JSON.SET", f"channel:{self.quereName}", "$", json.dumps(data))
            print(f"Data Inserted Into Redis: {properties.timestamp}")

    def getData(self):
        # Credentials to RabbitMQ.
        credentials = pika.PlainCredentials(self.rabbitmq_user, self.rabbitmq_password)
        connection_params = pika.ConnectionParameters(host=self.rabbitmq_host, port=self.rabbitmq_port, credentials=credentials)
        
        # Try to get data from RabbitMQ.
        try:
            # Connect to rabbit.
            connection = pika.BlockingConnection(connection_params)
            channel = connection.channel()

            # Create consumer and call callback function. When new data is found it's put into Redis.
            channel.queue_declare(queue=self.quereName, durable=True)
            channel.basic_consume(queue=self.quereName, on_message_callback=self.callback, auto_ack=True)
            channel.start_consuming()

        # RabbitMQ connection error.
        except pika.exceptions.AMQPConnectionError as e:
            print(f"Connection to RabbitMQ failed: {e}")
        
        # Other error.
        except Exception as e:
            print(f"Error occurred: {e}")


# Call getData function inside index class.
if __name__ == "__main__":
    index().getData()