const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',(req, res)=>{ 
console.log('Here');
//res.send('w')
res.render('index', {userName: "George"})
});

app.get('/status', (req, res) =>{
    res.sendStatus(400).send("Yo")
});




app.get('/users', (req, res)=>{

res.send('User List');

});

app.get('/users/new', (req, res)=>{

res.send('User New Form');

});
app.listen(3030);