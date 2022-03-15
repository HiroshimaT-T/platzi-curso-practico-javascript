// ------------------------Algoritmo-Estatico--------------------------------
// Código del cuadrado
// console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4 ; 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");

// console.groupEnd();

// Código del triángulo
// console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
  // "Los lados del triángulo miden: "
  // + ladoTriangulo1
  // + "cm, "
  // + ladoTriangulo2
  // + "cm, "
  // + baseTriangulo
  // + "cm" 
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo ;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// const semiPerimetroTriangulo = perimetroTriangulo / 2 ;
// const areaTriangulo = Math.sqrt(semiPerimetroTriangulo * ((semiPerimetroTriangulo - ladoTriangulo1) * (semiPerimetroTriangulo - ladoTriangulo2) *(semiPerimetroTriangulo - baseTriangulo)))
// console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

// console.groupEnd();

// Código del círculo
// console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del círculo es: " + diametroCirculo + "cm");

// PI
// const PI = Math.PI;
// console.log("PI es: " + PI);

// // Circunferencia
// const circunferenciaCirculo = diametroCirculo * PI;
// console.log(`La circunferencia del circulo es: ${circunferenciaCirculo}cm`);

// Área
// const areaCirculo = Math.pow(radioCirculo , 2) * PI;
// console.log(`El àrea del circulo es: ${areaCirculo}cmˆ2`);

// console.groupEnd();

// -------------------------Algoritmo-Dinamico---------------------------
// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return Math.pow(lado , 2)
} 

console.groupEnd();

// Código del triángulo

console.group("Triangulo");

function perimetroTriangulo(lado1 , lado2 , base) {
  return lado1 + lado2 + base;
};

function areaTriangulo(lado1 , lado2 , base) {
  const semiPerimetroTriangulo = (lado1 + lado2 + base) / 2 ;
  return Math.sqrt(semiPerimetroTriangulo * ((semiPerimetroTriangulo - lado1) * (semiPerimetroTriangulo - lado2) *(semiPerimetroTriangulo - base)))
};

console.groupEnd();

// Código del círculo
console.group("Círculos");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function circunferenciaCirculo(radio){
  const diametro = radio * 2;
  return diametro * PI ;
} 

// Área
function areaCirculo(radio) {
  return Math.pow(radio , 2) * PI;
} 

console.groupEnd();
// Cuadrado
function cálculaPerimetroCuadrado() {
  const input = document.querySelector("#InputCuadrado"); 
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);

}
function cálculaÁreaCuadrado() {
  const input = document.querySelector("#InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}
// Triangulo
function cálculaPerimetroTriangulo() {
  const input1 = document.querySelector("#InputTrianguloLado1");
  const value1 = Number(input1.value);

  const input2 = document.querySelector("#InputTrianguloLado2");
  const value2 = Number(input2.value);

  const input3 = document.querySelector("#InputTrianguloBase");
  const base = Number(input3.value);

  const perimetro = perimetroTriangulo(value1 ,value2 ,base);
  alert(perimetro);
}
function cálculaÁreaTriangulo() {
  const input1 = document.querySelector("#InputTrianguloLado1");
  const value1 = Number(input1.value);
  
  const input2 = document.querySelector("#InputTrianguloLado2");
  const value2 = Number(input2.value);
  
  const input3 = document.querySelector("#InputTrianguloBase");
  const base = Number(input3.value);


  const area = areaTriangulo(value1 , value2 , base);
  alert(area);
}
// Altura del Triangulo
function cálculaAlturaTriangulo() {
  const input1 = document.querySelector("#InputTrianguloLado1");
  const value1 = Number(input1.value);
  
  const input2 = document.querySelector("#InputTrianguloLado2");
  const value2 = Number(input2.value);
  
  const input3 = document.querySelector("#InputTrianguloBase");
  const base = Number(input3.value);

  function alturaTriangulo(lado1 , lado2 , base) {
    const semiPerimetroTriangulo = (lado1 + lado2 + base) / 2 ;
    return (2 / base) * Math.sqrt(semiPerimetroTriangulo * (semiPerimetroTriangulo - lado1) * (semiPerimetroTriangulo - lado2) * (semiPerimetroTriangulo - base));
  };
  const altura = alturaTriangulo(value1 , value2 , base);
  switch(true) {
    case (value1 === value2 && value1 !== base):
      setTimeout(function(){
        alert(`Es un triangulo isoceles. Y su altura es ${altura}`)
      }, 3000)
      break;
    default:
      setTimeout(function(){

        alert(`No es un triangulo isoceles. Y su altura es ${altura}`)
      }, 3000)
  }
}
// Circulo
function cálculaCircunferenciaCirculo() {
  const input = document.querySelector("#InputCirculo");
  const value = input.value;
  const circunferencia = circunferenciaCirculo(value);
  alert(circunferencia);
}
function cálculaÁreaCirculo() {
  const input = document.querySelector("#InputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  alert(area);  
}
