import redis from "../../lib/redis";


// Call Redis Queue, then convert to JSON. 
export default async function handler(req, res) {
  try {
    const queue = "channel:" + process.env.QUEUE;
    const rawData = await redis.call("JSON.GET", queue);

    if (!rawData) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json({ RedisData: JSON.parse(rawData) });
  } catch (error) {
    res.status(500).json({ error: "Redis Error", details: error.message });
  }
}
