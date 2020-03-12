import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const InputLabel = styled.Text`
    font-size:${theme.bodyFontSize};
    font-family: ${theme.headlineFont};
    color ${theme.bodyTextColor};
    line-height: 38px;
`
export const StyledInput = styled.TextInput`
    background-color: ${theme.txtInputBkg};
    opacity: 0.8;
    color: ${theme.bodyTextColor};
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    font-size: ${theme.bodyFontSize};
`
export const TextLink = styled.Text`
    font-size:${theme.bodyFontSize};
    font-family: ${theme.bodyFont};
    color ${theme.bodyTextColor};
    text-align: center;
    margin: 0 0 20px;
`
export const BtnCont = styled.View`
    margin: 40px auto 0;
`
export const SubmitBtnCont = styled.View`
    margin: 0 auto;
`
export const FormCont = styled.View`
    margin: 50px;
`
export const InputCont = styled.View`
    margin: 20px 0;
`
export const Flex = styled.View`
    display: flex;
    flex-direction: row;
`
export const LinkCont = styled.View`
    margin: 50px 0;
`