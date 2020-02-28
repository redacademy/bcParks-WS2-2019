import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const StartStopCont = styled.View`
    background-color: ${theme.screenBkgColor};
`
export const TimerDisplay = styled.Text`
    color: ${theme.grayColor};
    font-family: ${theme.boldHeadlineFont};
    font-size: 50px;
    margin: 20px auto;
`
export const InfoTextCont = styled.View`
    background-color: #fff;
    opacity: 0.4;
`
export const InfoText = styled.Text`
    color: ${theme.bodyTextColor};
    font-family: ${theme.headlineFont};
    font-size: ${theme.bodyFontSize};
    margin: 30px auto;
    width:80%;
`
export const Btn = styled.Text`
    background-color: ${props => props.isStart ? theme.primaryColor : theme.accentColor};
    font-size: ${theme.h2FontSize};
    text-align: center;
    padding: 10px 15px;
    margin: 20px auto 50px;
    width: 70%;
`