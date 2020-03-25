import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme, IconButton} from '../../globalStyles';

const BackButton = ({navigation}) => {
  return (
    <IconButton onPress={() => navigation.goBack('Home')}>
      <Icon name="chevron-left" size={30} color={theme.bodyTextColor} />
    </IconButton>
  );
};

export default BackButton;
