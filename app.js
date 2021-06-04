const express = require('express'); //import express
const fs = require('fs')
const path = require('path');
const app = express();   //build a app and intialize as express
const port = 80; //then i want to run at port 80
 


//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // for serving static file
app.use(express.urlencoded())  //it helps to get forms data to express


// set the template engine as pug,// set the views directory //PUG SPECIFIC STUFF
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

// ENDPOINTS
app.get('/' , (req,res)=>{
    const con = 'this is the best content on the internet so far '
    const params ={'title':'pubg is the best Game','content': con}
    res.status(200).render('index.pug', params)
});
app.post('/',(req,res)=>{
    names = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    let outputtowrite= `the name of the client is ${names},clients age ${age},${gender},residing at ${address},more about
    him/her ${more}`
    fs.writeFileSync('output.txt',outputtowrite)
    const params ={'message':'your form is submitted successfully'}
    res.status(200).render('index.pug', params) 
})



//START THE SERVER
app.listen(port,()=>{
    console.log(`the application started successfully on ${port}`)
})
















