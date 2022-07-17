const express = require('express');

const app = express();

app.use(express.static(__direname + '/dist'));

app.all('*',(req,res) =>{
    res.status(200).sendFile(__dirname + '/dist/basic-angular-course');
});
app.listen(process.env.PORT || 8080);
