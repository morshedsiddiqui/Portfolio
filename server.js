process.env.NODE_ENC = 'development';

const express =  require('./config/express');

const app = express(); 
// app.use(express.static('public'));



app.listen(8081);

module.exports = app;

console.log("server is running........")



