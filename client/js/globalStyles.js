import styled from 'styled-components';
import {StyleSheet} from 'react-native';

export const theme = {
  primaryColor: '#49773A',
  accentColor: '#DA6645',
  grayColor: '#767676',
  screenBkgColor: '#A3CB9B',
  txtInputBkg: '#fff',
  bodyTextColor: '#000',
  invertTextColor: '#fff',
  disabledColor: '#9d9d9d',
  dayBtnColor: '#9B9A30',
  headlineFont: 'Comfortaa-Regular',
  bodyFont: 'OpenSans-Regular',
  h1FontColor: '#cc6c4e',
  h1FontSize: '30px',
  h2FontSize: '24px',
  bodyFontSize: '18px',
  // #8cbe82
};

export const ScreenBkgCont = styled.View`
  background-color: ${theme.screenBkgColor};
  padding: 80px 0 0;
`;
export const HeaderCont = styled.View`
  display: flex;
  flex-direction: row;
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
  font-family: ${theme.bodyFont};
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
export const styles = StyleSheet.create({
  backIcon: {
    marginLeft: 10,
    marginRight: 110,
    marginTop: 40,
    marginBottom: 20,
  },
});
