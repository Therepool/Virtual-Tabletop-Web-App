import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const token_dropped_on_board = "token_added_to_board";
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = (roomId) => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
            query: { roomId },
        });

        socketRef.current.on(token_dropped_on_board, (message) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id,
            };
            setMessages((messages) => [...messages, incomingMessage]);
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, [roomId]);

    const sendMessage = (messageBody) => {
        socketRef.current.emit(token_dropped_on_board, {
            token: messageBody,
            senderId: socketRef.current.id,
        });
    };

    const leaveLobby = () => {
        socketRef.current.emit('disconnected', { senderId:socketRef.current.id});
    };

    return { messages, sendMessage, leaveLobby };
};

export default useChat;