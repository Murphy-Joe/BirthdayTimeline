/* eslint-disable no-self-assign */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { browser } from "$app/env";
import { readable, writable } from 'svelte/store';
import { type BirthdayBook, CalendarByDays, CalendarByMonth } from './models/calendar';
import { Months } from "./models/months";
import { DateConverter } from "./utils/dateConverter";

let calByMonth = new CalendarByMonth()
export let calByMonthStore = writable(calByMonth)

export let calByDay = new CalendarByDays()
export const calendarByDay = writable(calByDay)

const bdayBookDefault: BirthdayBook = {
    key: '',
    userName: '',
    calendar: {}
}
const bdayBookFromStorage: BirthdayBook =
    browser ?
        JSON.parse(localStorage.getItem("bdayBook")) ?? bdayBookDefault :
        bdayBookDefault

export const bdayBookStore = writable<BirthdayBook>(bdayBookFromStorage)

bdayBookStore.subscribe((updatedBook) => {
    console.log(`hey we updated the bdayBookStore!`)

    // Translate bdayBook calendar (by ID) to calByDay (day date)
    // obj is {day:bdayObj} by day of year, values is list[bdayObj] 
    calByMonth = new CalendarByMonth()
    console.log(`in bbook update - calbymonth before: ${JSON.stringify(calByMonth)}`)
    Object.values(updatedBook.calendar).forEach(bdayObj => {
        console.log('in store updating calByMonth after bdayBook action')
        calByMonth[Months[bdayObj.month]][bdayObj.day].push(bdayObj)
    })
    console.log(`in bbook update - calbymonth after: ${JSON.stringify(calByMonth)}`)
    calByMonthStore.set(calByMonth)

    if (browser) {
        // set local storage
        if (updatedBook.key == '') {
            localStorage.removeItem("bdayBook")
        }
        else {
            localStorage.setItem("bdayBook", JSON.stringify(updatedBook))
        }
    }
    else {
        // Translate bdayBook calendar (by ID) to calByMonth (day date)
        Object.values(updatedBook.calendar).forEach(bdayObj => {
            // calByMonth[Months[bdayObj.month]][bdayObj.day].push(bdayObj)
            // console.log(`store calByMonth server: ${JSON.stringify(calByMonth)}`)

            // tostring() hack to account for numbers not being passed as numbers
            const dayOfYear = DateConverter.DayOfYear(bdayObj.month.toString(), bdayObj.day.toString())
            // calByDay[dayOfYear] = [...calByDay[dayOfYear], bdayObj]
            calendarByDay.update((cbd) => {
                console.log(`deep in the bookstore subscription, updating cbd`)
                cbd[dayOfYear] = [...cbd[dayOfYear], bdayObj]
                return cbd
            })
        })
    }
})
