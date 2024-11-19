import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';

// Sample GeoJSON data - replace with your actual data
const sampleGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-122.4, 37.7],
          [-122.5, 37.8],
          [-122.3, 37.9],
          [-122.4, 37.7]
        ]]
      },
      properties: {
        name: "Sample Area"
      }
    }
  ]
};

export default function GeoJSONMap() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/precipitation_grid.geojson")
        .then((res) => {
            return res.json();
        })
        .then((geoJson) => {
            setData(geoJson);
        });
    },[])

  const geoJSONStyle = {
    color: '#0000FF',
    weight: 0,
    fillColor: '#0000FF',
    fillOpacity: 0.3
  };

  function calcColor(prec) {
    if (prec < 0.0012) {
      return "#FFFFFF";
    }
    else if (prec < 0.0059) {
      return "#c2c4fa";
    }
    else if (prec < 0.019) {
      return "#ababf6";
    }
    else if (prec < 0.0298) {
      return "#9493f2";
    }
    else if (prec < 0.049213) {
      return "#7e7aec";
    }
    else if (prec < 0.067402) {
      return "#6862e6";
    }
    else if (prec < 0.090945) {
      return "#5049de";
    }
    else if (prec < 0.1062) {
      return "#352ed6";
    }
    else {
      return "#0008cc";
    }
  }

  const onEachFeature = (feature, layer) => {
    layer.options.fillColor = calcColor(feature.properties.precipitation)
    layer.options.fillOpacity = 0.6
    layer.options.weight = 0
    
    layer.bindTooltip("<h4>"+feature.properties.precipitation.toFixed(3)+" in</h4>");
  };

  return (
    <MapContainer dragging={false} center={[42.4492, -83.3062]} zoom={10} scrollWheelZoom={false} zoomControl={false} style={{ height: 600, width: 600 }}>
      <TileLayer
        attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {data && (
        <GeoJSON
            ref={data}
            key={Math.random()}
            data={data}
            style={geoJSONStyle}
            onEachFeature={onEachFeature}
        />
        
      )}
      <Tooltip></Tooltip>
    </MapContainer>

  );
};

