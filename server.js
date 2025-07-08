require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// Change this line from 5000 to 5001 (or another free port)
const PORT = process.env.PORT || 5001; // <--- MODIFIEZ CE PORT

app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'eur',
            payment_method_types: ['card'],
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Serveur backend en cours d'exécution sur le port ${PORT}`));