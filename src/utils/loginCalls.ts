import { createBase, getCalendar, UpdateCalendar } from "./../service/detaService";
import { bdayBookStore } from "./../stores";
import { get } from "svelte/store";
import { browser } from "$app/env";


export async function LoginStoreAndDatabaseActions(name: string, email: string): Promise<void> {
    
		// console.log(`prior to log cal: ${JSON.stringify(get(bdayBookStore).calendar)}`)
		bdayBookStore.set({ key: email, userName: name, calendar: get(bdayBookStore).calendar });
		const calResp = await getCalendar();
		// console.log(`calResp data: ${JSON.stringify(calResp.data)}`)
		// console.log(`calResp status: ${calResp.statusText}`);
		// console.log(`calendar length: ${Object.keys(get(bdayBookStore).calendar).length}`);
		// console.log(`calendar populated: ${Object.keys(get(bdayBookStore).calendar).length != 0}`);	
		if (calResp.data) {
			const emptyCalendar = Object.keys(get(bdayBookStore).calendar).length == 0
			if (emptyCalendar){
				// console.log(`calResp data in status Ok block: ${JSON.stringify(calResp.data)}`)
				bdayBookStore.set({ key: email, userName: name, calendar: calResp.data.calendar })
			}
			else {
				UpdateCalendar();
				// console.log(`store cal ${JSON.stringify(get(bdayBookStore).calendar)}`)
				// console.log(`resp data cal ${JSON.stringify(calResp.data.calendar)}`)
				// console.log(`merged cal ${JSON.stringify(Object.assign(get(bdayBookStore).calendar, calResp.data.calendar))}`)
				const mergedCal = Object.assign(get(bdayBookStore).calendar, calResp.data.calendar)
				bdayBookStore.set({ key: email, userName: name, calendar: mergedCal })
			}
		}
		else {
			createBase();
		}
	
}

export function LoadUserFromLocalStorage() {
	//  <script context="module">
	// export async function load() {
	// 	return LoadUserFromLocalStorage()
	// }
	// </script>
		// if no bdayBook in Store, check local storage
		if (browser && get(bdayBookStore).userName == ""){
			
			// localStorage.setItem("bdayBook", JSON.stringify(obj))
			// console.log(localStorage.getItem("bdayBook"))
			// console.log(JSON.parse(localStorage.getItem("bdayBook")))
			if (localStorage.getItem("bdayBook")){
				const bb = JSON.parse(localStorage.getItem("bdayBook"))
				// console.log(JSON.stringify(bb))
				bdayBookStore.set(bb)
			}
		}
		return {}
	}
