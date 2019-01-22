import L from 'leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-providers'
import 'leaflet-draw'
import '../../../../node_modules/leaflet-draw/dist/leaflet.draw.css'
import basMap from '../../config/baseMap';
 
// import '../../../img/global.png';

import ooredooGeojson from '../../../data/ooredoo'
import ooredooImg from '../../../img/ooredoo.png'

import djezzyGeojson from '../../../data/djezzy'
import djezzyImg from '../../../img/djezzy.png'

import algeriePosteGeojson from '../../../data/algeriePoste'
import algeriePosteImg from '../../../img/algeriePoste.png'

import reseau4GLteGeojson from '../../../data/reseau4GLte'
import reseau4GLteImg from '../../../img/reseau4GLte.png'

import fibreObtiqueGeojson from '../../../data/fibreObtique'

import MSANGeojson from '../../../data/MSAN'
import msanImg from '../../../img/msan.png'




export class Map {       

        constructor(mapPlaceholder,mapOptions){
        console.log('------------------------------------------------------------------------------------------------------------------------Map------')

        this.map = new L.Map(mapPlaceholder, mapOptions);
 

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


