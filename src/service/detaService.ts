import axios from 'axios'
import { variables } from './../utils/variables';
import type { BirthdayBook } from './../models/calendar'
import { get } from 'svelte/store';
import { bdayBookStore } from './../stores';

const BASE_URL = variables.baseURL as string
const LOCAL_URL = variables.localUrl as string
const DETA_API_KEY = variables.apiKey as string



export async function loadCalendar(customfetch): Promise<any> {
    return await customfetch(`${BASE_URL}/calendar/${get(bdayBookStore).key}`, {
        headers: { 'X-API-Key': DETA_API_KEY }
    });
}

// use get calendar after Update, 
// or maybe just throw update inside getCalendar 
// as they should pretty much always be a combo
// or even on the backend if that saves an http call

// inside getCalendar, update the store
export async function getCalendar(): Promise<any> {
    const resp = await axios.get(
        `${BASE_URL}/calendar/${get(bdayBookStore).key}`,
        { headers: { 'X-API-Key': DETA_API_KEY } }
    )
    // calendarStore.set(resp.data?.calendar)
    // console.log(`cal from inside getCalendar: ${resp.data?.calendar}`)
    return resp
}

export async function UpdateCalendar(): Promise<any> {
    return await axios.patch(
        `${BASE_URL}/updateCal`,
        get(bdayBookStore),
        { headers: { 'X-API-Key': DETA_API_KEY } }
    )
}

export async function createBase(): Promise<any> {
    return await axios.post(
        `${BASE_URL}/createBase`,
        get(bdayBookStore),
        { headers: { "X-API-Key": DETA_API_KEY } }
    )

}

export async function getsomething(): Promise<any> {
    return await axios.get(
        `${BASE_URL}/test`,
        { headers: { "X-API-Key": DETA_API_KEY } }
    )
}