import WebConfig from './WebConfig.js';
import express from 'express';
const app = express();
import requestCatcher from './server/requestCatcher.js'

const port = WebConfig.PORT;

app.listen(port, () => {

  console.log(`server Running on Port: ${port}`);
});

requestCatcher(app);
