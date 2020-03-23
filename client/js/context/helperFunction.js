import moment from 'moment-timezone';

export default helper = (sessions) => {
    let arr = []
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
    console.log('grouped', grouped)
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

    return arr;
}