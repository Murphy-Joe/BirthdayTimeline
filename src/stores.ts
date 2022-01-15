/* eslint-disable no-self-assign */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { browser } from "$app/env";
import { writable } from 'svelte/store';
import { type BirthdayBook, CalendarByDays } from './models/calendar';
import { DateConverter } from "./utils/dateConverter";

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
