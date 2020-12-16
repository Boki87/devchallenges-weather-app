
export const formatDate = (dateVal) => {
    var date = new Date(dateVal)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];    

    let d = days[date.getDay()] + ' ' + date.getDate() + ' ' + monthNames[date.getMonth()]

    return d
}