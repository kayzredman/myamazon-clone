const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response, request } = require('express');
const stripe = require('stripe')(
  'sk_test_51HQywvDSbdS2nx2ULZHWnmQ622t6akk4zfg4bm6pAIDMUODgsdFEdZXxxbdFnMoFAUKGrIKx62kBWhJZz2mV8YC100W4XGmPuE'
);

// - API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log(
    'Payment Request Received BOOM!!!.. for this amount >>>>>',
    total
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  //OK - Created
  response.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-c2803/us-central1/api
