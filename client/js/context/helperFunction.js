import { useContext } from 'react';
import moment from 'moment-timezone';
import AuthContext from './AuthContext';

export default helper = (sessions, user) => {

    let arr = []
    let userData = []
    sessions.forEach(session => {
        if (user.email === session.user.email) {
            userData.push(session)
        }
    })
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
    let grouped = group(userData, 'timeStart');
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
    })
    return arr;
}