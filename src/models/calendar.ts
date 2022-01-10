
export class CalendarByMonth {
    constructor() {
        Object.keys(this).forEach((month) => {
            const numDays = this[month].days
            for (let i = 0; i < numDays; i++) {
                this[month][i + 1] = ['yo']
            }
        })
    }
    January = { days: 31 }
    February = { days: 28 }
    March = { days: 31 }
    April = { days: 30 }
    May = { days: 31 }
    June = { days: 30 }
    July = { days: 31 }
    August = { days: 31 }
    September = { days: 30 }
    October = { days: 31 }
    November = { days: 30 }
    December = { days: 31 }
}

export class CalendarByDays {
    constructor() {
        for (let i = 1; i < 366; i++) {
            this[i] = []
        }
    }
}

export interface Calendar {
    [id: string]: {
        name: string
        month: number
        day: number
    }

}
export interface BirthdayBook {
    key: string
    userName: string
    calendar?: Calendar
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






