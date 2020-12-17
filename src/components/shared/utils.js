
export const formatDate = (dateVal) => {
    var date = new Date(dateVal)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];    

    let d = days[date.getDay()] + ' ' + date.getDate() + ' ' + monthNames[date.getMonth()]

    return d
}


export const convertUnit = (val, type = 'C') => {
    let newVal
    if(type == 'C') { //convert fahrenheit to celsius 
        newVal = Math.round((val - 32) * (5/9))
    }else if(type == 'F') { //convert celsius to fahrenheit
        newVal = Math.round(val * (9/5) + 32)
    }

    return newVal
}