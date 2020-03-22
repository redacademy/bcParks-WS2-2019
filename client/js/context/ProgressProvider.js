import React, { useState, useEffect } from 'react';
import ProgressContext from './ProgressContext';
import AsyncStorage from '@react-native-community/async-storage';
import fetchData from '../config/fetchData';
import moment from 'moment-timezone';
import helper from './helperFunction'

const QUERY_SESSIONS = `
    query {
        sessions{
            timeStart
            timeEnd
            date
        }
    }
`

const ProgressProvider = ({children}) => {
    const [sample, setSample] = useState([])

    const update = async () => {
        const items = await getItem();
        setSample(items);
    }
    const getItem = async () => {
        const item = await AsyncStorage.getItem('grouped');
        const parsedItem = JSON.parse(item)
        return parsedItem
    }

    const writeStore = async (grouped) => {
        await AsyncStorage.setItem(grouped)
    }

    useEffect(() => {
        fetchData(QUERY_SESSIONS).then(data => {
            let sessions = data.sessions;
            setSample(helper(sessions))
        })
    },[])

    return (
        <ProgressContext.Provider value={{sample, writeStore, getItem, update, setSample}}>
            {children}
        </ProgressContext.Provider>
    )
}

export default ProgressProvider;