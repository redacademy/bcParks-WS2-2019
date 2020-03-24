import styled from 'styled-components';
import { theme } from '../../globalStyles';
import { StyleSheet } from 'react-native';

export const Background = styled.View`
    background-color: ${theme.screenBkgColor};
    height: 100%;
`
export const Flex = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const StartBtnCont = styled.View`
    margin: 40px auto 100px;
`
export const BtnText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: ${props => props.isSkip ? 300 : 600};
    color: ${theme.bodyTextColor};
    text-transform: capitalize;
    margin: 60px 20px 60px;
`
export const BottomCont = styled.View`
    margin: 40px auto;
`

export const styles = StyleSheet.create({
    image: {
        marginHorizontal: 45,
        marginVertical: 100
    },
    imageActivity: {
        marginHorizontal: 45,
        marginVertical: 120
    },
    backIcon: {
        marginLeft: 10,
        marginRight: 40,
        marginVertical: 40
    },
    longTxtBackIcon: {
        marginLeft: 10,
        marginRight: 15,
        marginVertical: 40
    },
    shortTxtBackIcon: {
        marginLeft: 10,
        marginRight: 50,
        marginVertical: 40
    }
});