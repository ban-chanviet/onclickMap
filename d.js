const arr = [
    [106.61468185923613, 10.8187647597479],
    [106.6119900034816, 10.817169083380394],
    [106.61127055271675, 10.81618076179947],
    [106.61102150433554, 10.81598532395615]
]
const reversedArray = arr.reverse()
const result = []

reversedArray.forEach(element => {
    result.push(`[${element.toString()}]`)
})

const finalResult = `[${result}]`
console.log(finalResult)