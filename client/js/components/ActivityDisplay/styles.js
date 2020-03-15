import { theme } from '../../globalStyles';
import styled from 'styled-components';
import { StyleSheet } from 'react-native';


export const DisplayContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 10%;
`

export const SubDisplayContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px;
`
export const DisplayTitle = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: 14px; 
    color: ${theme.greyColor}; 
`
export const DisplayContent = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: 16px; 
    color: #636363; 
    margin-left: 5px;
`
export const DisplayRow = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
