import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 5002; // Adjust the port as needed

app.use(express.json());

// POST /shipping endpoint
app.post('/shipping', (req, res) => {
    // Assuming req.body contains the required object
    const requestBody = req.body;


    console.log('Response from Shipping-service:', requestBody);

    // Send the requestBody to the billing-service /billing endpoint
   /* fetch('http://localhost:3000/billing', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Response from billing-service:', data);
            res.json(data); // Return the response from billing-service as the response of /shipping
        })
        .catch((error) => {
            console.error('Error sending request to billing-service:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });*/
});

// Start the server
app.listen(port, () => {
    console.log(`shipping-service is running on http://localhost:${port}`);
});
