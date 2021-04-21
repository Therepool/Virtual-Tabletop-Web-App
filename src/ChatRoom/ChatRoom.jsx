import React from "react";
import "./ChatRoom.css";
import useChat from "../useChat";
import Tokens from "./components/tokens.js";

const ChatRoom = (props) => {
    const { roomId } = props.match.params;
    const { messages, sendMessage, leaveLobby } = useChat(roomId);
    const [newMessage, setNewMessage] = React.useState("");

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

    const callbackFunction = (childData) => {
        sendMessage(childData);
    }

    const handleLeaveClick = () => {
        leaveLobby();
    }

    return (
        <div className="chat-room-container">

            <div className='ui-container'>
                <div className="ui-float">
                    <div className='ui-player-list'>Player List</div>
                    <div className='ui-lobby-options'>Lobby Options
                        <button onClick={handleLeaveClick}>Leave</button></div>
                </div>

                <div className="ui-float map">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chess_Board.svg/1200px-Chess_Board.svg.png' width='822px'/>
                    <div className='ui-dice-tool'>Dice Tool</div>
                </div>

                <div className="ui-float">
                    <div className='ui-drawing-tool'>Drawing Tool</div>
                    <div className='ui-tokens'><Tokens roomId={roomId} tokenCallback={callbackFunction}/></div>
                    <div className='ui-maps'>Maps</div>
                </div>
            </div>

        </div>
    );
};

export default ChatRoom;