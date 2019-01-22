import msanImg from '../../img/msan.png'
import reseau4GLteImg from '../../img/reseau4GLte.png'
import algeriePosteImg from '../../img/algeriePoste.png'
import ooredooImg from '../../img/ooredoo.png'
import djezzyImg from '../../img/djezzy.png'

export default [
    {
        id : "msan",
        title : "MSAN",
        typeType : "GeoJSON",
        type : "point",
        url : "http://localhost:3000/msan",
        color : "#28a7458f",
        option : {
                    pointToLayer:(geoJsonPoint, latlng)=>{
                            return L.marker(latlng, {icon: L.icon({
                                    iconUrl: msanImg,
                                    iconSize: [38, 38],
                                    iconAnchor: [22, 94],
                                
                                })});
                    },
                    style:(feature)=>{
                            return {
                                    color:"#f00"
                            }
                    }, 
                    onEachFeature:(feature,layer)=>{
                            layer.bindPopup(feature.properties.name)      
                    }
                }  ,
                img : msanImg      
    },
    {
        id : "lfo",
        title : "Liaison fibre optique",
        typeType : "GeoJSON",
        type : "line",
        url : "http://localhost:3000/lfo",
        option : {
            style:(feature)=>{
                    return {
                            color:"#ffbb07fa"
                    }
            }, 
            onEachFeature:(feature,layer)=>{
                    layer.bindPopup(feature.properties.name)      
            }
        }            
    },
    {
        id : "lte",
        title : "4G LTE",
        typeType : "GeoJSON",
        type : "polygon",
        url : "http://localhost:3000/lte",
        option : {
            style:(feature)=>{
                    return {
                            color:"#00bcd459"
                    }
            }, 
            onEachFeature:(feature,layer)=>{
                    layer.bindPopup(feature.properties.name)      
            }
        }          
    },
    {
        id : "algerieposte",
        title : "Algerie Poste",
        typeType : "GeoJSON",
        type : "point",
        url : "http://localhost:3000/algerieposte",
        option : {
            pointToLayer:(geoJsonPoint, latlng)=>{
                    return L.marker(latlng, {icon: L.icon({
                            iconUrl: algeriePosteImg,
                            iconSize: [38, 38],
                            iconAnchor: [22, 94],
                        
                        })});
            },
            style:(feature)=>{
                    return {
                            color:"#f00"
                    }
            }, 
            onEachFeature:(feature,layer)=>{
                    layer.bindPopup(feature.properties.name)      
            }
        }         
    },
    {
        id : "ooredoo",
        title : "Ooredoo",
        typeType : "GeoJSON",
        type : "point",
        url : "http://localhost:3000/ooredoo",
        option : {
            pointToLayer:(geoJsonPoint, latlng)=>{
                    return L.marker(latlng, {icon: L.icon({
                            iconUrl: ooredooImg,
                            iconSize: [38, 95],
                            iconAnchor: [22, 94],
                        
                        })});
            },
            style:(feature)=>{
                    return {
                            color:"#f00"
                    }
            }, 
            onEachFeature:(feature,layer)=>{
                    layer.bindPopup(feature.properties.name)      
            }
        }        
    },
    {
        id : "djezzy",
        title : "Djezzy",
        typeType : "GeoJSON",
        type : "point",
        url : "http://localhost:3000/Djezzy",
        option : {
            pointToLayer:(geoJsonPoint, latlng)=>{
                    return L.marker(latlng, {icon: L.icon({
                            iconUrl: djezzyImg,
                            iconSize: [38, 95],
                            iconAnchor: [22, 94],
                        
                        })});
            },
            style:(feature)=>{
                    return {
                            color:"#f00"
                    }
            }, 
            onEachFeature:(feature,layer)=>{
                    layer.bindPopup(feature.properties.name)      
            }
        }         
    }
]