import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const redisConfig = {
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  password: process.env.REDIS_PASSWORD || undefined
};

export const redisClient = createClient(redisConfig);

export const initializeRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Redis client connected successfully');
  } catch (error) {
    console.error('Error connecting to Redis:', error);
    throw error;
  }
};

export const closeRedisConnection = async () => {
  try {
    await redisClient.quit();
    console.log('Redis connection closed successfully');
  } catch (error) {
    console.error('Error closing Redis connection:', error);
    throw error;
  }
}; 