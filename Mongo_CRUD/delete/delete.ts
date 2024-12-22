import * as express from 'express'
import { MongoClient } from 'mongodb';

// MongoDB URL and database name
const mongoURL = 'mongodb://localhost:27017/';
const dbName = 'NodeJS_Data';

// creating client
const client = new MongoClient(mongoURL);


let remove = express.Router().delete('/', async (req, res) => {
    try {
        // Connect to the MongoDB server
        await client.connect();
        
        // Access the database
        const db = client.db(dbName);
        
        // Fetch products collection and return the results
        const products = await db.collection("products").find().toArray();
        
        // Send the results to the client as JSON
        res.status(200).json(products);
    } catch (err) {
        // Handle error if something goes wrong
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        // Always close the client connection when done
        await client.close();
    }
});

export default remove