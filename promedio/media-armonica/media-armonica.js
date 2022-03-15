const calcularMediaArmonica = document.querySelector("#CalcularMediaArmonica")
const distanceTraveled = document.querySelector("#DistanceTraveled")
const distanceTraveledStop = document.querySelector("#DistanceTraveledStop")


let clickValue = 0
let listaSpeed = []
function createInput() {
  clickValue += 1 
  console.log(clickValue)
  const inputCreated = document.createElement(`input`)
  inputCreated.setAttribute("type","number")
  inputCreated.classList.add(`Input${clickValue}Speed`)

  calcularMediaArmonica.appendChild(inputCreated)
}

function resultadoInput() {
  const distanceTraveleDefinida = Number(distanceTraveled.value) / Number(distanceTraveledStop.value)
  let sumaValuesSpeed = 0
  for( let i = 1 ; i < clickValue+1 ; i++) {
    let InputSpeedValue 
    InputSpeedValue = document.querySelector(`.Input${i}Speed`)
    listaSpeed.push(1/InputSpeedValue.value)
    sumaValuesSpeed += listaSpeed[i-1]
  }
  const resultado =  distanceTraveleDefinida / sumaValuesSpeed

  const parrafoResultado = document.createElement("p")
  calcularMediaArmonica.appendChild(parrafoResultado)
  parrafoResultado.innerHTML = `El resultado es: ${resultado}km/h`
}