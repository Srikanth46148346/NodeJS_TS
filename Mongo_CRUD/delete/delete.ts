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

// Express router for DELETE request
const remove = express.Router();

// The delete route handler
remove.delete('/', async (req:any, res:any) => {
    const { productId } = req.body;  // Get the productId from the request body
    
    if (!productId) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database
        const db = client.db(dbName);

        // Delete a product based on productId
        const result = await db.collection('products').deleteOne({ _id: new ObjectId(productId) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Send success message to the client
        res.status(200).json({ message: 'Product deleted successfully' });
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