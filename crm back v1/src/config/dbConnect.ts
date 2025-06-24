import "dotenv/config";
import mongoose from "mongoose";
import assert from "node:assert";

assert(process.env.DATABASE_URL, "#ERRO:ENV | O valor de DATABASE_URL nao foi definido!");

class MongooseConnect {
  async databaseConnect(): Promise<mongoose.Connection> {
    mongoose.connect(
      process.env.DATABASE_URL as string
    );
    return mongoose.connection;
  }
}

export default MongooseConnect;
