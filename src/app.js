const express = require('express');
const writeRoute = require('./routes/write');
const loginRoute = require('./routes/login');

const app = express();
const port = 5001;

app.use(express.json());
app.use('/', writeRoute)

app.listen(port, () => console.log(`Listening on ${port}`));

