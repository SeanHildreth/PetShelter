const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
var path = require('path');
app.use(express.static(path.join(__dirname, './client/static')));

require('./server/config/routes')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, () => {
    console.log('Listening on port 8000!')
});