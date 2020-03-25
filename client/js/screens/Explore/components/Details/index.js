import React, {useEffect, useState} from 'react';
import {
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import GetImages from '../utils/GetImages';
import Brief from '../Brief';
import {PrimaryBtn} from '../../../../globalStyles';
import fetchData from '../../../../config/fetchData';
import styled from 'styled-components';

const Details = ({modalVisible, setModalVisible, detail}) => {
  const [features, setFeatures] = useState([]);
  const query = `query{
    features(where:{maps_some:{externalId:"${detail ? detail.id : ''}"}}){
      title
    }
  }`;

  useEffect(() => {
    fetchData(query).then(data => {
      setFeatures(data.features);
    });
  }, [detail]);

  const GoogleMapsOpen = location => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const url = Platform.select({
      ios: `${scheme}@${location.lat},${location.lng}`,
      android: `${scheme}${location.lat},${location.lng}`,
    });
    Linking.openURL(url);
  };
  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={styles.header}></View>
      <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Text>close</Text>
      </TouchableOpacity>
      <View style={styles.image}>
        <GetImages
          reference={
            detail.photos
              ? detail.photos[0].photo_reference
              : detail.photo_reference
          }
        />
      </View>
      <Container>
        <Brief detail={detail} />
        <Separator />
        <Text style={styles.activities}>Activities:</Text>
        {features
          ? features.map((feature, index) => (
              <OpenSansLight key={index} style={styles.lists}>
                {feature.title}
              </OpenSansLight>
            ))
          : null}
        <View>
          <PrimaryBtn onPress={() => GoogleMapsOpen(detail.geometry.location)}>
            Google Maps
          </PrimaryBtn>
          <OpenSansLight>
            Already here? <Text style={styles.underLine}>start green time</Text>
          </OpenSansLight>
        </View>
      </Container>
    </Modal>
  );
};
const Container = styled.View`
  padding: 16px;
`;
const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: #ddd;
  margin: 10px 0;
`;
const OpenSansLight = styled.Text`
  color: #505050;
  font-size: 16px;
  line-height: 20px;
`;
const styles = StyleSheet.create({
  activities: {
    fontSize: 16,
  },
  header: {
    height: 44,
  },
  image: {
    height: 307,
  },
  underLine: {
    textDecorationLine: 'underline',
  },
});

export default Details;
