# Full-Stack


</br>


## <div align="center"> Applications </div>


### Trivia Game
Trivia game application that is made using Next.js, Redis, Python, RabbitMQ, Docker, Kubernetes, and SQL. The database stores multiple categories, each one is put into it's own queue in RabbitMQ then the consumer and pulls the specified queue and inserts the data into Redis where the frontend uses it. 