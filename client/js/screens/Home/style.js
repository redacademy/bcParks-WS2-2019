import styled from 'styled-components';
import { theme } from '../../globalStyles';


export const DetailedProgressContainer = styled.View`
    display: flex;
    align-items: center;
    
`
export const TextTitle = styled.Text`
    margin: 50px auto;
    font-size: 24px;
    font-weight: normal;
    font-family: ${theme.headlineFont};
    color: ${theme.h1FontColor};

`
export const ProgressBarContainer = styled.View`
    display: flex;
    flex-direction: row;
`
export const Complete = styled.View`
    margin-right: 20px;
    width: 90px;
    height: 65px;
    align-items: center;
    justify-content: center;
`
export const Goal = styled.View`
    margin-left: 20px;
    width: 90px;
    height: 65px;
    align-items: center;
    justify-content: center
`