const express = require('express');
const app = express();

 app.get('/',(req, res)=>{ //function needs to know when someone accesses the page "/"
                            //im gonna respond with hi. Takes in a request and a response parameter
                            //in the anonymous function

console.log('Here');
res.send('Hi')
res.render('index')
});

app.get('/status', (req, res) =>{
    res.sendStatus(400).send("Yo")
});
app.listen(3030);