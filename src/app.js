import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('AM API Service...');
});

export default app;
