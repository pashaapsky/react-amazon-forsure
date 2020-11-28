const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");

const stripe = require('stripe')('sk_test_51Hr6hTLwK531AwM5wyDE7Ap8DVuZZ2wzLnziVifOZCsMb7vTuzvKD1zfJYN2i2un9frpLNuXv6JLi5GIx8kD9wnL00ZeblbXAH');

// App config
const app = express();

// Middlewares
app.use(cors({origin:true}));
app.use(express.json());

app.get('/', (req, res) => {
   res.status(200).send('hello world');
});

app.post('/payments/create', async (req, res) => {
   const total = req.query.total;

   // возвращает некий объект paymentIntent с данными о платеже
   const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      payment_method_types: ['card'],
      receipt_email: 'ap.sky@yandex.ru'
   });

   // Ok - created
   res.status(201).send({
      clientSecret: paymentIntent.client_secret,
   })
});

// Listen command
exports.api = functions.https.onRequest(app);

// адресс для тестирования request - response c помощью cloud functions
// http://localhost:5001/react-b1494/us-central1/api