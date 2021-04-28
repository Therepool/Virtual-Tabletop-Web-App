import React from 'react';
import Token from './token.js';

    class Tokens extends React.Component {
        state = {
            data: [],
            tokens: [],
            roomId: this.props.roomId,
        }

        lobbyCallback = (childData) => {
            this.props.tokenCallback(childData);
        }

        render() {


            return (

                <div>
                    <img src='http://simpleicon.com/wp-content/uploads/plus-256x256.png'/>
                    <Token src={'http://simpleicon.com/wp-content/uploads/plus-256x256.png'} tokensCallback={this.lobbyCallback}/>
                </div>


            );


        }

class Tokens extends React.Component {
    state = {
        data: [],
        tokens: [],
        roomId: this.props.roomId,
    }

    getNewCoords = (e) => {
        e.preventDefault();
        var posX = 0;
        var posY = 0;
        var cssMatrix = e.target.style.transform;
        console.log(cssMatrix);
        cssMatrix = cssMatrix
            .split('(')[1]
            .split(')')[0]
            .split(',').map(parseFloat);
        posX = cssMatrix[0];
        posY = cssMatrix[1];
        var coords = {'img-src':e.target.src,'x':posX, 'y':posY};
        this.props.tokenCallback(coords);
    }

    render() {


        return (

            <div>
                <img src='http://simpleicon.com/wp-content/uploads/plus-256x256.png'/>
                {/*This needs moving to token component to make each token draggable*/}
                <Draggable
                    onStart={this.handleDragStart}
                    onDrag={this.handleDrag}
                    onStop={this.getNewCoords}>
                    <img src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Folliebarder%2Ffiles%2F2018%2F03%2Fsuper_mario_plumber_new-1200x675.jpg' id='token1'/>
                </Draggable>

                <Draggable
                    onStart={this.handleDragStart}
                    onDrag={this.handleDrag}
                    onStop={this.getNewCoords}>
                    <img src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Folliebarder%2Ffiles%2F2018%2F03%2Fsuper_mario_plumber_new-1200x675.jpg' id='token2'/>
                </Draggable>
            </div>


        );


    }
}
export default Tokens;
