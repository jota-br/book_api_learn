const http = require('http');

const app = require('./app');
const { mongoConnect } = require('./services/mongo');

const PORT = 3000;

const server = http.createServer(app);

async function startServer() {
    try {
        await mongoConnect();
        server.listen(PORT, () => {
            console.log(`Server listing @ http://localhost:${PORT}`);
        });
    } catch (err) {
        console.log(`Error: ${err}\nUnable to start server...`);
    }    
}

startServer();