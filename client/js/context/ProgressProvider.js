import React, { createContext, useState, useEffect } from 'react';
import ProgressContext from './ProgressContext';
// import AsyncStorage from '@react-native-community/async-storage';

const ProgressProvider = ({children}) => {
    const [sample, setSample] = useState(25)

    return (
        <ProgressContext.Provider vavlue={{sample, setSample}}>
            {children}
        </ProgressContext.Provider>
    )
}

export default ProgressProvider;