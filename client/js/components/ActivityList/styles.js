import { theme } from '../../globalStyles';
import styled from 'styled-components';
import { StyleSheet } from 'react-native';


export const FlatListContainer = styled.FlatList`
    background-color: #8cbe82;
    height: 50%;
`
export const ListContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid white;
    border-radius: 10px;
    background-color: #fff;
    width: 90%;
    height: 100px;
    margin: 5px auto;
`

export const ActivityDetails = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 55%;
    
`

export const ListItem = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: 15px; 
    color: ${theme.greyColor};
`

export const styles = StyleSheet.create({
    image: {
        marginHorizontal: 45,
        marginVertical: 75
    },
});
