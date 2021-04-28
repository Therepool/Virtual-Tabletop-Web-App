import React from 'react';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mapName: this.props.mapName,
      roomId: this.props.roomId,
    };
  }
  handleClick = (e) => {
        let temp = this;
        fetch('http://unn-w17016042.newnumyspace.co.uk/test/setCurrentMap.php?filename=' + this.state.mapName).then(function(data) {
          return data.text();
        }).then(function(response){
          if(response == "Error"){
            alert("There was an error while changing this map, please try again");
          }
        });
  }

    render() {
        return (
            <div onClick={this.handleClick} class="mapThumb">

                <img src={'http://unn-w17016042.newnumyspace.co.uk/test/maps/' /*+ this.roomId + '/' */ + this.state.mapName}/>
            </div>
        );
    }

}
export default Map;
