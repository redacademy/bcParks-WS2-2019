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
    background-color: ${props => props.toggle || props.everyday==true ? '#cc6c4e' : theme.invertTextColor};
    margin: 20px 10px;
    border-radius: 10px;
`
export const DayTextBtn = styled.Text`
    color: ${props => props.toggle || props.everyday==true ? theme.invertTextColor : theme.bodyTextColor};
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
    background-color:  ${props => props.isDaily ? theme.primaryColor : "#fff"};
`
export const ButtonText = styled.Text`
    text-align: center;
    color: ${theme.bodyTextColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    padding: 3px;
`
export const EverydayButton = styled.TouchableOpacity`
    width: 345px;
    height: 32px;
    border-radius: 10px;
    background-color: ${props => props.toggle ? theme.accentColor : theme.invertTextColor};
    margin: 0 auto;
`
export const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 40px auto;
`
export const TextHours = styled.Text`
    color: ${theme.bodyTextColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
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
    background-color: ${props => props.theme != "onBoarding" ? theme.screenBkgColor : "transparent"};
    height: 100%;
`
export const BackgroundTransP = styled.View`
    position: relative;
    background-color: transparent;
    height: 100%;
`
export const LogOutButton = styled.TouchableOpacity`
    text-align: center;
    font-family: ${theme.bodyFont};
`
export const LogOutText = styled.Text`
    color: ${theme.bodyTextColor};
    text-align: center;
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    text-decoration: underline;
    margin: 30px auto;
    
`
export const SaveContainer = styled.View`
    position: absolute;
    top: 650px;
    left: 100px;
`
export const DotNavView = styled.View`
    justify-content: center
`
