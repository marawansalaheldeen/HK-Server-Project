const express = require('express');
const cors = require("cors");
//const control = require('./routes_controller/routes.main');
const logger = require('./config/logger');
const bodyParser = require("body-parser");
//const {sequelize} = require('./models');


const app = express();

var corsOptions = {
  origin: "*"
};

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));


app.use(cors(corsOptions));
app.options('*', cors())

app.set('trust proxy', 1);

app.all('', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //Auth Each API Request created by user.
  next();
});

// async function main () {
//   await sequelize.sync()
// }

// main()
// sequelize
//     .authenticate()
//     .then(() => console.log("DB connected"))
//     .catch((err) => console.log("error", err));

//control(app);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.get('/',(req,res)=>{
    res.send('$$$$$$$$$$$$$$$$$............Hussein you have been hacked')
})
// set port, listen for requests
const PORT = 9000 || process.env.PORT_NUMBER;
app.listen(PORT, () => {
  logger.log(`info`, `Server is running on port ${PORT}.`);
});