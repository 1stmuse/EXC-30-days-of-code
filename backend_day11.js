
const daysToBirthday = (date) =>{
    let dateArray = date.split('-')
    const today = new Date()
    const birtday = new Date(dateArray[2], dateArray[1]-1, dateArray[0])

    const todayInMilliseconds = today.getTime()
    const birtdayInMilliseconds =birtday.setFullYear(today.getFullYear())
    const oneDayInMilliseconds = (1000 *  60 * 60 * 24)
    const daysToBirthday = Math.ceil((birtdayInMilliseconds - todayInMilliseconds)/oneDayInMilliseconds)
    let answer='';
    if(daysToBirthday < 0){
        answer = 'your birthday has passed'
    }else if(daysToBirthday ===0){
        answer = 'today is your birthday'
    }else{
        answer = `${daysToBirthday} day${daysToBirthday>1 ?'s' : ''} to your birtday`
    }
    
    return answer
}

console.log(daysToBirthday('6-4-1998'))