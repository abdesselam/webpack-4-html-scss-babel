var $ = require("jquery");
import 'bootstrap';
import './css/styles.scss';

 import {Map} from './app/components/map/Map';
 import map from './app/config/map';
 import {Header} from './app/components/header/Header';
 import {Aside} from './app/components/aside/Aside' 

//import fileToDb from './app/methode/functionFileToDb'
import  Layer  from './app/components/map/Layers';
import layer from './app/config/layer';

var mapViewer = new Map(map.mapPlaceholder,map.mapOptions).getMap;
var lyers = Layer(mapViewer,layer);





 

/*
Promise.all(LayersTab).then(function(values) {
  console.log('---33333333------',values);
});
*/
 
 new Header();
 new Aside();   


 


// import json to db
//fileToDb() 