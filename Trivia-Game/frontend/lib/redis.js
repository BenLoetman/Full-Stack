import Redis from 'ioredis';


// Redis connection.
const redis = new Redis({
  host: process.env.REDIS_HOST || 'redis-0.redis-service.app1.svc.cluster.local',
  port: process.env.REDIS_PORT || 6379
});

redis.on('connect', () => {
  console.log('Connected to Redis with RedisJSON support');
});

export default redis;

