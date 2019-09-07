const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const userRouter = require('./routes/users');

app.use('/', userRouter);

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});

module.exports = app;