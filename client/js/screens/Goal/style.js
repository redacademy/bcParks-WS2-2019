import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const LinesContainer = styled.View`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
export const LineText = styled.Text`
    font-size: 12px;
    font-family: ${theme.bodyFont};
    color: rgba(70, 70, 70, 0.95);
`
export const DayButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const DayButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px
    background-color: ${props => props.toggle ? '#cc6c4e' : theme.invertTextColor};
    margin: 20px 10px;
    border-radius: 10px;
`
export const DayTextBtn = styled.Text`
    color: ${props => props.toggle ? theme.invertTextColor : '#323232'};
    text-align: center;
    margin: auto 0;
`
export const ToggleMenu = styled.View`
    margin: 20px 70px 40px 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
export const TimeButtons = styled.TouchableOpacity`
    width: 100px;
    height: 32px;
    border-radius: 10px;
    background-color:  #fff;
    color: #303030;
`
export const ButtonText = styled.Text`
    color: #303030;
    text-align: center;
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    padding: 3px;
`
export const EverydayButton = styled.TouchableOpacity`
    width: 345px;
    height: 32px;
    border-radius: 10px;
    background-color: ${props => props.toggle ? '#5a8a4d' : theme.invertTextColor};
    margin: 0 auto;
`
export const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 40px auto;
`
export const TextHours = styled.Text`
    color: #303030;
    font-family: ${theme.bodyFont};
    font-size: 16px;
    font-weight: 300;
    padding: 8px;
`
export const Flex = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 500px;
    width: 100%;
`
export const BtnText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: ${props => props.isSkip ? 300 : 600};
    color: ${theme.bodyTextColor};
    text-transform: capitalize;
    margin: 60px 20px 60px;
`
export const Background = styled.View`
    position: relative;
    background-color: ${theme.screenBkgColor};
    height: 100%;
`
export const SaveButton = styled.TouchableOpacity`
    width: 200px;
    height: 48px;
    border-radius: 20px;
    background-color: #5a8a4d;
    color: #fff;
    margin: 0 auto;
`
export const SaveText = styled.Text`
    color: #fff;
    text-align: center;
    font-family: ${theme.headlineFont};
    font-size: ${theme.h2FontSize};
    padding-top: 10px; 
`
export const LogOutButton = styled.TouchableOpacity`
    color: #303030;;
    text-align: center;
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    margin-top: 60px;
`
export const LogOutText = styled.Text`
    color: #303030;;
    text-align: center;
    font-family: ${theme.bodyFont};
    font-size: 16px;
    font-weight: 300;
    text-decoration: underline;
    
`
export const SaveContainer = styled.View`
    position: absolute;
    top: 700px;
    left: 100px;
`

