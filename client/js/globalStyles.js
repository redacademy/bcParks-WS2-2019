import styled from 'styled-components';
import {Dimensions} from 'react-native';

export const theme = {
  primaryColor: '#49773A',
  accentColor: '#DA6645',
  grayColor: '#767676',
  screenBkgColor: '#AED1A7',
  txtInputBkg: '#FFF',
  bodyTextColor: '#000',
  invertTextColor: '#FFF',
  disabledColor: '#9D9D9D',
  MoodIconColor: '#FCCC1A',
  headlineFont: 'Comfortaa-Regular',
  bodyFont: 'OpenSans-Regular',
  bodyFontLight: 'OpenSans-Light',
  h1FontColor: '#CC6C4E',
  h1FontSize: '30px',
  h2FontSize: '24px',
  bodyFontSize: '18px',
  fullHeight: Dimensions.get('screen').height,
};

export const ScreenBkgCont = styled.View`
  background-color: ${theme.screenBkgColor};
  padding: 80px 0 0;
`;
export const HeaderCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0 0;
`;
export const NoFlexHeaderCont = styled.View`
  margin: 40px 0 0;
`;
export const Heading = styled.Text`
  font-family: ${theme.headlineFont};
  font-size: ${theme.h1FontSize};
  color: ${theme.accentColor};
  text-align: center;
  margin: 40px 0 20px 0;
`;
export const SubHeading = styled.Text`
  font-family: ${theme.bodyFont};
  font-size: ${theme.bodyFontSize};
  color: ${theme.bodyTextColor};
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;
export const PrimaryBtn = styled.Text`
  font-family: ${theme.headlineFont};
  font-size: ${theme.h2FontSize};
  background-color: ${({isStop}) =>
    isStop ? theme.accentColor : theme.primaryColor};
  color: ${theme.invertTextColor};
  text-align: center;
  text-transform: capitalize;
  padding: 10px 80px;
  border-radius: 23px;
  overflow: hidden;
`;

export const IconButton = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  top: 50px;
  z-index: 100;
  padding: 15px;
`;
