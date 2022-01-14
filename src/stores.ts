/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { browser } from "$app/env";
import { writable } from 'svelte/store';
import { type BirthdayBook, CalendarByDays, CalendarByMonth } from './models/calendar';
import { Months } from "./models/months";

const calByDay = new CalendarByDays()
export const calendarByDay = writable(calByDay)

const calByMonth = new CalendarByMonth();
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
        Object.values(updatedBook.calendar).forEach(bdayObj => 
            calByMonth[Months[bdayObj.month]][bdayObj.day].push(bdayObj.name))
        if (updatedBook.key == ''){
            localStorage.removeItem("bdayBook")
        }
        else {
            localStorage.setItem("bdayBook", JSON.stringify(updatedBook))
        }
    })
}
