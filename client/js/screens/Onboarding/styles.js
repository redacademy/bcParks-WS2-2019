import styled from 'styled-components';
import { theme } from '../../globalStyles';
import { StyleSheet } from 'react-native';

export const Background = styled.View`
    background-color: ${theme.screenBkgColor};
`
export const Subheading = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyTextColor};
    text-align: center;
    width: 80%;
    margin: 0 auto;
`
export const Flex = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const BtnText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: ${props => props.isSkip ? 300 : 600};
    color: ${theme.bodyTextColor};
    text-transform: capitalize;
    margin: 60px 20px 60px;
`

export const styles = StyleSheet.create({
    image: {
        marginHorizontal: 45,
        marginVertical: 75
    },
    imageLanding: {
        marginHorizontal: 45,
        marginVertical: 60
    }
});