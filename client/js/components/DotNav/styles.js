import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const DotsCont = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Dot = styled.Text`
    background-color: ${props => props.isActive ? theme.accentColor : theme.invertTextColor};
    text-align: center;
    height: 9px;
    width: 9px;
    padding: 5px;
    border-radius: 5px;
    overflow:hidden;
    margin: 0 5px;
`