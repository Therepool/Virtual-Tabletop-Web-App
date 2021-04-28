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
    console.log("AAAA");
    let map = document.getElementsByClassName("map")[0];
    map.style.backgroundImage = "url(https://www.freeiconspng.com/thumbs/grid-png/grid-png-transparent-pic-18.png), url('http://unn-w17016042.newnumyspace.co.uk/test/maps/" + this.state.mapName;
    map.style.backgroundSize = "500px 500px, 500px";
    map.style.backgroundRepeat = "repeat, no-repeat";
    map.style.backgroundPosition = "center center, center center"
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
