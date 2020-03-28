
const outputCurrentDayTime = () =>{
    const date = new Date() ;
    const minute = date.getMinutes(); 
    const hour = date.getHours();
    const day = date.getDay() ;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'] ;
    const currentDay = daysOfWeek[day];

    let timeLabel= hour > 12 ? 'pm' : 'am'

    let result =` Today is ${currentDay} \n current time is ${hour}:${minute} ${timeLabel}`

    console.log(result)
}

outputCurrentDayTime()