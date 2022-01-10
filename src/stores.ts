/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { browser } from "$app/env";
import { writable } from 'svelte/store';
import { type BirthdayBook, CalendarByDays, CalendarByMonth } from './models/calendar';


const calByMonth = new CalendarByMonth();
export const calendarByMonth = writable(calByMonth);

const calByDay = new CalendarByDays()
export const calendarByDay = writable(calByDay)

const emailStorage = browser ? localStorage.getItem("userEmail") : ''
export const emailStore = writable(emailStorage)
if (browser) {
    emailStore.subscribe((newValue) =>
        localStorage.setItem("userEmail", newValue))
}

const nameStorage = browser ? localStorage.getItem("userName") : ''
export const nameStore = writable(nameStorage)
if (browser) {
    nameStore.subscribe((newValue) =>
        localStorage.setItem("userName", newValue))
}
// so now anytime I update local storage,
// it changes emailInStore, which is a subscribed var
// or... if I change emailInStore, it sets a new local storage

const calendarStorage = browser ? localStorage.getItem("calendar") : ''
export const calendarStore = writable(calendarStorage)
if (browser) {
    calendarStore.subscribe((newValue) =>
        localStorage.setItem("calendar", newValue))
}

const birthdayBookModel: BirthdayBook = {
    key: emailStorage,
    userName: nameStorage,
    calendar: calendarStorage ? JSON.parse(calendarStorage) : {}
}

emailStore.subscribe(newValue => birthdayBookModel.key = newValue)
nameStore.subscribe(newValue => birthdayBookModel.userName = newValue)
calendarStore.subscribe(newValue => birthdayBookModel.calendar = newValue ? JSON.parse(newValue) : {})

export const birthdayBookStore = writable(birthdayBookModel)
if (browser) {
    birthdayBookStore.subscribe((updatedBook) =>
        localStorage.setItem("bb", JSON.stringify(updatedBook)))
}

