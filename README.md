# Full-Stack


</br>


## <div align="center"> Applications </div>


### Trivia Game
Trivia game application that is made using Docker, Kubernetes, SQL, Python, RabbitMQ, Redis, and Next.js. The database stores multiple categories, each one is put into its own queue in RabbitMQ. Then the RabbitMQ consumer pulls the specified queue and inserts the data into Redis where the frontend uses it.
