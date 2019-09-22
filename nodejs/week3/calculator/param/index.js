const express= require('express');
const app= express();
app.get('/calculator', function (req, res) {
    res.send('GET request to homepage');
  });
  app.get('/calculator/add', function (req, res) {
    const firstnumber= parseInt(req.query.firstparm);
    const secondnumber= parseInt(req.query.secondParm);
    const sum = firstnumber+secondnumber;
    res.send(`The summation of ${firstnumber} and ${secondnumber} is ${sum}`);
  });
  
app.listen(3000,()=>console.log(`Server listening in port 3000`));