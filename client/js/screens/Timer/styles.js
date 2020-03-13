import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const NextBtnCont = styled.View`
    margin: 50px auto;
`
export const InputSkipText = styled.Text`
    font-family: ${theme.headlineFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.invertTextColor};
    text-align: center;
    text-transform: capitalize;
    margin: 0 0 80px;
`