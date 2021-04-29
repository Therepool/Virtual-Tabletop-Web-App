import React, {useEffect, useRef, useState} from 'react';

import "./ChatRoom.css";
import useChat from "../useChat";
import Tokens from "./components/tokens.js";
import MapHolder from "./components/mapholder.js";
import DiceRoller from "./components/DiceRoller";


/* added content----------------------------------*/


const ChatRoom = (props) => {

    /*tokens stuff*/

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



    /* canvas stuff */
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    const [tool, setTool] = useState(0);
    const [color, setColor] = React.useState("black");
    const [canvasHeight, setCanvasHeight] = useState(950)
    const [canvasWidth, setCanvasWidth] = useState(1420)


    useEffect(() => {
        const canvas = canvasRef.current;

        const context = canvas.getContext("2d")

        context.lineCap = "round"
        context.strokeStyle = color;
        context.lineWidth = 5


        contextRef.current = context;




    },[color])

    window.addEventListener('resize',resizeCanvas, false);

    function resizeCanvas(){

        setCanvasHeight(document.getElementById('canvasDiv').clientHeight);
        setCanvasWidth(document.getElementById('canvasDiv').clientWidth);

    }


    const reset = () =>{

        const canvas = canvasRef.current;

        const context = canvas.getContext("2d")

        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    const changeColor = () =>{

        const canvas = canvasRef.current;

        const context = canvas.getContext("2d")

        var e = document.getElementById("drawing-color");
        var colorValue = e.options[e.selectedIndex].value;

        setColor(colorValue);

        context.lineCap = "round"
        context.strokeStyle = color;
        context.lineWidth = 5

        contextRef.current = context;

    }


    const startDrawing = ({nativeEvent}) => {

        if (tool === 1) {

            changeColor();

            const {offsetX, offsetY} = nativeEvent;
            contextRef.current.beginPath()
            contextRef.current.moveTo(offsetX, offsetY)
            setIsDrawing(true)
        }

    }

    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)

    }

    const draw = ({nativeEvent}) => {

        if (!isDrawing) {
            return
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke()


    }

/* added content----------------------------------*/


    return (
        <div className="chat-room-container">

            <div className='ui-container'>
                <div className="ui-float">
                    <div className='ui-player-list'>Player List</div>
                    <div className='ui-lobby-options'>Lobby Options</div>
                </div>

                <div className="ui-float map">
                    {/* added content----------------------------------*/}

                    <div id='canvasDiv'>

                        <canvas

                        className={"myCanvas"}
                        width={canvasWidth}
                        height={canvasHeight}
                        onMouseDown={startDrawing}
                        onMouseUp={finishDrawing}
                        onMouseMove={draw}

                        ref={canvasRef}

                         />

                    </div>

                    {/* added content----------------------------------*/}

                    <div className='ui-dice-tool'><DiceRoller/></div>



                </div>

                <div className="ui-float">
                    <div className='ui-drawing-tool'>


                        {/* added content----------------------------------*/}

                        <table className='ui-drawing-tool-table'>

                            <tr>
                                <td>

                                    <button className={"drawing-button-cursor"} type={"button"}
                                            onClick={() => setTool(0)}>
                                        Cursor</button>

                                </td>
                                <td>
                                    <button className={"drawing-button-reset"} type={"button"}
                                            onClick={reset}>
                                        Reset</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className={"drawing-button-brush"} type={"button"}
                                            onClick={() => setTool(1)}>
                                        Brush</button>
                                </td>
                                <td>

                                    <select id={"drawing-color"} onChange={changeColor}>
                                        <option value={color}>Color</option>
                                        <option value="black">Black</option>
                                        <option value="blue">Blue</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="#FFD518">Yellow</option>
                                        </select>
                                </td>
                            </tr>
                        </table>


                        </div>
                    <div className='ui-tokens'><Tokens roomId={roomId} tokenCallback={callbackFunction} tokens={messages}/></div>
                    <div className='ui-maps'>
                      <MapHolder roomId={roomId}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ChatRoom;
