import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme, styles} from '../../globalStyles';

const Arrow = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 20px;
  margin: 30px 0 0;
  z-index: 50;
`;

const BackButton = ({navigation}) => {
  console.log(navigation);
  return (
    <Arrow>
      <TouchableOpacity onPress={() => navigation.goBack('Home')}>
        <Icon
          name="chevron-left"
          size={30}
          color={theme.bodyTextColor}
          style={styles.backIcon}
        />
      </TouchableOpacity>
    </Arrow>
  );
};

export default BackButton;
