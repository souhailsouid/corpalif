// componentDidMount() {

//   // const { mapteam } = this.props.mapteam
//   this.props.getCurrentStructure()
//   this.props.getCurrentStructureMaps()
//   var mymap = L.map('mapid').setView([ 48.676046, 2.412892 ], 10)
//   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1Ijoic291aGFpbHMiLCJhIjoiY2pwNW53NWt1MTIxdzNrcGhyN2g3aDZlYSJ9.RhGI7ibxm_dMpFycmibT0g'
//   }).addTo(mymap)
//   var marker = ({ mapteam }) => L.marker(mapteam.map((mapteam) => <MapsTeam mapteam={mapteam} />)).addTo(mymap)

//   marker.bindPopup = 'CENTRE MÉDICAL BLIGNY - USP'.openPopup()

//   return (

//     		 <div id="mapid"/>
//   )
