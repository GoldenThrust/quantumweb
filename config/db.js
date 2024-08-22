import { createClient } from "redis";
import mongoose from "mongoose";
import { mongoDBURI, redisOptions } from "../utils/constant.js";

class Redis {
  constructor() {
    this.client = createClient(redisOptions);
    this.subClient = this.client.duplicate();

    this.client.on("error", (err) => {
      console.error("Redis client failed to connect:", err);
    });
  }

  async run() {
    try {
      await this.client.connect();
      await this.subClient.connect();
      console.log("Successfully connected to Redis!");
    } catch (err) {
      console.error("Redis client failed to connect:", err);
    }
  }

  set(key, value, exp) {
    return this.client.SETEX(key, exp, value);
  }

  get(key) {
    return this.client.get(key);
  }
}

class MongoDB {
  constructor() {
    this.uri = mongoDBURI;
  }

  async run() {
    try {
      await mongoose.connect(this.uri, {
        autoIndex: true,
      });

      console.log("Successfully connected to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
}

export const redis = new Redis();
const mongodb = new MongoDB();

export default mongodb;
