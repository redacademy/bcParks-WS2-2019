import { theme } from '../../globalStyles';
import styled from 'styled-components';

export const DisplayContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`
export const SubDisplayContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
`
export const MoodDisplayContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
`
export const DisplayTitle = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: 16px; 
    font-weight: 300;
    color: #303030; 
`
export const DisplayContent = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: 16px; 
    color: #303030; 
    margin-left: 5px;
`
export const DisplayRow = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
