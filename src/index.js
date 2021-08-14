const express = require('express');

const itemController = require('./controllers/item');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({
    title: 'PodCodar - ShopList',
    subTitle: 'Hello World',
  });
});

app.use('/items', itemController);

module.exports = app;
