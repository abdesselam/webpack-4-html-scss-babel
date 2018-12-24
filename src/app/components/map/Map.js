import L from 'leaflet'
 export class Map {
         constructor(mapPlaceholder,mapOptions){
                 this.map = new L.Map(mapPlaceholder, mapOptions);
                 
                 console.log('--------------hasLyer',this.map.hasLayer(mapOptions.layers[0]))
                //   this.map.remove(mapOptions.layers[0])
         console.log('--------------hasLyer----',this.map.hasLayer(mapOptions.layers[0]))
         console.log('--------------hasLyer-----------',mapOptions.layers[0])
        // this.map.addLayer(mapOptions.layers[0])
        // mapOptions.layers[0].addTo(this.map)
        

        fetch('https://maptimeboston.github.io/leaflet-intro/rodents.geojson').then(function(data){
                        console.log('------------5555----',datra)
        })
        
               
 
                }
        get getMap(){
                return this.map;
                
        }

        //   getJsons() {
        //         // eslint-disable-next-line no-bitwise
        //         const url = 'https://maptimeboston.github.io/leaflet-intro/rodents.geojson';
            
        //         const request = await fetch(url);
        //         const json = await request.json();
        //         return this.parse({ data: json });
        //       }
}


