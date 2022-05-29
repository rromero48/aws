const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content=type', 'test/plain');
	res.end('hello world');
});

server.listen(port, () => {
	console.log(Server runnig on port: ${port}');
});