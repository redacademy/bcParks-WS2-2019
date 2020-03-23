import React from 'react';
import { DotsCont, Dot } from './styles';

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