import { CalendarByMonth } from "src/models/calendar"
import { Months } from "src/models/months"

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
}