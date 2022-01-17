export const incrementHex = (hex: string, num: number): string => {
    let hxNum = parseInt(hex, 16)
    hxNum += num
    let newHexStr = hxNum.toString(16)
    while (newHexStr.length < 6) {
        newHexStr = `0${newHexStr}`
    }
    return newHexStr
}