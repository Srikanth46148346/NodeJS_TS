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

// Express router for PUT request (updating product)
const update = express.Router();

// The PUT route handler for updating a product
update.put('/:productId', async (req: any, res: any) => {
    const { productId } = req.params;  // Get the productId from the URL parameters
    const { name, price, description, image, uniqueId } = req.body;  // Get the updated product details from the request body

    // Check if productId is valid
    if (!ObjectId.isValid(productId)) {
        return res.status(400).json({ message: 'Invalid Product ID' });
    }

    // Check if at least one field to update is provided
    if (!name && !price && !description && !image && !uniqueId) {
        return res.status(400).json({ message: 'At least one field (name, price, description, image) must be provided' });
    }

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database
        const db = client.db(dbName);

        // Build the update object
        const updateFields: any = {};
        if (name) updateFields.name = name;
        if (price) updateFields.price = price;
        if (description) updateFields.description = description;
        if (image) updateFields.image = image;
        if (uniqueId) updateFields.uniqueId = uniqueId;

        // Perform the update operation
        const result = await db.collection('products').updateOne(
            { _id: new ObjectId(productId) },  // Find the product by ID
            { $set: updateFields }  // Update the fields provided in the request body
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Send success response
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (err) {
        // Handle error if something goes wrong
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        // Always close the client connection when done
        await client.close();
    }
});

export default update;