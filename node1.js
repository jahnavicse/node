import { MongoClient } from "mongodb";
const client=new MongoClient("mongodb://127.0.0.1:27017")
const db=client.db("socialdb")
const employees=await db.collection("employees").find().toArray()
console.log(employees)