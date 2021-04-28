import Map from "./map.js";

import React from 'react';

class MapHolder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      maps: []
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = () => {
    let comp = this;
    setInterval(function(){
      fetch('http://unn-w17016042.newnumyspace.co.uk/test/getMaps.php').then(function(data) {
          return data.json();
        }).then(function(response){
          comp.setState({maps: response});
        });
    }, 1000);
  }

  UploadFile = () => {
      let temp = this;
      let formData = new FormData();
      formData.append("file", document.getElementById("mapFile").files[0]);
      document.getElementById("mapSubmit").disabled = true;
      fetch('http://unn-w17016042.newnumyspace.co.uk/test/mapUpload.php', {
        method: "POST",
        body: formData
      }).then(function(data) {
        return data.text();
      }).then(function(response){
        document.getElementById("mapSubmit").disabled = false;
        if(response == "Error"){
          alert("There was an error while uploading this map, please try again");
        }else{
          document.getElementById("mapFile").value = null;
        }
      });

  }


  render() {
      return (
        <React.Fragment>
        {this.state.maps.map(map =>
          <Map key={map} mapName={map} roomId={this.props.roomId}/>
        )}
        <div id="mapUploader">
          <input type="file" id="mapFile" name="mapFile" />
          <button onClick={this.UploadFile} id="mapSubmit">Upload</button>
        </div>
        </React.Fragment>
      );
  }
}
export default MapHolder;
