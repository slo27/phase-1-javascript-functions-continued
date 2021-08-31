// Your code here
let saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = (flair = "*") => {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}