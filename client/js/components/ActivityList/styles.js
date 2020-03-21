import { theme } from '../../globalStyles';
import styled from 'styled-components';
import { StyleSheet } from 'react-native';


export const FlatListContainer = styled.FlatList`
    background-color: #8cbe82;
    height: 45%;
`
export const ListContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid white;
    border-radius: 10px;
    background-color: #fff;
    width: 90%;
    margin: 5px auto;
`

export const ActivityDetails = styled.View`
    display: flex;
    flex-direction: column;
    width: 60%;
    
`
export const DetailRow = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 4px;
`

export const ListItem = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: 15px; 
    color: ${theme.grayColor};
`

export const NotebookIcon = styled.View`
    padding-right: 15px;
`
