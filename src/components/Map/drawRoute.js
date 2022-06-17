export const drawRoute = (map, coordinates) => {

  map.flyTo({
    center: coordinates[0],
    zoom: 15
  });

  map.addLayer({
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      lineMetrics: true,
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": "#FDBF5A",
      "line-width": 6,
      'line-gradient': [
        'interpolate',
        ['linear'],
        ['line-progress'],
        0, "#FDBF5A",
        1, "#94C525"
      ]
    }
  });

  // map.addSource("polygon", createGeoJSONCircle(coordinates[0], 0.5));

  // map.addLayer({
  //   "id": "polygon",
  //   "type": "fill",
  //   "source": "polygon",
  //   "layout": {},
  //   "paint": {
  //     "fill-color": "blue",
  //     "fill-opacity": 0.6
  //   }
  // });

  map.addLayer({
    id: "start-point",
    type: "circle",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [coordinates[0]]
        }
      }
    },
    paint: {
      'circle-color': '#00b7bf',
      'circle-radius': 8,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#333',
    },
  });

  // "type": "geojson",
  // "data": {
  //   "type": "FeatureCollection",
  //   "features": [{
  //     "type": "Feature",
  //     "geometry": {
  //       "type": "Polygon",
  //       "coordinates": [ret]
  //     }
  //   }]
  // }

};