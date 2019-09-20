const express = require('express')
const app = express()
app.get("/numbers", (req,res) => {
    res.send("ok")
});
app.get("/numbers/add", (req,res) => {
    const firstB = Number(req.query.first);
    const secondB = Number(req.query.second);
    const result = firstB + secondB;

    res.send(String(result));
});

app.get("/numbers/multiply/:firstNumer/:secondNumer", (req,res) => {
    const firstN = Number(req.params.firstNumer);
    const secondN = Number(req.params.secondNumer);
    const result = firstN * secondN;
//console.log(result);
    res.send(String(result));
});

app.listen(3000);
