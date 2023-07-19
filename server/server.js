const cors = require('cors');
const express = require('express');
const app = express();
//Routes
const bodyMassCalculatorRouter = require('./routes/body-mass-calculator')

app.use(logger)

app.get('/', (req, res) => {
  console.log("Hello World");
  res.status(200).json({ message: 'Nothing to see here 👀'});
})


app.use('/body-mass', bodyMassCalculatorRouter)

function logger (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST');
  cors({
    credentials: true
  })
  next();
}

app.listen(3001, () => {
  console.log('Running on port 3001');
});