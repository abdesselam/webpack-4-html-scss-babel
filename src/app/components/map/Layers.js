import L from 'leaflet';

require("babel-core/register");
require("babel-polyfill");
 
export default async function (map,layersConf) {

    for(var ele of layersConf){  
        const response = await fetch(ele.url);
        const res = await response.json();
        const layer = L.geoJSON(res[ele.id],ele.option)
        layer.addTo(map);        
} 
}

    


