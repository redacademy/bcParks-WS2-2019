import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const DetailedProgressContainer = styled.View`
    display: flex;
    align-items: center;
    margin: 0 auto 160px;
    
`
export const HomeHeaderCont = styled.View`
    margin: 25px auto;
`
export const ProgressBarContainer = styled.View`
    display: flex;
    flex-direction: row;
`
export const Flex = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HomeText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyTextColor};
`

export const ProgressText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: ${props => props.isNumber ? `44px` : theme.bodyFontSize};
    color: ${theme.bodyTextColor};
`
export const Complete = styled.View`
    margin-right: 15px;
    width: 90px;
    height: 160px;
    align-items: center;
    justify-content: center;
`
export const Goal = styled.View`
    margin-left: 15px;
    width: 90px;
    height: 160px;
    align-items: center;
    justify-content: center
`