import axios from 'axios'
import { variables } from './../utils/variables';
const BASE_URL = variables.baseURL as string
const DETA_API_KEY = variables.apiKey as string

// async function createBirthdayRecord(name: string, month: number, day: number) {

//     const resp = await axios.put(BASE_URL, { name, month, day }, { headers: { 'X-API-Key': DETA_API_KEY } })
//     const respData = await resp.data
//     console.log(respData)
//     const respJson = respData.json()
//     console.log(respJson)
//     const result = JSON.stringify(respJson)
//     console.log(result)
// }

export async function getsomething() {
    const resp = await axios.get(`${BASE_URL}/test`, { headers: { "X-API-Key": DETA_API_KEY } })
    const respData = await resp.data // is the json object
    return respData
}
