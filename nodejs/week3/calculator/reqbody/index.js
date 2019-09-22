const express= require('express');
const app= express();
  app.get('/calculator', function (req, res) {
    const method = req.query.method;
    console.log(method)
    if(method==='add'){
        const firstnumber= parseInt(req.query.firstparm);
    const secondnumber= parseInt(req.query.secondParm);
    const sum = firstnumber+secondnumber;
    res.send(`The summation of ${firstnumber} and ${secondnumber} is ${sum}`);
    }else
    res.send('Enter the operator!');  
    
  });
  
app.listen(3000,()=>console.log(`Server listening in port 3000`));