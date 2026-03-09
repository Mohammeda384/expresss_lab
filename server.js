const express = require('express');
const app = express();
const userRouter = require('./routes/users')
const wordRouter = require('./routes/word')
app.use('/users', userRouter);
app.use('/word', wordRouter);
app.set('view engine', 'ejs');
app.use(express.static("public")); //look for those things in the folder that i call public


app.get('/',(req, res)=>{ 
console.log('Here');
res.render('index', {userName: "George"})
});






app.listen(3030);