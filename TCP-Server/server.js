const net = require("net");
const PORT = 8080;

const server = net.createServer((socket) => {
    const clientAdd = `${socket.remoteAddress}:${socket.remotePort}`
    console.log("Client connected from", clientAdd);
    socket.end(); // close the connection
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
