# Kubernetes Files 

</br>

## <div align="center"> Deployment </div>


### Frontend
* Service running on NodePort 31000.
* Quere is passed to access data from Redis.


### Redis
* Service is running on port 6379.
* Only accessible inside the cluster.
* Data is populated by consumer.
* Creates Redis StatefulSet. 


### Consumer
* Only accessible inside the cluster.
* Calls secret file to retrive rabbitmq-host, rabbitmq-port, rabbitmq-user, rabbitmq-password and quere.
* Constantly running to check RabbitMQ.


### RabbitMQ
* Service is running on port 5672.
* Calls secret file to retrive rabbitmq-user, and rabbitmq-password.


### Producer
* Cron job to run one time a day at 2 am.
* Calls secret file to retrive rabbitmq-host, rabbitmq-port, rabbitmq-user, rabbitmq-password, mysql-host, mysql-user, mysql-password, and mysql-db. 


</br>


## <div align="center"> Secrets </div>


### Docker
```bash
apiVersion: v1
kind: Secret
metadata:
  name: docker-hub-secret
  namespace: app1
type: kubernetes.io/dockerconfigjson
data:
  .dockerconfigjson: XXXXX
```


### General
```bash
apiVersion: v1
kind: Secret
metadata:
    name: general-secret
    namespace: app1
type: Opaque
data:
    mysql-db: XXXXX
    mysql-host: XXXXX
    mysql-user: XXXXX
    mysql-password: XXXXX
    rabbitmq-port: XXXXX
    rabbitmq-host: XXXXX
    rabbitmq-user: XXXXX
    rabbitmq-password: XXXXX
    queue: XXXXX
```