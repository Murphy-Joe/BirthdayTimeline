import { CalendarByMonth, DaysPerMonth } from "./../models/calendar"
import { Months } from "./../models/months"
export class DateConverter {
    static daysBeforeMonthStarted = (dt: Date): number => {
        let daysBefore = 0
        for (let i = 1; i <= dt.getMonth(); i++) {
            const month = Months[i]
            console.log(month)
            daysBefore += CalendarByMonth[month]['days']
        }
        return daysBefore
    }

    static dayOfYear = (dt: Date): number =>
        this.daysBeforeMonthStarted(dt) + dt.getDate()

    static DayOfYear = (mo: string, d: string): number => {
        // the parseInt() hack is because mo and d were being passed in as strings 
        // even though they are typed as numbers everywhere
        const month = parseInt(mo)
        const day = parseInt(d)

        let daysInMonthsBefore = 0
        for (let i = 1; i < month; i++) {
            const monthName = Months[i]
            daysInMonthsBefore += DaysPerMonth[monthName]['days']
        }
        const dayOfYear = daysInMonthsBefore + day
        // return dayOfYear > 59 ? dayOfYear - 1 : dayOfYear
        return dayOfYear
    }

    static DaysInMonthFromDayOfYear = (dayOfYear: number): number => {
        let dayOfMonth = dayOfYear
        for (let i = 1; i <= 12; i++) {
            dayOfMonth -= DaysPerMonth[Months[i]]["days"]
            if (dayOfMonth < 1){
                return DaysPerMonth[Months[i]]["days"]
            }
        }
    }
}