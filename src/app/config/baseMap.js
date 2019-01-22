
export default [
  {
    id: "osm",
    title:'OpenStreetMap',
    tilelayer:{
      urlTemplate:'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      options: {

      }
    }
  },
  {
    id: "satellite",
    title:'Esri WorldImagery',
    tilelayer:{
      urlTemplate:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      options: {

      }
    }
  },
  {
    id: "streets",
    title:'Esri WorldStreetMap',
    tilelayer:{
      urlTemplate:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      options: {

      }
    }
  }
];



