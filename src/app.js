require('dotenv').config({ path: 'src/config/.env' });
const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const subjectsRouter = require('./routes/subject');

const app = express();

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/subjects', subjectsRouter);

app.listen(process.env.HTTP_PORT, () => {
    
});
