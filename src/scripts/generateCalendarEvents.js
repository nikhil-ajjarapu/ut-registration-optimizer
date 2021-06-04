import { addDays, getYear, getMonth, getDay, getHours, getMinutes, getSeconds, parse, format } from 'date-fns';

export const generateCalendarEvents = (possibleClasses, weekStart, weekEnd) => {
    let eventArr = [];
    for (var i = 0; i < possibleClasses.length; i++) {
        // step 1: get the days the class is on and what hours it is during
        let classEvent = possibleClasses[i];
        let days = classEvent.get("Days");
        let hour = classEvent.get("Hour");
        
        // format the hours
        let hour_split = hour.split("-")   
        let start_time_split = hour_split[0].replace(/[.]+/g, '').trim();
        let end_time_split = hour_split[1].replace(/[.]+/g, '').trim();
        
        // create the time vars
        let startTime_ = parse(start_time_split, "h:mm aa", new Date(0, 0, 0))
        let endTime_ = parse(end_time_split, "h:mm aa", new Date(0, 0, 0))
        let startTime = new Date(getYear(weekStart), getMonth(weekStart) + 1, getDay(weekStart) - 1, 
            getHours(startTime_), getMinutes(startTime_), getSeconds(startTime_))
        let endTime = new Date(getYear(weekStart), getMonth(weekStart) + 1, getDay(weekStart) - 1, 
            getHours(endTime_), getMinutes(endTime_), getSeconds(endTime_))

        // iterate through days and create events
        const days_const = ["M", "T", "W", "TH", "F"];
        for (var j = 0; j < days_const.length; j++) {
            if (days.includes(days_const[j])) {
                // edge case: make sure 'T' from 'TH' is not being read as just 'T'
                if ((j === 1 && days[days.indexOf('T') + 1] !== 'H') || j !== 1) {
                    let newEv = {
                        startDate: addDays(startTime, j+1),
                        endDate: addDays(endTime, j+1),
                        title: classEvent.get("Unique")
                    };
                    eventArr.push(newEv)
                }
            }


        }
            
    }
    return eventArr;
}