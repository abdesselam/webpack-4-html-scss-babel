import './aside.scss';
import template  from './aside.html';

export class Aside {
    constructor(){
        console.log('------------------------------------------------------------------------------------------------------------------------Aside------')
        document.getElementById("aside").innerHTML = template;
        var asideTemplate = document.getElementById("aside");
  
    }
    startup() { 


        var basemapContainer = document.createElement("div");
        $(this.domNode).find("#basemapGallery").append(basemapContainer);
        
        var localSource = new LocalBasemapsSource({
            basemaps: baseMap.localBasemaps
        });
        var basemapGallery = new BasemapGallery({
            view: this.mapView,
            container: basemapContainer,
            source: localSource
        });

        basemapGallery.on("error", msg => console.log("basemap gallery error:  ", msg));

        $.ajax({
            url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
        }).done(() =>
        baseMap.onlineBasemaps.forEach((basemap) => localSource.basemaps.push(basemap))
        );

        var legendContainer = document.createElement('div');
        $(this.domNode).find("#legend").append(legendContainer);

        var legend = new Legend({
            view: this.mapView,
            container: legendContainer
        });
        var layers = document.createElement("div");
        $(this.domNode).find("#layerList").append(layers);
        var layerList = new LayerList({
            view: this.mapView,
            container: layers,
        });

    }
}