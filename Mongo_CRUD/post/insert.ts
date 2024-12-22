import * as express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

// MongoDB URL and database name
const mongoURL = 'mongodb://localhost:27017/';
const dbName = 'NodeJS_Data';

// Creating client
const client = new MongoClient(mongoURL);

// Initialize Express app
const app = express();

// Use express middleware to parse JSON request bodies
app.use(express.json());

// Express router for POST request
const insert = express.Router();

// The post route handler for adding a new product
insert.post('/', async (req: any, res: any) => {
    const { name, price, description, image, uniqueId } = req.body; // Get the product details from the request body

    if (!name || !price || !description || !image || !uniqueId) {
        return res.status(400).json({ message: 'Name, price,image and description are required' });
    }

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database
        const db = client.db(dbName);

        // Insert the new product into the collection
        const result = await db.collection('products').insertOne({
            name,
            price,
            description,
            image,
            uniqueId,
            createdAt: new Date(),
        });

        // Send success message with the inserted product ID
        res.status(201).json({
            message: 'Product added successfully',
            productId: result.insertedId,
        });
    } catch (err) {
        // Handle error if something goes wrong
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        // Always close the client connection when done
        await client.close();
    }
});

export default insert