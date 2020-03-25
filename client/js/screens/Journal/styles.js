import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const HeadContainer = styled.FlatList`
    height: 100%;
    background-color: #8cbe82;
`
export const Day = styled.Text`
    margin-top: 40px;
    text-align: center;
    color: #cc6c4e;
    font-family: ${theme.headlineFont};
    font-size: 24px;
    font-weight: 600;
`
export const JournalBox = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 20px;
    border-radius: 5px;
    background-color: #ffffff;
    text-align: center;
`
export const TimesContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 20px;
`
export const DurationText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: 20px;
    color: #303030;
    padding-left: 25px;
`
export const TimeText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: 12px;
    color: #464646;
`
export const LocationText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: 16px;
    color: #303030;
    font-weight: 300;
    padding-left: 5px;
`
export const JournalText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: 14px;
    color: #323232;
    padding-left: 5px;
`
export const LogContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 20px;
`
export const IconDurationRow = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;   
`
export const IconLocationRow = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
`
