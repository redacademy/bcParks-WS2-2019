import React, {useState} from 'react';
import MapContext from './MapContext';

const MapProvider = ({children}) => {
  const [mapData, setMapData] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [selectedMap, setSelectedMap] = useState();
  const [userLocation, setUserLocation] = useState();
  const [coords, setCoords] = useState([]);

  return (
    <MapContext.Provider
      value={{
        mapData,
        setMapData,
        APIData,
        setAPIData,
        selectedMap,
        setSelectedMap,
        userLocation,
        setUserLocation,
        coords,
        setCoords,
      }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
