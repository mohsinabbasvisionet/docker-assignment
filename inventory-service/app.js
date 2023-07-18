import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 5001; // Adjust the port as needed

app.use(express.json());

// POST /billing endpoint
app.get('/inventory', (req, res) => {
    // Log the received req.body object
    console.log("Inventory API response");
});

// Start the server
app.listen(port, () => {
    console.log(`invertory-service is running on http://localhost:${port}`);
});