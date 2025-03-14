# <div align="center"> Producer </div>


## Dockerfile
* Use Python and Alpine image.
* Copies script.
* Install Pika, and mysql-connector library.
* Run Python script.


## Index.py
* Extracts MySQL data to put in RabbitMQ.
* Loops through each category. 