import React, { useEffect, useState } from "react";
import { MapContainer, Polygon, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from './IndianData/Indian_States.json'

const IndiaMap = () => {
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    // Set jsonData when the component mounts
    const jsonData = data;
    setJsonData(jsonData);
    console.log("JSOND: ", jsonData);
    console.log("JSON: ", data);
  }, []);

  return (
    <div>
      <MapContainer
        center={[22.5, 80]} 
        zoom={4.5} // Set the initial zoom level
        style={{ height: "100vh", width: "100vw" }}
        
      >
        <GeoJSON
          data={data}
          onEachFeature={(feature, layer) => {
            layer.on("click", () => {
              // const stateName = feature.properties;
              console.log(feature.properties.NAME_1);
              // window.location.href = `/state-link/${stateName}`;
            });
          }}
        />

        {/* {data.features.map((state, index) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);
          return (
            <Polygon
              pathOptions={{
                fillColor: "000",
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: "white",
              }}
              positions={coordinates}
              eventHandlers={{

                click: (e) => {
                  console.log("Clicked " + state.properties.NAME_1)
                }
              }}
            />
          );
        })} */}
      </MapContainer>
    </div>
  );
};

export default IndiaMap;
