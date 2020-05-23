var express    = require("express");
var login = require('./routes/login');
var registerUser = require('./routes/register')
var addPage = require('./routes/add-contact');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});
//route to handle user registration
router.post('/register',registerUser.register);
router.post('/login',login.login);
router.post('/add',addPage.addContacts);
app.use('/api', router);
app.listen(5999);