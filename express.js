// const express = require('express');
// const app = express();


// app.get('/', function(req, res) {
//   res.send('Hello World!')
//   console.log("got request from homepage");
// });



// app.get('/uki', function(req, res) {
//     res.send('Hello uki!')
//     console.log("got equest from uki");
//   });

//   app.listen(3000);


const express = require('express');
const app = express();
const port = 3001;

app.get('/', function (req, res) {
    res.send('Hello World!')
    console.log("new request")

});

app.listen(port, function () {
});

console.log(`Example app listening on port ${port}!`)
