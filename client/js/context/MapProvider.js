import React, {useState, useEffect} from 'react';
import MapContext from './MapContext';
import fetchData from '../config/fetchData';
import Geolocation from '@react-native-community/geolocation';

const MapProvider = ({children}) => {
  const [mapData, setMapData] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [selectedMap, setSelectedMap] = useState();
  const [userLocation, setUserLocation] = useState();
  const [coords, setCoords] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const query = `query {
    maps {
      id
      name
      externalId
      vicinity
      photo_reference
      geometry {
        location {
          lat
          lng
        }
      }
    }
  }`;

  useEffect(() => {
    fetchData(query).then(data => {
      setMapData(data.maps);
      setSelectedMap(data.maps[0]);
    });
    Geolocation.watchPosition(({coords}) => setUserLocation(coords));
  }, []);

  return (
    <MapContext.Provider
      value={{
        mapData,
        APIData,
        setAPIData,
        selectedMap,
        setSelectedMap,
        userLocation,
        coords,
        setCoords,
        selectedIndex,
        setSelectedIndex,
      }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
