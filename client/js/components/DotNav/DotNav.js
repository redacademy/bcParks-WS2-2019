import React from 'react';
import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const DotsCont = styled.View`
    display: flex;
    flex-direction: row;
`
export const Dot = styled.Text`
    background-color: ${props => props.isActive ? theme.accentColor : theme.invertTxtColor};
    text-align: center;
    padding: 10px;
    width: 100%;
    border-radius: 25px;
    overflow:hidden;
`

const DotNav = () => {
    return (
        <DotsCont>
            <Dot isActive> </Dot>
            <Dot> </Dot>
        </DotsCont>
    )
};

export default DotNav;