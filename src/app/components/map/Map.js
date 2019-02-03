import L from 'leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-providers'
import 'leaflet-draw'
import '../../../../node_modules/leaflet-draw/dist/leaflet.draw.css'





//import 'leaflet-groupedlayercontrol'
 //import ExampleData from './exampledata'





export class Map {   
        
        
  

        constructor(mapPlaceholder,mapOptions){
        console.log('------------------------------------------------------------------------------------------------------------------------Map------')

        this.map = new L.Map(mapPlaceholder, mapOptions);

//console.log('ExampleData-------------------',ExampleData)

///------------------------------------------------------------------------------------------------------------
         // Overlay layers are grouped
     /*    
    var groupedOverlays = {
        "Landmarks": {
          "Cities": ExampleData.LayerGroups.cities,
          "Restaurants": ExampleData.LayerGroups.restaurants
        },
        "Random": {
          "Dogs": ExampleData.LayerGroups.dogs,
          "Cats": ExampleData.LayerGroups.cats
        }
      };
  
      var options = {
        // Make the "Landmarks" group exclusive (use radio inputs)
        exclusiveGroups: ["Landmarks"],
        // Show a checkbox next to non-exclusive group labels for toggling all
        groupCheckboxes: true
      };
  
      // Use the custom grouped layer control, not "L.control.layers"
      var layerControl = L.control.groupedLayers(ExampleData.Basemaps, groupedOverlays, options);
      this.map.addControl(layerControl);
      */
///------------------------------------------------------------------------------------------------------------



 

                //geosearch
                const provider = new OpenStreetMapProvider();
                const searchControl = new GeoSearchControl({
                provider: provider,
                });
                this.map.addControl(searchControl);

                //usine simpl tailLayer
                //L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(this.map)
    


                //geoJson



                // usin leaflet provider     
                // var defaultLayer =  L.tileLayer.provider('Esri.WorldImagery').addTo(this.map);  
                var defaultLayer = L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(this.map);
                var baseLayers = {
                        'OpenStreetMap Default': defaultLayer,
                        'Esri WorldImagery': L.tileLayer.provider('Esri.WorldImagery')

                };
                var overlayLayers = {
                        'OpenSeaMap': L.tileLayer.provider('OpenSeaMap')
                };
                L.control.layers(baseLayers, overlayLayers, {collapsed: true}).addTo(this.map);






                //draw        
                var drawnItems = new L.FeatureGroup();
                this.map.addLayer(drawnItems);
                var drawControl = new L.Control.Draw({
                        draw: {
                                circle:false,
                                circlemarker:false,
                                rectangle:false
                                },
                        edit: {
                        featureGroup: drawnItems
                        },
                        position:'topright'
                });
                this.map.addControl(drawControl);

                // console.log('-------------------getJsons()--------------------');




               
             
        } 

        


                
 
        get  getMap(){
                return this.map;
                
        }











        //exemple asybc await




        //   async getJsons() {
        //         // eslint-disable-next-line no-bitwise
        //         const url = 'https://maptimeboston.github.io/leaflet-intro/rodents.geojson';
            
        //         const request = await fetch(url);
        //         const json = await request.json();
        //         return this.parse({ data: json });
        //       }



 
        //       // async function
        //         async getRequest(url){
        //                 let data = await (await (fetch(url)
        //                 .then(res => {
        //                 return res.json()
        //                 })
        //                 .catch(err => {
        //                 console.log('Error: ', err)
        //                 })
        //                 ))
        //                 return data
        // }


        // const response = await fetch('https://maptimeboston.github.io/leaflet-intro/rodents.geojson');
        // const json = await response.json();
        // console.log(json);


}


