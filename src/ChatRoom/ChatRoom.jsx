import React from "react";

import "./ChatRoom.css";
import useChat from "../useChat";

const ChatRoom = (props) => {
    const { roomId } = props.match.params;
    const { messages, sendMessage } = useChat(roomId);
    const [newMessage, setNewMessage] = React.useState("");

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

    return (
        <div className="chat-room-container">

            <div className='ui-container'>
                <div className="ui-float">
                    <div className='ui-player-list'>Player List</div>
                    <div className='ui-lobby-options'>Lobby Options</div>
                </div>

                <div className="ui-float map">
                    The Map
                    <div className='ui-dice-tool'>Dice Tool</div>
                </div>

                <div className="ui-float">
                    <div className='ui-drawing-tool'>Drawing Tool</div>
                    <div className='ui-tokens'>Tokens</div>
                    <div className='ui-maps'>Maps</div>
                </div>
            </div>

        </div>
    );
};

export default ChatRoom;