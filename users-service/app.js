import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 5003; // Adjust the port as needed

app.use(express.json());

// POST /billing endpoint
app.get('/users', (req, res) => {
    // Log the received req.body object
    console.log("Users api response");
});

// Start the server
app.listen(port, () => {
    console.log(`users-service is running on http://localhost:${port}`);
});