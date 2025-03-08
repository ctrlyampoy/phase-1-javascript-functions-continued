// code your solution here
// saturdayFun function declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// mondayWork function expression
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

// wrapAdjective function
function wrapAdjective(wrapper = '*') {
    return function(adjective = 'special') {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    }
}
