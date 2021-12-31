import { writable } from 'svelte/store';
import { cal } from './models/calendar';

export const calendar = writable(cal);