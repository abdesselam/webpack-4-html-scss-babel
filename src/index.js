import './css/styles.scss';
var $ = require("jquery");
import 'bootstrap';

 import {Map} from './app/components/map/Map';
 import map from './app/config/map';
 import {Header} from './app/components/header/Header';
 import {Aside} from './app/components/aside/Aside'


  
 
 
(function  startup (){

   var mapView = new Map(map.mapPlaceholder,map.mapOptions).getMap;
    new Header();
    new Aside();
})();



