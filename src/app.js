require('dotenv').config({ path: 'src/config/.env' });
const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use('/', routes);

app.listen(process.env.HTTP_PORT, () => {
    
});
