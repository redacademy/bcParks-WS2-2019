import styled from 'styled-components';
import { theme } from '../../globalStyles';
import { StyleSheet } from 'react-native';

export const Background = styled.View`
    background-color: ${theme.screenBkgColor};
`
export const Flex = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const LandingFlex = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`
export const StartBtnCont = styled.View`
    margin: 5px 80px 100px;
`
export const BtnText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: ${props => props.isSkip ? 300 : 600};
    color: ${theme.bodyTextColor};
    text-transform: capitalize;
    margin: 80px 30px;
`
export const BottomCont = styled.View`
    margin: 40px auto;
`

export const styles = StyleSheet.create({
    image: {
        marginHorizontal: 45,
        marginVertical: 115
    },
    imageLanding: {
        marginHorizontal: 45,
        marginVertical: 90
    },
    imageTime: {
        marginHorizontal: 45,
        marginVertical: 105
    },
    backIcon: {
        marginLeft: 10,
        marginRight: 40,
        marginVertical: 40
    },
    backIconLongTxt: {
        marginHorizontal: 10,
        marginVertical: 40
    },
    backIconShortTxt: {
        marginLeft: 10,
        marginRight: 50,
        marginVertical: 40
    }
});