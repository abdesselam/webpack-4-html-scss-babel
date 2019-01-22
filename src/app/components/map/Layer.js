import L from 'leaflet';



export class Layer {
    constructor (map,layer){
        console.log('------------------------------------------------------------------------------------------------------------------------Layer------')
        
        this.map = map;
        layer.forEach(element => {
            this.loadLayer(element)
        });    
    }

    loadLayer(data){
                    fetch(data.url).then(res=>{ 
                        return res.json();
                    }).then(res=>{
                        L.geoJSON(res[data.id],data.option).addTo(this.map)
                    })
                }

}
