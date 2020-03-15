import styled from 'styled-components';


export const theme = {
    primaryColor: "#49773A",
    accentColor: "#DA6645",
    greyColor: "#767676",
    screenBkgColor: "#A3CB9B",
    bodyTextColor: "#000",
    invertTextColor: "#fff",
    disabledColor: "#9d9d9d",
    dayBtnColor: "#9B9A30",
    headlineFont: "Comfortaa-Regular",
    bodyFont: "OpenSans-Regular",
    h1FontSize: "34px",
    h2FontSize: "24px",
    bodyFontSize: "18px",
    // #8cbe82

}

export const ScreenBkgCont = styled.View`
    background-color: ${theme.screenBkgColor};
`

export const Heading = styled.Text`
    font-family: ${theme.headlineFont};
    font-size: ${theme.h1FontSize};
    color: ${theme.accentColor};
    text-align: center;
    margin: 40px 0 20px 0;
`

export const NextBtnCont = styled.View`
    margin: 50px auto;
`

export const PrimaryBtn = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    background-color: ${theme.primaryColor};
    color: ${theme.invertTextColor};
    text-align: center;
    text-transform: capitalize;
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
    text-transform: capitalize;
    margin: 0 0 80px;
`