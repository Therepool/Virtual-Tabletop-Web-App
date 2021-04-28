import React from 'react';
import Draggable from 'react-draggable';


class Token extends React.Component {
    state = {
        roomId: this.props.roomId,
        x: this.props.x,
        y: this.props.y,
        id: this.props.id,
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
        this.props.tokensCallback(coords);
    }

    render() {


        return (

            <div>
                <Draggable
                        onStart={this.handleDragStart}
                        onDrag={this.handleDrag}
                        onStop={this.getNewCoords}>
                        <img src={this.props.src} />
                    </Draggable>
            </div>


        );


    }
}
export default Token;


