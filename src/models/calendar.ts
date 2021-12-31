export interface IMonthObject {
    days: number
}
export interface ICalendar {
    January: IMonthObject,
    February: IMonthObject,
    March: IMonthObject,
    April: IMonthObject,
    May: IMonthObject,
    June: IMonthObject,
    July: IMonthObject,
    August: IMonthObject,
    September: IMonthObject,
    October: IMonthObject,
    November: IMonthObject,
    December: IMonthObject
}

export const cal: ICalendar = {
    January: { days: 31 },
    February: { days: 28 },
    March: { days: 30 },
    April: { days: 31 },
    May: { days: 30 },
    June: { days: 31 },
    July: { days: 30 },
    August: { days: 31 },
    September: { days: 30 },
    October: { days: 31 },
    November: { days: 30 },
    December: { days: 31 }
}

Object.keys(cal).forEach((month) => {
    const numDays = cal[month].days
    for (let i = 0; i < numDays; i++) {
        cal[month][i + 1] = ['yo']
    }
})



