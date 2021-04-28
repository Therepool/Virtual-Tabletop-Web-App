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
    }
    export default Tokens;
