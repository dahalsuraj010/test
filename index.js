const http = require ("http");
const app = require("./src/config/express.config");

const httpServer = http.createServer((app) => {
});

const PORT = 9000;
const HOST = 'localhost'

httpServer.listen(PORT, HOST , ()=> {
    console.log(`URL: http://${HOST}:${PORT}`)
    console.log("Server Running on port :" +9000);
    console.log("Press CTRL+C to close connection");
});

