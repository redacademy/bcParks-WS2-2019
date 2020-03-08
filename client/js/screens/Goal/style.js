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