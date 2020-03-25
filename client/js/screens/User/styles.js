import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const TopMarginCont = styled.View`
    marginTop: 50px;    
`
export const FormCont = styled.View`
    margin: 100px 50px;
`
export const InputCont = styled.View`
    margin: 20px 0;
`
export const InputLabel = styled.Text`
    font-family: ${theme.headlineFont};
    font-size:${theme.bodyFontSize};
    color ${theme.bodyTextColor};
    line-height: 38px;
`
export const StyledInput = styled.TextInput`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyTextColor};
    background-color: ${theme.txtInputBkg};
    opacity: 0.8;
    border: 2px solid ${theme.primaryColor};
    border-radius: 5px;
    padding: 10px;
`
export const Flex = styled.View`
    display: flex;
    flex-direction: row;
`
export const TextLink = styled.Text`
    font-family: ${theme.bodyFont};
    font-size:${theme.bodyFontSize};
    color ${theme.bodyTextColor};
    text-align: center;
    margin: 0 0 20px;
    text-decoration: underline;
`
export const LoginBtnCont = styled.View`
    margin: 40px auto 0;
`
export const SignBtnCont = styled.View`
    margin: 100px auto 100px;
`
export const PwBtnCont = styled.View`
    margin: 200px auto 0;
`
export const LinkCont = styled.View`
    margin: 50px 0;
`
export const PwLinkCont = styled.View`
    margin: 50px 0 100px;
`
export const styles = StyleSheet.create({
    backIconLogin: {
        marginLeft: 10,
        marginRight: 120,
        marginVertical: 40
    },
    backIconSignUp: {
        marginHorizontal: 10,
        marginVertical: 40
    },
});