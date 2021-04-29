import React from 'react';
import Token from './token.js';
import Modal from './modal.js';



    class Tokens extends React.Component {
        state = {
            data: [],
            tokens: [],
            roomId: this.props.roomId,
            show: false,
        }

        componentDidMount() {
            let array = [];
            const basepath = "http://localhost/vtapp/tabletop";
            const url = "/src/ChatRoom/components/get_tokens.php";
            fetch(basepath + url)
                .then( (response) => response.json() )
                .then( (data) => {
                    for (var i = 0; i < data.length; i++) {
                    let details = {};
                    details.id = data[i];
                    details.x = 0;
                    details.y = 0;
                    details.src = basepath + '/tokens/' + data[i];
                    array.push(details);
                    console.log(array);
                }
                    this.setState({data:array})
                })
                .catch ((err) => {
                        console.log("something went wrong ", err)
                    }
                );
        }

        componentDidUpdate(prevProps) {
            if (this.props.tokens.length > prevProps.tokens.length) {
                this.setState({data: this.props.tokens});
            }
        }


        }
        lobbyCallback = (childData) => {
            this.props.tokenCallback(childData);
        }

        showModal = () => {
            this.setState({ show: true });
            let offsets = document.getElementById('upload-token').getBoundingClientRect();
            console.log(offsets.top, offsets.left);
        };

        hideModal = () => {
            this.setState({ show: false });
        };

        handleUpload = () => {
            const basepath = "http://localhost/vtapp/tabletop";
            const url = "/src/ChatRoom/components/upload_tokens.php";
            let submit_button = document.getElementById('token-upload');
            let formData = new FormData();
            formData.append("file", document.getElementById("token-file").files[0]);
            submit_button.disabled = true;
            fetch(basepath + url, {
                method: 'POST',
                body: formData
            }).then(function(data) {
                return data.text();
            }).then(function(response) {
                    submit_button.disabled  = false;
                    if (response == "Error") {
                        alert("There was an error uploading the token, please try again");
                    } else {
                        document.getElementById("token-file").value = null;
                    }
                }
            );
        }


        render() {

            this.showModal = this.showModal.bind(this);
            this.hideModal = this.hideModal.bind(this);
            this.handleUpload = this.handleUpload.bind(this);

            return (

                <div className={'token-container'}>
                    <h2>Tokens</h2>
                    <Modal show={this.state.show} handleClose={this.hideModal} handleUpload={this.handleUpload}/>
                    <img src='http://simpleicon.com/wp-content/uploads/plus-256x256.png' id='upload-token' onClick={this.showModal}/>
                    {
                        this.state.data.map( (details, i)  => (<Token Key={i} details={details} roomId={this.props.roomId} tokensCallback={this.lobbyCallback}/> ) )
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
