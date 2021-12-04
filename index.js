const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer server en express');
});

app.get ('/home', (req, res) => {
  res.send('Home page');
});

app.get('/products',(req, res) => {
  res.json([
    {
      id: 1,
      name: 'Product1',
      description: 'Mouse',
      price: 10
    },
    {
      id: 2,
      name: 'Product2',
      description: 'Teclado',
      price: 50
    }
  ]);


});

app.get ('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json ({
    id
  });
});
















app.listen(port, () => {
  console.log('My port' + port);
});
