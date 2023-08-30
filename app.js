let num = 42 // number
let firstName = "Mikhail" // string
const isProgrammer = true // boolean

// firstName = 'Kolya'
// isProgrammer = false  // error because of const

/* Can do 
// let $ = 'test'
// let $num = 42 
// let num$ = 42 
// let _ = 49 
// let _num = 12 
// let num_ = 12 
// let first_name = 'Elena' // bad
// let myNum = 34 // good
// let num42 = 10
*/

/* Restricted 
// let 42num = '11'
// let my-num = 1 
// let const = 'opa'
*/

// alert(firstName)
// console.log('test:' , number ,  firstName)

// console.log(num * 11)
// console.log(num / 11)
// console.log(num - 11)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// console.log(num, num2)

// let num3 = (num + 15) * 2 / 3 - 1
// console.log(num3)

// const fullName = firstName + "Kruk"
// const fullName = firstName + ' ' + "Kruk"
// console.log(fullName)

// console.log(resultElement)
// console.log(resultElement.textContent)
// resultElement.textContent = (42 - 2) / num

const resultElement = document.getElementById("result") // название констант выбираю сам (надо чтобы подходило по смыслу)
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")

const sum = Number(input1.value) + Number(input2.value)
resultElement.textContent = sum
const submitBtn = document.getElementById("submit")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const multiplyBtn = document.getElementById("multiply")
const shareBtn = document.getElementById("share")

let action = "+"

// console.log(typeof sum) // typeof проверка типа данных

plusBtn.onclick = function () {
  action = "+"
}

multiplyBtn.onclick = function () {
  action = "*"
}

shareBtn.onclick = function () {
  action = "/"
}

minusBtn.onclick = function () {
  action = "-"
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.backgroundColor = "red"
  } else {
    resultElement.style.backgroundColor = "green"
  }
  resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value)
  const num2 = Number(inp2.value)
  if (actionSymbol == "+") {
    return num1 + num2
  } else if (actionSymbol == "-") {
    return num1 - num2
  } else if (actionSymbol == "*") {
    return num1 * num2
  } else if (actionSymbol == "/") {
    return num1 / num2
  }
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action)
  printResult(result)

  //   if (action == "+") {
  //     const sum = Number(input1.value) + Number(input2.value)
  //     printResult(sum)
  //   } else if (action == "-") {
  //     const sum = Number(input1.value) - Number(input2.value)
  //     printResult(sum)
  //   }
}
