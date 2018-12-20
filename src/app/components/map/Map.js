import L from 'leaflet'
 export class Map {
    constructor(mapPlaceholder,mapOptions){
         this.map = new L.Map(mapPlaceholder, mapOptions);
        }
        get getMap(){
                return this.map;
                
        }
}


