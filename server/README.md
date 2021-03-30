The web socket server file creates a web server that is set to listen on a predefined port which is set by PORT variable.

The server on connection generates a socket and attaches the socket to join a lobby using the data from the handshake to obtain the lobby id. Once the socket has joined the lobby
it starts listening for messages and disconnects in the lobby.
