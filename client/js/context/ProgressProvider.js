import React, { useState, useEffect, useContext } from 'react';
import ProgressContext from './ProgressContext';
import AsyncStorage from '@react-native-community/async-storage';
import fetchData from '../config/fetchData';
import moment from 'moment-timezone';
import helper from './helperFunction'
import AuthContext from './AuthContext';

const QUERY_SESSIONS = `
    query {
        sessions{
            timeStart
            timeEnd
            mood
            journal
            locations{
                name
            }
            user{
                email
            }
        }
    }
`

const ProgressProvider = ({children}) => {
    const [sample, setSample] = useState([])
    const { user } = useContext(AuthContext);

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
            console.log('sessions', sessions)
            setSample(helper(sessions, user))
        })
    }, [user])

    return (
        <ProgressContext.Provider value={{sample, writeStore, getItem, update, setSample}}>
            {children}
        </ProgressContext.Provider>
    )
}

export default ProgressProvider;