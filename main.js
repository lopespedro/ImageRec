import WebConfig from './WebConfig.js';
import express from 'express';
const app = express();

const port = WebConfig.PORT;

app.listen(port, () => {

  console.log(`server Running on Port: ${port}`);
});

app.get('/', (req, res) => {

  res.sendFile('/views/index.html', { root: '.' });
});

