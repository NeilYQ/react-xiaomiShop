import React, {Component} from 'react';

import './map.css'

class Map extends Component {
  componentDidMount(){
    let {BMap, BMAP_STATUS_SUCCESS} = window
    console.log(BMap, BMAP_STATUS_SUCCESS)
    var map = new BMap.Map("myMap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,14);
  
    var geoc = new BMap.Geocoder(); 
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() === BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        console.log('您的位置：'+r.point.lng+','+r.point.lat);

        var pt = r.point;
        geoc.getLocation(pt, function(rs){
          var addComp = rs.addressComponents;
          console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
        });      
      }
      else {
        alert('failed'+this.getStatus());
      }        
    },{enableHighAccuracy: true})
  }
  render (){
    return (
      <div className='map'>
        <div id='myMap'></div>
      </div>
    )
  };
}

export default Map;
