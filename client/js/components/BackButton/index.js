import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme, IconButton} from '../../globalStyles';
import {NavigationContext} from '@react-navigation/native';

const BackButton = to => {
  const navigation = useContext(NavigationContext);
  return (
    <IconButton onPress={() => navigation.goBack(to)}>
      <Icon name="chevron-left" size={30} color={theme.bodyTextColor} />
    </IconButton>
  );
};

export default BackButton;
