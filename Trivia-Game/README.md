# Trivia Game


</br>


## <div align="center"> About </div>


### System Description
Trivia game application that is made using Docker, Kubernetes, SQL, Python, RabbitMQ, Redis, and Next.js. The database stores multiple categories, each one is put into its own queue in RabbitMQ. Then the RabbitMQ consumer pulls the specified queue and inserts the data into Redis where the frontend uses it.



### System Architecture
You can view the system architecture [here](https://lucid.app/lucidchart/9cc53b13-2622-4d4d-9417-4c1573f889c2/edit?invitationId=inv_f4ad176f-3fb7-4cf3-af37-475866f3e4cf).


## <div align="center"> System Flow </div>


### Database
* Stores all data being used.


### Producer
* Extracts data from database.
* Inserts all data into RabbitMQ.


### Consumer
* Extracts single queue data from RabbitMQ.
* Inserts queue data into Redis.


### Frontend
* Call Redis to extract question data.
