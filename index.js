//const express = require("express");//type:commonjs
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";


import { movieRouter } from './routes/movie.js';


dotenv.config();

console.log(process.env);

const app = express();

//app.use is the middleware to convert to JSON
app.use(express.json())

const PORT = process.env.PORT || 4000;

//const MONGO_URL="mongodb://localhost";
const MONGO_URL=process.env.MONGO_URL;


 async function createConnection(){
  const client=new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb connected");

return client; 
}
const client=await createConnection();

app.get("/", (request, response) => {
  response.send("hello,world");
});

app.use('/movies',movieRouter);


app.listen(PORT, () => console.log("The server is started in", PORT));

export {client};

