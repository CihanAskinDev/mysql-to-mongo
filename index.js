import { MongoClient } from "mongodb";
import mysql from "mysql2/promise";
import { mongoURI,mysqlConnect } from "./secrets.js";

// Connect MYSQL and get to data
const db1 = await mysql.createConnection(mysqlConnect);

const [movieList] = await db1.execute("SELECT * From movies");
db1.end()





// Connect to Mongo
const mongoConnection = new MongoClient(mongoURI);
await mongoConnection.connect();
const db2 = mongoConnection.db("Cluster0")

await db2.collection("movies").insertMany(movieList);



mongoConnection.close();