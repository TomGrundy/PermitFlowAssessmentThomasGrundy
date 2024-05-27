import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { loadInitialData } from "./Utils/loadInitialData";

dotenv.config();

const dbName = 'permitDb';
const connectionString = process?.env?.MONGO_URI ? process.env.MONGO_URI : `mongodb://127.0.0.1:27017/${dbName}?retryWrites=true&w=majority`;

const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4   
};

export const db = mongoose.connect(connectionString, options)
.then(async res => {
    if(res){
        console.log(`Connected successfully to ${dbName}`);
    }
    await loadInitialData();
    
}).catch(err => {
    console.log(err);
});