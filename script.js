let number1, number2, action;
const rezult = document.querySelector("#result")
const numArr = document.querySelectorAll(".num")
const actionArr = document.querySelectorAll(".action")
const equal = document.querySelector("#equal")


numArr.forEach(itm => {
    itm.addEventListener("click", () =>{
        inpVal(itm.value)
   })
 })
actionArr.forEach(itm => {
  itm.addEventListener("click", () => {
    actionVal(itm.value)
  })
})

function inpVal  (itm) {
  let num  = itm
  let  current = rezult.value
  current += num
  if (current[0] == 0) {
   current= current.substring(1)
  }
  rezult.value = current
}

function actionVal(itm) {
  number1 = +(rezult.value)
  action=itm   
  rezult.value = ""
 
}

equal.addEventListener("click", function () {
  number2 = +(rezult.value)
  console.log(number1, number2, action);
  let res;
  switch (action) {
    case "+":
      res = number1 + number2
      break
    case "-":
      res = number1 - number2
      break
    case "*":
      res = number1 * number2
      break
    case "/":
      if ((number2 == 0) || (number2 == "")) {
        res = 'error'
      } else {
        res = number1 / number2
      }
      break
    default:
      res = "0"
  }
  console.log(res);
  rezult.value = res
})
document.querySelector(".clear").addEventListener("click", () => {
  rezult.value = ''
})
document.querySelector(".back").addEventListener("click", () => {

  let a = rezult.value.substring(0, rezult.value.length - 1)
  rezult.value=a
})
