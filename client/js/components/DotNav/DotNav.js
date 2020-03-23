import React from 'react';
import styled from 'styled-components';
import { theme } from '../../globalStyles';

export const DotsCont = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Dot = styled.Text`
    background-color: ${props => props.isActive ? theme.accentColor : theme.invertTextColor};
    text-align: center;
    height: 9px;
    width: 9px;
    padding: 5px;
    border-radius: 5px;
    overflow:hidden;
    margin: 0 3px;
`

const DotNav = ({ activeIndex }) => {

    if (activeIndex === 0) {
        return (
            <DotsCont>
                <Dot isActive />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
            </DotsCont>
        );
    } else if (activeIndex === 1) {
        return (
            <DotsCont>
                <Dot />
                <Dot isActive />
                <Dot />
                <Dot />
                <Dot />
            </DotsCont>
        );
    } else if (activeIndex === 2) {
        return (
            <DotsCont>
                <Dot />
                <Dot />
                <Dot isActive />
                <Dot />
                <Dot />
            </DotsCont>
        );
    } else if (activeIndex === 3) {
        return (
            <DotsCont>
                <Dot />
                <Dot />
                <Dot />
                <Dot isActive />
                <Dot />
            </DotsCont>
        );
    } else if (activeIndex === 4) {
        return (
            <DotsCont>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot isActive />
            </DotsCont>
        );
    }
};

export default DotNav;