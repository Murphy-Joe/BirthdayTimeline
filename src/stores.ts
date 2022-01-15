/* eslint-disable no-self-assign */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { browser } from "$app/env";
import { writable } from 'svelte/store';
import { type BirthdayBook, CalendarByDays, CalendarByMonth } from './models/calendar';
import { Months } from "./models/months";

const calByDay = new CalendarByDays()
export const calendarByDay = writable(calByDay)

export let calByMonth = new CalendarByMonth();
export const calendarByMonth = writable(calByMonth);

const bdayBookDefault: BirthdayBook = {
    key: '',
    userName: '',
    calendar: {}
}
const bdayBookFromStorage: BirthdayBook = 
    browser ? 
    JSON.parse(localStorage.getItem("bdayBook")) ?? bdayBookDefault: 
    bdayBookDefault

export const bdayBookStore = writable<BirthdayBook>(bdayBookFromStorage)
if (browser) {
    bdayBookStore.subscribe((updatedBook) =>
    {
        // Translate bdayBook calendar (by ID) to calByMonth (day date)
        Object.values(updatedBook.calendar).forEach(bdayObj => 
            {calByMonth[Months[bdayObj.month]][bdayObj.day].push(bdayObj.name)})

        // set local storage
        if (updatedBook.key == ''){
            localStorage.removeItem("bdayBook")
        }
        else {
            localStorage.setItem("bdayBook", JSON.stringify(updatedBook))
        }
    })
}
