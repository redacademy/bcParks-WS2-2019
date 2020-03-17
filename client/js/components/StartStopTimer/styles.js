import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const StartStopCont = styled.View`
    background-color: ${theme.screenBkgColor};
`
export const TimerDisplay = styled.Text`
    font-family: ${theme.headlineFont};
    font-weight: 600;
    font-size: 50px;
    color: ${theme.grayColor};
    
`
export const TimerContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center
`
export const InfoTextCont = styled.View`
    background-color: #fff;
    opacity: 0.4;
`
export const InfoText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyTextColor};
    text-align: center;
    width:80%;
    margin: 30px auto;
`
export const BtnCont = styled.View`
    margin: 50px auto 30px;
`