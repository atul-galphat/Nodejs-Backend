const express = require("express");
const cors = require("cors");
const app = express();
const logger = require('../app2/loggerConfig/loggerConfig')
const ErrorHandler = require('../app2/error/errorHandler')
const responsecontroller = require('../app2/controller/responseController')

var corsOptions = {
  origin: "http://localhost:8081"
};


// thuse are the middeleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Router
const router = require('./routs/candidateRouter')
const router1 = require('./routs/examRouter')
app.use('/api/candidate', router)
app.use('/api/upcomingexam', router1)
app.use((req, res, next) => {
  res.status(404).json({
    error: 'bad url request'
  })
})
app.use(ErrorHandler);

console.log("in main file before function call.............");
// responsecontroller.addcol();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info('info', `server is running on port :${PORT}`)
})