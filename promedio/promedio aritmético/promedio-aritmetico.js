// Forma-Estatica
const lista = [99,100,122,123];
let calculaSumaLista = 0

for(var i = 0 ; i < lista.length ; i++ ){
    calculaSumaLista += lista[i] 
}
const calculaPromedioLista = calculaSumaLista / lista.length
console.log(calculaPromedioLista)

// Forma-Dinamica
function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    Array.prototype.reduce()
// El método reduce() ejecuta una función reductora sobre cada elemento de un 
// array, devolviendo como resultado un único valor.

// Descripción
// El método reduce() ejecuta callback una vez por cada elemento presente en 
// el array, excluyendo los huecos del mismo, recibe cuatro argumentos:

// valorAnterior
// valorActual
// indiceActual
// array

// La primera vez que se llama la función, valorAnterior y valorActual pueden 
// tener uno de dos valores. Si se proveyó un valorInicial al llamar a reduce, 
// entonces valorAnterior será igual al valorInicial y valorActual será igual 
// al primer elemento del array. Si no se proveyó un valorInicial, entonces 
// valorAnterior será igual al primer valor en el array y valorActual será el 
// segundo.

// Si el array está vacío y no se proveyó un valorInicial lanzará un TypeError 
// (en-US). Si el array tiene un sólo elemento (sin importar la posición) y no 
// se proveyó un valorInicial, o si se proveyó un valorInicial pero el arreglo 
// está vacío, se retornará ese único valor sin llamar a la función.

// Suponga que ocurre el siguiente uso de reduce:
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }