import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const DayButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const DayButton = styled.TouchableOpacity`
    background-color: ${props => props.toggle ? theme.dayBtnColor : theme.invertTextColor};
    padding: 10px;
    margin: 10px
`
export const ToggleMenu = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
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