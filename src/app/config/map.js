export default {
    mapPlaceholder: "viewDiv",
    mapOptions: {
        layers: [
            new L.TileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
              maxZoom: 18,
            }),
          ],
        center: [ 31.5, 3 ],
        zoom: 5.5
    }
}