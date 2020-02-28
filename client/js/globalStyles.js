import styled from 'styled-components';


export const theme = {
    primaryColor: "#49773A",
    accentColor: "#DA6645",
    grayColor: "#767676",
    screenBkgColor: "#8CBE82",
    bodyTextColor: "#000",
    invertTextColor: "#fff",
    disabledColor: "#9d9d9d",
    headlineFont: "Comfortaa-Regular",
    bodyFont: "OpenSans-Regular",
    h1FontSize: "34px",
    h2FontSize: "24px",
    bodyFontSize: "18px"
}

export const ScreenBkgCont = styled.View`
    background-color: ${theme.screenBkgColor};
`

export const Heading = styled.Text`
    font-family: ${theme.headlineFont};
    font-size: ${theme.h1FontSize};
    color: ${theme.accentColor};
    text-align: center;
    margin: 50px 0;
`

export const PrimaryBtn = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    background-color: ${theme.primaryColor};
    color: ${theme.invertTextColor};
    text-align: center;
    padding: 10px 80px;
    width: 100%;
    border-radius: 25px;
    overflow:hidden;
`

export const InputSkipText = styled.Text`
    font-family: ${theme.headlineFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.invertTextColor};
    text-align: center;
    margin: 0 0 80px;
`