
import { theme } from '../../globalStyles';
import styled from 'styled-components';

export const InputText = styled.TextInput`
    background-color: ${theme.invertTextColor};
    font-size: ${theme.bodyFontSize};
    border-radius: 15px;
    padding: 20px;
    height: 400px;
    width: 85%;
    margin: 0 auto 60px;
`