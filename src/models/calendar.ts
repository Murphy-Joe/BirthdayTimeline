
export const DaysPerMonth = {
    january: { days: 31 },
    february: { days: 29 },
    march: { days: 31 },
    april: { days: 30 },
    may: { days: 31 },
    june: { days: 30 },
    july: { days: 31 },
    august: { days: 31 },
    september: { days: 30 },
    october: { days: 31 },
    november: { days: 30 },
    december: { days: 31 }
}
export class CalendarByMonth {
    constructor() {
        // initialize this from CalendarByDays and get rid of days key
        // that way it can be directly reactive, maybe
        Object.keys(DaysPerMonth).forEach((month) => {
            this[month] = {}
            const numDays = DaysPerMonth[month].days
            for (let i = 0; i < numDays; i++) {
                this[month][i + 1] = []
            }
        })
    }

}

export class CalendarByDays {
    constructor() {
        for (let i = 1; i < 366; i++) {
            this[i] = []
        }
    }
}
export interface CalendarItem {
    name: string
    month: number
    day: number
}

export interface Calendar {
    [id: string]: CalendarItem
}
export interface BirthdayBook {
    key: string
    userName: string
    calendar: Calendar
}


// export interface IMonthObject {
//     days: number
// }

// export interface ICalendar {
//     January: IMonthObject,
//     February: IMonthObject,
//     March: IMonthObject,
//     April: IMonthObject,
//     May: IMonthObject,
//     June: IMonthObject,
//     July: IMonthObject,
//     August: IMonthObject,
//     September: IMonthObject,
//     October: IMonthObject,
//     November: IMonthObject,
//     December: IMonthObject
// }






