const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({
    title: 'PodCodar - ShopList',
    subTitle: 'Hello World',
  });
});
module.exports = app;
