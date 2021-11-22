const express = require('express');
let questionList = require('./questions.json');

const app = express();

// serve static contents
app.use(express.static('static'));

//Gets products in JSON
//If we want to deal with it as a JS array we can parse the JSON string 
app.get("/questionsInJson", (req,res) => {
    //Same thing as below: res.send(JSON.stringify(productList));
    res.json(questionList);
});

app.get("/updateBtn", (req,res) => {
    let msg = "incorrect" + req.query.id;
    let z = 0;
    for (q of questionList){
        if(req.query.id == z && req.query.value == q.answerIndex)
            msg = "correct" + req.query.id;
        z++;
    }
    res.send(msg);
});

app.get("/submitBtn", (req,res) => {
    res.json(questionList);
});

app.listen(80);