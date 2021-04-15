import React, {useRef, useEffect, useState} from 'react';

import "./ChatRoom.css";

{/* added content----------------------------------*/}





function ChatRoom() {

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)


    {/* Need to be changed to static */}
    let tool = "cursor"

    let color = "red"



    useEffect(() => {
        const canvas = canvasRef.current;

        const context = canvas.getContext("2d")

        context.lineCap = "round"
        context.strokeStyle = color
        context.lineWidth = 5


        contextRef.current = context;
    }, [])

    const changeToBrush = () =>{
        tool = "brush"
    }

    const changeToCursor = () =>{
        tool = "cursor"
    }

    const colorPalette = () =>{
        color = "black"
    }


    const reset = () =>{

        const canvas = canvasRef.current;

        const context = canvas.getContext("2d")

        context.clearRect(0, 0, canvas.width, canvas.height);
    }


    const startDrawing = ({nativeEvent}) => {

        if (tool === "brush") {
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

{/* added content----------------------------------*/}


    return (
        <div className="chat-room-container">

            <div className='ui-container'>
                <div className="ui-float">
                    <div className='ui-player-list'>Player List</div>
                    <div className='ui-lobby-options'>Lobby Options</div>
                </div>

                <div className="ui-float map">
                    {/* added content----------------------------------*/}

                    <canvas

                        width={"1400"}
                        height={"937"}
                        onMouseDown={startDrawing}
                        onMouseUp={finishDrawing}
                        onMouseMove={draw}

                        ref={canvasRef}

                    />
                    {/* added content----------------------------------*/}

                    <div className='ui-dice-tool'>Dice Tool</div>



                </div>

                <div className="ui-float">
                    <div className='ui-drawing-tool'>


                        {/* added content----------------------------------*/}

                        <table className='ui-drawing-tool-table'>

                            <tr>
                                <td>

                                    <button className={"drawing-button-cursor"} type={"button"} onClick={changeToCursor}>
                                        Cursor</button>

                                </td>
                                <td>
                                    <button className={"drawing-button-reset"} type={"button"} onClick={reset}>
                                        Reset</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className={"drawing-button-brush"} type={"button"} onClick={changeToBrush}>
                                        Brush</button>
                                </td>
                                <td>
                                    <button className={"drawing-button-color"} type={"button"} onClick={colorPalette}>
                                        Color</button>
                                </td>
                            </tr>
                        </table>


                        </div>
                    <div className='ui-tokens'>Tokens</div>
                    <div className='ui-maps'>Maps</div>
                </div>
            </div>

        </div>
    );
};

export default ChatRoom;