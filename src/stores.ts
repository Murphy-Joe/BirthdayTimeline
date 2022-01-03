import { writable } from 'svelte/store';
import { CalendarByMonth } from './models/calendar';

const calByMonth = new CalendarByMonth();
export const calendar = writable(calByMonth);