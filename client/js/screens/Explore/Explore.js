import React, {useRef, useContext} from 'react';
import Maps from '../../components/Maps';
import MapSwiper from './components/MapSwiper';
import MapContext from '../../context/MapContext';

const ExploreScreen = ({navigation}) => {
  const {APIData, mapData, setSelectedMap} = useContext(MapContext);
  const _carousel = useRef();
  return (
    <Maps navigation={navigation} _carousel={_carousel}>
      <MapSwiper
        mapData={APIData}
        setSelectedMap={setSelectedMap}
        _carousel={_carousel}
      />
    </Maps>
  );
};
export default ExploreScreen;
