import React, {useEffect, useState, useContext} from 'react';
import {Text, Modal, StyleSheet, View, Linking, ScrollView} from 'react-native';
import GetImages from '../utils/GetImages';
import Brief from '../Brief';
import {PrimaryBtn, theme, IconButton} from '../../../../globalStyles';
import fetchData from '../../../../config/fetchData';
import styled from 'styled-components';
import {NavigationContext} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Details = ({modalVisible, setModalVisible, detail}) => {
  const navigation = useContext(NavigationContext);
  const [features, setFeatures] = useState([]);
  const query = `query{
    features(where:{maps_some:{externalId:"${detail ? detail.id : ''}"}}){
      title
    }
  }`;
  useEffect(() => {
    fetchData(query).then(data => {
      if (data) {
        setFeatures(data.features);
      }
    });
  }, [detail]);
  const Features = () => {
    return features.length ? (
      <ScrollView>
        <Text style={styles.features}>Features:</Text>
        {features.map((feature, index) => (
          <OpenSansLight key={index} style={styles.lists}>
            - {feature.title}
          </OpenSansLight>
        ))}
      </ScrollView>
    ) : (
      <OpenSansLight center>Features currently unavailable</OpenSansLight>
    );
  };

  const GoogleMapsOpen = location => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const url = Platform.select({
      ios: `${scheme}@${location.lat},${location.lng}`,
      android: `${scheme}${location.lat},${location.lng}`,
    });
    Linking.openURL(url);
  };
  const onPress = () => {
    setModalVisible(false);
    navigation.navigate('Timer');
  };
  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={styles.header}></View>
      <IconButton onPress={() => setModalVisible(false)}>
        <Icon name="close" size={30} color={theme.bodyTextColor} />
      </IconButton>
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
        <Brief detail={detail} limit={false} />
        <Separator />
        {Features()}
        <Box>
          <PrimaryBtn onPress={() => GoogleMapsOpen(detail.geometry.location)}>
            Maps
          </PrimaryBtn>
          <OpenSansLight>
            Already here?{' '}
            <Text style={styles.link} onPress={() => onPress()}>
              start green time
            </Text>
          </OpenSansLight>
        </Box>
      </Container>
    </Modal>
  );
};

const Box = styled.View`
  margin: 50px auto 0;
  width: 260px;
`;

const Container = styled.View`
  padding: 16px;
`;
const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: #ddd;
  margin: 30px 0 20px;
`;
const OpenSansLight = styled.Text`
  color: #505050;
  font-family: ${theme.bodyFontLight};
  font-size: ${theme.bodyFontSize};
  line-height: 20px;
  margin-top: 28px;
  text-align: ${({center}) => (center ? 'center' : 'left')};
`;
const styles = StyleSheet.create({
  features: {
    fontFamily: theme.bodyFont,
    fontSize: 18,
  },
  header: {
    height: 44,
  },
  image: {
    height: 307,
  },
  link: {
    fontFamily: theme.bodyFontLight,
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
  },
});

export default Details;
