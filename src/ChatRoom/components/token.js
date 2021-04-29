import React from 'react';
import Draggable from 'react-draggable';


class Token extends React.Component {
    state = {
        roomId: this.props.roomId,
        x: 0,
        y: 0,
        id: this.props.details.id,
        src: this.props.details.src,
    }

    componentDidMount() {
        //check if x and y property has been passed.
        if (this.props.details.x !== undefined && this.props.details.y !== undefined) {
            this.setState({x: this.props.details.x, y:this.props.details.y, src: this.props.details.src});
        }
    }

    getNewCoords = (e) => {
        var posX = 0;
        var posY = 0;
        var cssMatrix = e.target.style.transform;
        cssMatrix = cssMatrix
            .split('(')[1]
            .split(')')[0]
            .split(',').map(parseFloat);
        posX = cssMatrix[0];
        posY = cssMatrix[1];
        this.setState({x:posX, y:posY})
        var token_data = {'id':e.target.id, 'src':e.target.src,'x':posX, 'y':posY};
        this.props.tokensCallback(token_data);
    }

    render() {


        return (

                <Draggable
                    defaultPosition={{x: this.state.x, y: this.state.y}}
                        onStart={this.handleDragStart}
                        onDrag={this.handleDrag}
                        onStop={this.getNewCoords}>
                        <img src={this.state.src} id={this.state.id}/>
                    </Draggable>


        );


    }
}
export default Token;


