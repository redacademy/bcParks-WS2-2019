import React, {useState, useEffect} from 'react';
import MapContext from './MapContext';
import fetchData from '../config/fetchData';
import Geolocation from '@react-native-community/geolocation';
import {GOOGLE_API_KEY} from '../config';

const MapProvider = ({children}) => {
  const [mapData, setMapData] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [selectedMap, setSelectedMap] = useState();
  const [userLocation, setUserLocation] = useState();
  const [coords, setCoords] = useState([]);
  const [arrived, setArrived] = useState(false);
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
    });
    Geolocation.watchPosition(({coords}) => setUserLocation(coords));
  }, []);

  const calcRadius = () => region.longitudeDelta * 40000;

  const GoogleAPIFetch = (lat, lng) => {
    const dataURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${calcRadius()}&type=park&fields=place_id,name,opening_hours,formatted_address,geometry&key=${GOOGLE_API_KEY}`;
    fetch(dataURL)
      .then(response => response.json())
      .then(data => setAPIData(data.results))
      .then(() => AddDataFromGoogleAPI());
  };
  const AddDataFromGoogleAPI = () => {
    APIData.map(APIMap => {
      const mutation = addMapMutation(
        APIMap.id,
        APIMap.name,
        APIMap.vicinity,
        APIMap.photos ? APIMap.photos[0].photo_reference : '',
        APIMap.plus_code,
        APIMap.geometry.location,
        APIMap.geometry.viewport.northeast,
        APIMap.geometry.viewport.southwest,
      );
      mapData.filter(map => {
        if (map.externalId !== APIMap.id) {
          fetchData(mutation);
        }
      });
    });
  };

  useEffect(() => {
    if (userLocation) {
      GoogleAPIFetch(userLocation.latitude, userLocation.longitude);
    }
  }, [userLocation]);

  useEffect(() => {
    setSelectedMap(APIData[0]);
  }, [APIData]);

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
        arrived,
        setArrived,
        GoogleAPIFetch,
      }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
