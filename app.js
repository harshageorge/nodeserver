const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.headers,req.method);
    //process.exit();
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from Nodejs server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);