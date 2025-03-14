# <div align="center"> Consumer </div>


## Dockerfile
* Use Python and Alpine image.
* Copies script.
* Install Pika, and Redis library.
* Run Python script.


## Index.py
* Calls RabbitMQ to get data from the quere. 
* Inserts data into Redis.
