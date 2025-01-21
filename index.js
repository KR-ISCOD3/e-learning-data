const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middleware = jsonServer.defaults();

server.use(router);
server.use(middleware)

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})