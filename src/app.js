require('dotenv').config({ path: 'src/config/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const verifyJWT = require('./middlewares/verifyJWT');

const indexRouter = require('./routes/index');
const subjectsRouter = require('./routes/subject');
const authorizationRouter = require('./routes/authorization');

const app = express();

app.use(bodyParser.json());

app.use('/authorization', authorizationRouter);
app.use('/', verifyJWT, indexRouter);
app.use('/subjects', verifyJWT, subjectsRouter);

app.listen(process.env.HTTP_PORT, () => {

});
