import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 5004; // Adjust the port as needed

app.use(express.json());

// POST /billing endpoint
app.post('/billing', (req, res) => {
    // Log the received req.body object
    console.log(req.body);

    // Send the req.body object to the shipping-service /billing endpoint
    fetch('http://shipping-service:5002/shipping', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Response from shipping-service:', data);
            res.json(data); // Return the response from shipping-service as the response of /billing
        })
        .catch((error) => {
            console.error('Error sending request to shipping-service:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// Start the server
app.listen(port, () => {
    console.log(`billing-service is running on http://localhost:${port}`);
});