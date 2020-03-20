import React from 'react';
import Maps from './Maps';
import {withNavigation} from 'react-navigation';

const MapsContainer = ({navigation}) => <Maps navigation={navigation} />;

export default withNavigation(MapsContainer);
