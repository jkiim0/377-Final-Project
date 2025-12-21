const http = require('http');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        console.log('user requesting default route');
        res.writeHead(200, {'Content-Type': 'application/json'});
        const output = {
            phrase: 'Hello!',
        };
        res.write(JSON.stringify(output));
        console.log('user response for default route being returned');
        res.end();
    }else if(req.url == '/contact'){
        if(req.method == 'POST'){
            res.writeHead(200, {'Content-Type': 'application/json'})
            const output = {
                id: 1,
                timeSubmitted: Date.now(),
                status: 'Success',
            };
            res.write(JSON.stringify(output));
            res.end();
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<html><body><h1>This is the contact page</h1></body></html>');
            res.end();
        }
    }else if(req.url == '/admin'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>This is the admin page</h1></body></html>');
        res.end();
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>Whomp Whomp. This page does not exist</h1></body></html>');
        res.end();
    }
});

server.listen(port, hostName, () => {
    console.log(`server running at http://${hostName}:${port}`)
})