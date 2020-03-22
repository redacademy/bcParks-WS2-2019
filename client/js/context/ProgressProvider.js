import React, { useState, useEffect } from 'react';
import ProgressContext from './ProgressContext';
import AsyncStorage from '@react-native-community/async-storage';
import fetchData from '../config/fetchData';
import moment from 'moment-timezone';

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
    let arr = []

    const helper = (sessions) => {
        const group = (session, date) => {
            return session.reduce(function (acc, obj) {
                let key = moment(obj[date]).format('YYYY-MM-DD');
                if (!acc[key]) {
                    acc[key] = []
                }
                acc[key].push(obj)
                return acc
            }, {})
        }
        let grouped = group(sessions, 'timeStart');
        
        Object.keys(grouped).forEach((groupedDate) => {
            let diff = 0;
            let data = grouped[groupedDate];
            data.forEach((session) => {
                let newDiff = moment(session.timeEnd).diff(moment(session.timeStart));
                diff += newDiff
                return diff
            })
            arr.push({
                groupedDate,
                data,
                diff
            })
            // console.log('day of the week', moment(groupedDate).format('dddd'))
        })
    }

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
            helper(sessions)
            AsyncStorage.setItem('grouped', JSON.stringify(arr))
            console.log('contextData', arr)
        })
        update();
    },[])

    return (
        <ProgressContext.Provider value={{sample, writeStore, getItem, update, setSample}}>
            {children}
        </ProgressContext.Provider>
    )
}

export default ProgressProvider;