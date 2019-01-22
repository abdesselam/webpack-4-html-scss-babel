import './css/styles.scss';
var $ = require("jquery");
import 'bootstrap';

 import {Map} from './app/components/map/Map';
 import map from './app/config/map';
 import {Header} from './app/components/header/Header';
 import {Aside} from './app/components/aside/Aside'

import fileToDb from './app/methode/functionFileToDb'
import { Layer } from './app/components/map/Layer';
import layer from './app/config/layer';

 var mapViewer = new Map(map.mapPlaceholder,map.mapOptions).getMap;
 new Layer(mapViewer,layer)
 new Header();
 new Aside();
 


// import json to db
//fileToDb()