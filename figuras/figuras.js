//? ------------------------------Evento-Scroll-------------------------------------------------------------------------------
window.addEventListener('scroll' , function(){
  const scrollTopheader = document.documentElement.scrollTop
  const haeder = document.querySelector(".header")
  console.log(scrollTopheader) 
  if(scrollTopheader === 0){
      haeder.classList.remove("header--scroll")
  }else {
      haeder.classList.add("header--scroll")
  }

                                                                                                                                           
})
// window.onscroll = function() {
// }

//? ------------------------------Evento-Scroll-------------------------------------------------------------------------------
//? ------------------------------Buttom-------------------------------------------------------------------------------
const listaMenu = document.querySelector(".header-nav__link-list-close");
const buttomMenu = document.querySelector(".header-nav__buttom-menu");
const elementButtomMenu = document.querySelectorAll(".header-nav__buttom-menu__item");

function despliegueMenuList() {
    listaMenu.classList.toggle("header-nav__link-list-open");
    elementButtomMenu.forEach((element) => {
        element.classList.toggle("header-nav__buttom-menu__item-filter");
    } )
    buttomMenu.classList.toggle("header-nav__buttom-menu-filter");
};
//? ------------------------------Buttom-------------------------------------------------------------------------------









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
// Diametro
function diametroCirculo(radio){
  const  diametro = radio * 2;
  return  diametro;
} 

// Área
function areaCirculo(radio) {
  return Math.pow(radio , 2) * PI;
} 
// Radio al Cuadrado
function radioCuadradoCirculo(radio) {
  return Math.pow(radio , 2);
} 
//? ------------------------------Cuadrado-------------------------------------------------------------------------------
const figureResultadoCuadrado = document.querySelector(".figure__resultado-cuadrado")
const selectCuadrado = document.querySelector("#SelectCuadrado");
let unidadCuadradoValue = "cm";
selectCuadrado.addEventListener('change', () => {
  const selectCuadradoValue = String(selectCuadrado.value)
  unidadCuadradoValue = selectCuadradoValue;
});
function cálculaPerimetroCuadrado() {
  const input = document.querySelector("#InputCuadrado"); 
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  figureResultadoCuadrado.style.display = "flex";
  figureResultadoCuadrado.innerHTML = `El perimetro del cuadrado es: </br> ${perimetro}${unidadCuadradoValue}.`;

}
function cálculaÁreaCuadrado() {
  const input = document.querySelector("#InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  figureResultadoCuadrado.style.display = "flex"
  figureResultadoCuadrado.innerHTML = `El área del cuadrado es: </br> ${area}${unidadCuadradoValue}².`;
}
//? ------------------------------Cuadrado-------------------------------------------------------------------------------
//? ------------------------------Rectangulo-------------------------------------------------------------------------------
const figureResultadoRectangulo = document.querySelector(".figure__resultado-rectangulo")
const select1Rectangulo = document.querySelector("#Select1Rectangulo");
const select2Rectangulo = document.querySelector("#Select2Rectangulo");
let unidadRectanguloValue = "cm";
function selectEqualizeFigureRectangulo() {
  const select1RectanguloValue = String(select1Rectangulo.value);
  select2Rectangulo.innerText = `${select1RectanguloValue}`;
}
selectEqualizeFigureRectangulo();
select1Rectangulo.addEventListener('change', () => {
  const select1RectanguloValue = String(select1Rectangulo.value);
  select2Rectangulo.innerText = `${select1RectanguloValue}`;
  unidadRectanguloValue = select1RectanguloValue;
});
function cálculaPerimetroRectangulo() {
  const input1 = document.querySelector("#InputLadoARectangulo"); 
  const input2 = document.querySelector("#InputLadoBRectangulo"); 
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const perimetro = value1*2 + value2*2;
  figureResultadoRectangulo.style.display = "flex"
  figureResultadoRectangulo.innerHTML = `El perimetro del rectángulo es: </br> ${perimetro}${unidadRectanguloValue}.`;

}
function cálculaÁreaRectangulo() {
  const input1 = document.querySelector("#InputLadoARectangulo"); 
  const input2 = document.querySelector("#InputLadoBRectangulo"); 
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const area = value1 * value2;
  figureResultadoRectangulo.style.display = "flex"
  figureResultadoRectangulo.innerHTML = `El área del rectángulo es: </br> ${area}${unidadRectanguloValue}².`;
}
//? ------------------------------Rectangulo-------------------------------------------------------------------------------
//? ------------------------------Triangulo-------------------------------------------------------------------------------
const figureResultadoTriangulo = document.querySelector(".figure__resultado-triangulo")
Select1Triangulo
const select1Triangulo = document.querySelector("#Select1Triangulo");
const select2Triangulo = document.querySelector("#Select2Triangulo");
const select3Triangulo = document.querySelector("#Select3Triangulo");
let unidadTrianguloValue = "cm";
function selectEqualizeFigureTriangulo() {
  const select1TrianguloValue = String(select1Triangulo.value);
  select2Triangulo.innerText = `${select1TrianguloValue}`;
  select3Triangulo.innerText = `${select1TrianguloValue}`;
}
selectEqualizeFigureTriangulo();
select1Triangulo.addEventListener('change', () => {
  const select1TrianguloValue = String(select1Triangulo.value);
  select2Triangulo.innerText = `${select1TrianguloValue}`;
  select3Triangulo.innerText = `${select1TrianguloValue}`;
  unidadTrianguloValue = select1TrianguloValue;
  console.log(unidadTrianguloValue)
});
function cálculaPerimetroTriangulo() {
  const input1 = document.querySelector("#InputTrianguloLado1");
  const value1 = Number(input1.value);

  const input2 = document.querySelector("#InputTrianguloLado2");
  const value2 = Number(input2.value);

  const input3 = document.querySelector("#InputTrianguloBase");
  const base = Number(input3.value);

  const perimetro = perimetroTriangulo(value1 ,value2 ,base);
  figureResultadoTriangulo.style.display = "flex"
  figureResultadoTriangulo.innerHTML = `El perimetro del triángulo es: </br> ${perimetro}${unidadTrianguloValue}.`;
}
function cálculaÁreaTriangulo() {
  const input1 = document.querySelector("#InputTrianguloLado1");
  const value1 = Number(input1.value);
  
  const input2 = document.querySelector("#InputTrianguloLado2");
  const value2 = Number(input2.value);
  
  const input3 = document.querySelector("#InputTrianguloBase");
  const base = Number(input3.value);


  const area = areaTriangulo(value1 , value2 , base);
  figureResultadoTriangulo.style.display = "flex"
  figureResultadoTriangulo.innerHTML = `El área del triángulo es: </br> ${area}${unidadTrianguloValue}².`;
}
//? ------------------------------Triangulo-Altura------------------------------------------------------------------------------

function cálculaAlturaTriangulo() {
  const input1 = document.querySelector("#InputTrianguloLado1");
  const value1 = Number(input1.value);
  
  const input2 = document.querySelector("#InputTrianguloLado2");
  const value2 = Number(input2.value);
  
  const input3 = document.querySelector("#InputTrianguloBase");
  const base = Number(input3.value);

  function alturaTriangulo(lado1 , lado2 , base) {
    const semiPerimetroTriangulo = (lado1 + lado2 + base) / 2 ;
    console.log(semiPerimetroTriangulo)
    const resultadoPart1 = semiPerimetroTriangulo * (semiPerimetroTriangulo - lado1) * (semiPerimetroTriangulo - lado2) * (semiPerimetroTriangulo - base);
    console.log(resultadoPart1)
    return (2 / base) * Math.sqrt(resultadoPart1)

  };
  const altura = alturaTriangulo(value1 , value2 , base);
  console.log(altura)
  switch(true) {
    case (value1 === value2 && value1 !== base):
      if(isNaN(altura) || altura === 0){
        figureResultadoTriangulo.style.display = "flex"
        figureResultadoTriangulo.innerHTML = `Los valores que introdujiste describen una figura geométrica imposible.`;
      }else {
        figureResultadoTriangulo.style.display = "flex"
        figureResultadoTriangulo.innerHTML = `Es un triangulo isoceles. Y su altura es: </br> ${altura}${unidadTrianguloValue}.`;
      }
      break;
    case (value1 === value2 && value1 === base):
      if(isNaN(altura) || altura === 0){
        figureResultadoTriangulo.style.display = "flex"
        figureResultadoTriangulo.innerHTML = `Los valores que introdujiste describen una figura geométrica imposible.`;
      }else {
        figureResultadoTriangulo.style.display = "flex"
        figureResultadoTriangulo.innerHTML = `Es un triangulo equilatero. Y su altura es: </br> ${altura}${unidadTrianguloValue}.`;
      }
      break;
    case (value1 !== value2 && value1 !== base):
      if(isNaN(altura) || altura === 0){
        figureResultadoTriangulo.style.display = "flex"
        figureResultadoTriangulo.innerHTML = `Los valores que introdujiste describen una figura geométrica imposible.`;
      }else {
        figureResultadoTriangulo.style.display = "flex"
        figureResultadoTriangulo.innerHTML = `Es un triangulo escaleno. Y su altura es: </br> ${altura}${unidadTrianguloValue}.`;
      }
      break;
  }
}
//? ------------------------------Triangulo-------------------------------------------------------------------------------

//? ------------------------------Circulo-------------------------------------------------------------------------------
const figureResultadoCirculo = document.querySelector(".figure__resultado-circulo")
const selectCirculo = document.querySelector("#SelectCirculo");
let unidadCirculoValue = "cm";
selectCirculo.addEventListener('change', () => {
  const selectCirculoValue = String(selectCirculo.value);
  unidadCirculoValue = selectCirculoValue;
});
function cálculaCircunferenciaCirculo() {
  const input = document.querySelector("#InputCirculo");
  const value = input.value;
  const circunferencia = circunferenciaCirculo(value);
  const diametro = diametroCirculo(value);
  figureResultadoCirculo.style.display = "flex"
  figureResultadoCirculo.innerText = `El perimetro del círculo es: ${circunferencia}${unidadCirculoValue} o ${diametro}π${unidadCirculoValue}.`;
}
function cálculaÁreaCirculo() {
  const input = document.querySelector("#InputCirculo");
  const value = input.value;
  const area = areaCirculo(value);

  const radioCuadrado = radioCuadradoCirculo(value)
  figureResultadoCirculo.style.display = "flex"
  figureResultadoCirculo.innerHTML = `El área del círculo es: </br> ${area}${unidadCirculoValue}² o ${radioCuadrado}π${unidadCirculoValue}².`;
}
//? ------------------------------Circulo-------------------------------------------------------------------------------
