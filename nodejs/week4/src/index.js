const express = require('express');
const app = express(); 
const localtunnel = require('localtunnel');
require('dotenv').config();
const port = process.env.PORT;
const subdomain = process.env.SUBDOMAIN;

app.use('/check', function (req, res) {
    res.send('ok')
  });
  
app.listen(port, () => {
    console.log('server is working');
    const tunnel = localtunnel(port, { subdomain }, (err, tunnel) => {
        if (!err)
          console.log('Tunnel is open');
        else
          console.log('Error opening tunnel: ', err);
      });
      
      tunnel.on('close', function() {
        // When the tunnel is closed
        console.log('Tunnel is closed');
      });
      
});