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
  const [region, setRegion] = useState({
    latitude: 49.2479999,
    longitude: -123.1300971,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
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
      features{title}
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
        region,
        setRegion,
      }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
