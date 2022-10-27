const http = require('http');
const fsPromises = require('fs').promises;



//create a server with the HTTP variable
const server = http.createServer(async function(req, res) {
    // fs.readFile('Home.html', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    // });
    try {
          var data = null
    console.log(req.url)
    if(req.url === '/' || req.url === '/home') {
        data = await fsPromises.readFile('Home.html');
    } else if(req.url === '/about') {
        data = await fsPromises.readFile('About.html');
    } else if(req.url === '/contact') {
        data = await fsPromises.readFile('Contact.html');
    } else {
       return res.end('404 Page')
    }
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
     return res.end();
    }
  catch(error) {
   res.end();
  }
});

//create a port
server.listen(4000, '127.0.0.1');

console.log("You have created a server")