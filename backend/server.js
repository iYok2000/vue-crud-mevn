let express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    database = require('./database'),
    bodyParser = require('body-parser')
    dotenv = require("dotenv");


    dotenv.config();

// Connect MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected succesfully');
}, error => {
    console.log('Cannot connect to database ' + error)
})

const createError = require('http-errors');
const taskAPI = require('./routes/task.route');
const blogAPI = require('./routes/blogs');
const userAPI = require('./routes/user');
const app = express();
app.use(bodyParser.json());

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors());

// API
app.use('/api', taskAPI);
app.use('/apiblog',blogAPI);
app.use('/apiuser',userAPI);
// CREATE PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// 404 Handler
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})