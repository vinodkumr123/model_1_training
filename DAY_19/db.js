const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function withDb(callback) {
  try {
    await client.connect();

    const db = client.db("studentDB");

    await callback(db);
  } finally {
    await client.close();
  }
}

module.exports = { withDb };