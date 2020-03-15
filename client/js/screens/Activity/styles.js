import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const ButtonsContainer = styled.View`
    display: flex
    flex-direction: row
    justify-content: space-evenly
    margin-top: 10px;
`
export const PeriodButtons = styled.TouchableOpacity`
    width: 120px;
    height: 32px;
    border-radius: 16px;
    background-color: #5a8a4d; 
`
export const PeriodText = styled.Text`
    color: #fff;
    text-align: center;
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    padding: 3px;
`
export const ArrowText = styled.Text`
    font-weight: 700;
    font-size: 18px;
`
export const ArrowsContainer = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 20px;

`
export const GraphDate = styled.Text`
    text-align: center;
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
`