import axios from 'axios'
import { variables } from './../utils/variables';
const BASE_URL = variables.baseURL as string
const DETA_API_KEY = variables.apiKey as string

export async function createBirthdayRecord(
    name: string,
    month: number,
    day: number): Promise<any> {

    return await axios.post(
        `${BASE_URL}/newbday`,
        { name, month, day },
        { headers: { 'X-API-Key': DETA_API_KEY } }
    )
}

export async function getsomething(): Promise<string> {
    return await axios.get(
        `${BASE_URL}/test`,
        { headers: { "X-API-Key": DETA_API_KEY } }
    )
}
