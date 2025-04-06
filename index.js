const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let customers = [];

app.post('/api/customer', (req, res) => {
  const customer = req.body;
  console.log('Received customer:', customer);
  customers.push(customer);
  res.status(200).json({ message: 'Customer received', customer });
});

app.get('/api/customers', (req, res) => {
  res.status(200).json(customers);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
