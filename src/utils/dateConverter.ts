import { calendarByMonth } from "./../stores"
import { CalendarByMonth } from "./../models/calendar"
import { Months } from "./../models/months"
import { get } from "svelte/store"

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

    static DayOfYear = (month: number, day: number): number => {
        let daysInMonthsBefore = 0
        for (let i = 1; i < month; i++) {
            const monthName = Months[i]
            daysInMonthsBefore += get(calendarByMonth)[monthName]['days']
        }
        const dayOfYear = daysInMonthsBefore + day
        return dayOfYear > 59 ? dayOfYear - 1 : dayOfYear
    }
}