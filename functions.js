// saturday fun
function saturdayFun() {
    console.log('This Saturday,I want to go swimming')
}
saturdayFun()
// monday work
function mondayWork() {
    console.log('This monday i will go to school')
} mondayWork()

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}genius${flair}!`;
    }