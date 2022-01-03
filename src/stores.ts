import { writable } from 'svelte/store';
import { CalendarByDays, CalendarByMonth } from './models/calendar';

const calByMonth = new CalendarByMonth();
export const calendarByMonth = writable(calByMonth);

const calByDay = new CalendarByDays()
export const calendarByDay = writable(calByDay)