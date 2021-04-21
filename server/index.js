const server = require("http").createServer();
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});

const PORT = 4000;
const token_dropped_on_board = "token_added_to_board";
const clients = {};

io.on("connection", (socket) => {

    // Join a conversation
    const { roomId } = socket.handshake.query;
    socket.join(roomId);

    // Listen for new messages
    socket.on(token_dropped_on_board, (data) => {
        data.username = 'user' + (Object.keys(clients).length + 1);

            if (!(data.senderId in clients)) {
                let client = {id: data.senderId, username: data.username};
                clients[data.senderId]= client;
            }
        console.log(clients);
        io.in(roomId).emit(token_dropped_on_board, data);
    });

    // Leave the room if the user closes the socket
    socket.on("disconnected", (data) => {
        console.log(data);
        let username = clients[data.senderId].username;

        delete clients[data.senderId];
        socket.leave(roomId);
        io.in(roomId).emit('disconnected', username + ' Disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});