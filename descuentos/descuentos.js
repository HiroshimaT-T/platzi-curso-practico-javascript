//? ------------------------------Evento-Scroll-------------------------------------------------------------------------------
window.addEventListener('scroll' , function(){
    const scrollTopheader = document.documentElement.scrollTop
    const haeder = document.querySelector(".header")
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

// Forma-Estatica
// const precio =  100;
// const descuento = 58;
// const porcentajeDelPrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;
//? ------------------------------Calculadora-Descuento-------------------------------------------------------------------------------
const caluladora1ContentsInputSimbolo = document.querySelector(".caluladora1-contents__input-simbolo")
const caluladora1ContentsInputSimboloSelect = document.querySelector(".caluladora1-contents__input-select-simbolo")
let caluladora1ContentsInputSimboloSelectValue = String(caluladora1ContentsInputSimboloSelect.value)
function generation1TextSimbolo (){
    const caluladora1ContentsInputSimboloSelectValue = String(caluladora1ContentsInputSimboloSelect.value);
    caluladora1ContentsInputSimbolo.innerText = `${caluladora1ContentsInputSimboloSelectValue}`
}
generation1TextSimbolo ();
caluladora1ContentsInputSimboloSelect.addEventListener('change' , (e)=>{
    caluladora1ContentsInputSimbolo.innerText = `${e.target.value}`;
    caluladora1ContentsInputSimboloSelectValue = e.target.value;
})
function calcularPrecioConDescuento (precio , descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    return (precio * porcentajeDelPrecioConDescuento) / 100;
}

// Forma-Dinamica

function onclickButtomPriceDiscount() {
    const buttonPriceDiscount = document.getElementById("ButtonPriceDiscount");


    const InputPreci = document.getElementById("InputPrice");
    const precioValue = Number(InputPreci.value)

    const InputDiscount = document.getElementById("InputDiscount");
    const descuentoValue = Number(InputDiscount.value)
    
    const precioConDescuento = calcularPrecioConDescuento (precioValue , descuentoValue);
    const priceDiscount = document.getElementById("PriceDiscount")
    switch(true) {
        case precioValue === 0 || descuentoValue === 0 :
            priceDiscount.innerHTML = "";
            break;
        default:
            // priceP.innerHTML = `El precio con descuento es: $${precioConDescuento}`
            buttonPriceDiscount.setAttribute("type","button")
            priceDiscount.innerText = "El precio resultante es: " + caluladora1ContentsInputSimboloSelectValue + precioConDescuento + "." ;
            priceDiscount.style.display = "flex";
    }
    
};
//? ------------------------------Calculadora-Descuento-------------------------------------------------------------------------------
//? ------------------------------Calculadora-Descuento-Cupones-------------------------------------------------------------------------------
const body = document.querySelector(".body")
const heightHalfViewport = window.innerHeight / 2;
const listCuponesDesordenado = [
    {
        name: "15j224d" ,
        discount: 12 ,
    }
    ,
    {
        name: "77f892c" ,
        discount: 25 ,
    }
    ,
    {
        name: "229j16s" ,
        discount: 45 ,
    }
    ,
    {
        name: "2159q9a" ,
        discount: 32 ,
    }
    ,
    {
        name: "3718e8w" ,
        discount: 11 ,
    }
    ,
    {
        name: "8761r5d" ,
        discount: 3 ,
    }
    ,
    {
        name: "5q4878a" ,
        discount: 15 ,
    }
    ,
    {
        name: "607d69x" ,
        discount: 85 ,
    }
    ,
    {
        name: "0s9620h" ,
        discount: 91 ,
    }
    ,
    {
        name: "264d1f" ,
        discount: 18 ,
    }
    ,
    {
        name: "6s8825d" ,
        discount: 27 ,        
    }
    ,
    {
        name: "854d16j" ,
        discount: 81 ,
    }
]
const listCupones = listCuponesDesordenado.sort((a, b)=>{
    return  b.discount - a.discount
    
})

const descuentoCuponCalculadoraBox = document.querySelector(".descuento__caluladora2-container")
const caluladora2ContentsInputSimbolo = document.querySelector(".caluladora2-contents__input-simbolo")
const caluladora2ContentsInputSimboloSelect = document.querySelector(".caluladora2-contents__input-select-simbolo")
let caluladora2ContentsInputSimboloSelectValue = String(caluladora2ContentsInputSimboloSelect.value)
console.log(caluladora2ContentsInputSimboloSelectValue)
function generation2TextSimbolo (){
    const caluladora2ContentsInputSimboloSelectValue = String(caluladora2ContentsInputSimboloSelect.value);
    caluladora2ContentsInputSimbolo.innerText = `${caluladora2ContentsInputSimboloSelectValue}`
}
generation2TextSimbolo ();
caluladora2ContentsInputSimboloSelect.addEventListener('change' , (e)=>{
    caluladora2ContentsInputSimbolo.innerText = `${e.target.value}`
    caluladora2ContentsInputSimboloSelectValue = e.target.value
})
function generationListCupones () {

    let containerListCupones = document.createElement("ul")
    containerListCupones.classList.add("calculadora__cupon-list")
    descuentoCuponCalculadoraBox.appendChild(containerListCupones)

    containerListCupones.innerHTML = `<li class="calculadora__cupon-list-title"> Lista de Cupones <i class="fas fa-car-battery"></i></li>`
 
    for( let i = 0 ; i < listCupones.length ; i++) {
        if(i < 3){
            containerListCupones.innerHTML += `<li class="calculadora__cupon"><span class="calculadora__cupon-ordered">${i+1}°</span> <span class="calculadora__cupon-info">Cupón: "${listCupones[i].name}" </br> Descuento: ${listCupones[i].discount}%</span> <i class="fas calculadora__cupon-icon calculadora__cupon-iconA fa-trophy"></i></li>`
        }else {
            containerListCupones.innerHTML += `<li class="calculadora__cupon"><span class="calculadora__cupon-ordered">${i+1}°</span> <span class="calculadora__cupon-info">Cupón: "${listCupones[i].name}" </br> Descuento: ${listCupones[i].discount}%</span> <i class="fas calculadora__cupon-icon calculadora__cupon-iconB  fa-award"></i></li>`
        }
    }

} 
generationListCupones();
const descuentoCaluladoraContentsAlert = document.querySelector(".descuento__caluladora-contents-alert")
//? ------------------Alert-Cupon-No-Valid------------------------
const boxAlertCuponNoValid = document.createElement("div");
descuentoCaluladoraContentsAlert.appendChild(boxAlertCuponNoValid);
boxAlertCuponNoValid.classList.add("alert__cupon-container--no-valid");



//? ------------------Alert-Cupon-No-Valid------------------------
//? ------------------Alert-Cupon-Valid---------------------------

const boxAlertCuponValid = document.createElement("div");
descuentoCaluladoraContentsAlert.appendChild(boxAlertCuponValid);
boxAlertCuponValid.classList.add("alert__cupon-container--valid");


//? ------------------Alert-Cupon-Valid---------------------------
function onclickButtomPriceDiscountCupon() {
    const buttonPriceDiscountCupon = document.getElementById("ButtonPriceDiscountCupon");
    
    const inputPrecio = document.getElementById("InputPrecio");
    const precioValue = Number(inputPrecio.value) ;

    const inputDiscountCupon = document.getElementById("InputDiscountCupon");
    const descuentoValue = inputDiscountCupon.value ;
    
    //? ------------------Complete-Input-Required---------------------
    
    switch(true) {
        case precioValue === 0 || descuentoValue === 0 :
            
            break;
            default:
                buttonPriceDiscountCupon.setAttribute("type","button")
                //? ----------------Validando-Cupon-------------------------------
                
                const isCouponValueValid = function(cupon) {
                    return cupon.name === descuentoValue ;
                };
                const userCoupon = listCupones.find(isCouponValueValid);
                console.log(userCoupon)
                console.log(!userCoupon)
                //? ----------------Validando-Cupon-------------------------------
                //? ------------------Alert-Cupon-No-Valid------------------------
                
                boxAlertCuponNoValid.innerHTML = ` <buttom class="alert__cupon-button" onclick="closeAlertCuponNoValid()"><i class="fas fa-times-circle"></i></buttom>
                <h2 class="alert-cupon__title">Tu cupon <strong>"${descuentoValue}"</strong> no es válido</h2>
                <p class="alert-cupon__paragraph">Porfavor ingrese el código de tu cupon correctamente</p>`;
                
                //? ------------------Alert-Cupon-No-Valid------------------------
                //? ------------------Mostrando-Resultado---------------------------
                
                if (!userCoupon) {
                    boxAlertCuponNoValid.style.opacity = "1";
                    boxAlertCuponNoValid.style.pointerEvents = "auto"
                    boxAlertCuponNoValid.style.transform = "translateX(-50%) translateY(-50%)"
                
                }
                else {
                    //? ----------------Calculo-Precio-Con-Descuento-Del-Cupon--------
            
                    const discountCupon = userCoupon.discount
                    const priceDiscountCupon = calcularPrecioConDescuento (precioValue , discountCupon)
            
                    //? ----------------Calculo-Precio-Con-Descuento-Del-Cupon--------
                    //? ------------------Alert-Cupon-Valid---------------------------
                
                    boxAlertCuponValid.innerHTML = `<buttom class="alert__cupon-button" onclick="closeAlertCuponValid()"><i class="fas fa-times-circle"></i></buttom>
                    <h2 class="alert-cupon__title">Tu cupon <strong>"${descuentoValue}"</strong> es válido</h2>
                    <div class="alert-cupon__valores-list-container"> 
                    <ul class="alert-cupon__valores-list">
                        <li class="alert-cupon__valores-element">
                        Precio: ${caluladora2ContentsInputSimboloSelectValue}${precioValue}
                        </li>
                        <li class="alert-cupon__valores-element">
                        Cupón: "${descuentoValue}"
                        </li>
                        <li class="alert-cupon__valores-element">
                        Descuento: ${discountCupon}%
                        </li>
                    </ul>
                    </div>
                    <p class="alert-cupon__paragraph"> El precio resultante es : ${caluladora2ContentsInputSimboloSelectValue}${priceDiscountCupon}.</p>`;
                
                    //? ------------------Alert-Cupon-Valid---------------------------
                    boxAlertCuponValid.style.opacity = "1";
                    boxAlertCuponValid.style.pointerEvents = "auto"
                    boxAlertCuponValid.style.transform = "translateX(-50%) translateY(-50%)"

                }
                //? ------------------Mostrando-Resultado---------------------------

            };
            
            //? ------------------Complete-Input-Required---------------------
        }
//? ------------------Close-Alert-Cupon-No-Valid------------------

function closeAlertCuponNoValid() {
    boxAlertCuponNoValid.style.opacity = "0";
    boxAlertCuponNoValid.style.transform = "translateX(-50%) translateY(-200%)"
}

//? ------------------Close-Alert-Cupon-No-Valid------------------
//? ------------------Close-Alert-Cupon-Valid---------------------

function closeAlertCuponValid() {
    boxAlertCuponValid.style.opacity = "0";
    boxAlertCuponValid.style.transform = "translateX(-50%) translateY(-200%)"
}

//? ------------------Close-Alert-Cupon-Valid---------------------
//? ------------------------------Calculadora-Descuento-Cupones-------------------------------------------------------------------------------
        
        
        
        // RETO
        
        // Analicemos el problema y nuestra propuesta de solución:
        
        // Crearemos un array con cada uno de nuestros cupones.
        // Cambiaremos el input de descuento en HTML por un input de cupones.
        // Usaremos un condicional switch para aplicar cierto porcentaje de descuento 
        // en nuestros productos dependiendo del cupón que se haya elegido al presionar 
        // el botón del formulario.

// Vamos paso a paso:

// Crear un array de cupones

//! const cupones = [
//!     "JuanDC_es_Batman",
//!     "pero_no_le_digas_a_nadie",
//!     "es_un_secreto",
//! ];

// Cambiar el input de descuento por uno de cupones
// Cambiemos los IDs en HTML:

// <label for="InputCoupon">Escribe el cupón de descuento para tu producto:</label>
// <input id="InputCoupon" type="text" />
// Y actualicemos nuestras referencias en el código JavaScript:

// const inputCoupon = document.getElementById("InputCoupon");
// const couponValue = inputCoupon.value;

// Crear una variable descuento y asignarle un valor distinto con un switch

//! function onClickButtonPriceDiscount() {
//!   const inputPrice = document.getElementById("InputPrice");
//!   const priceValue = inputPrice.value;
  
//!   const inputCoupon = document.getElementById("InputCoupon");
//!   const couponValue = inputCoupon.value;

//!   let descuento;

//!   switch(couponValue) {
//!     case cupones[0]: // "JuanDC_es_Batman"
//!       descuento = 15;
//!     break;
//!     case cupones[1]: // "pero_no_le_digas_a_nadie"
//!       descuento = 30;
//!     break;
//!     case cupones[2]: // "es_un_secreto"
//!       descuento = 25;
//!     break;
//!   }


//1   const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//!   const resultP = document.getElementById("ResultP");
//!   resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//! }

// Solución #2: legibilidad, error first y muerte al switch

// Legibilidad es la facilidad que ofrece nuestro código para entenderlo 
// sin tropiezos cuando lo leemos. Mejorar la legibilidad es mucho más 
// importante que reducir la cantidad de líneas de código.

// Además, error-first es un patrón de programación donde atrapamos los 
// errores antes de escribir el resto de la lógica de nuestros programas. 
// Aplicar error-first nos puede ayudar a mejorar la legibilidad de nuestro 
// código (es completamente válido tener otra opinión, no te preocupes, 
// cuéntame en los comentarios).

// Error first con array.includes

// La función array.includes() nos permite validar si un elemento ha sido 
// almacenado en el array. Vamos a usar esta función para ejecutar un error 
// si el cupón de los usuarios es inválido (no fue guardado en el array 
// coupons):

//! if (!coupons.includes(couponValue)) {
//!     alert("El cupón " + couponValue + "no es válido");
//! }

// Ya que estamos usando un condicional if, podemos reescribir el resto 
// del condicional switch, pero en este caso usaremos condicionales else if:

//! if (!coupons.includes(couponValue)) {
//!    alert("El cupón " + couponValue + "no es válido");
//! } else if (couponValue === "JuanDC_es_Batman") {
//!    descuento = 15;
//! } else if (couponValue === "pero_no_le_digas_a_nadie") {
//!    descuento = 30;
//! } else if (couponValue === "es_un_secreto") {
//!    descuento = 25;
//! }

// Solución #3: arrays y condicionales mucho más inteligentes
// Ya usamos uno de los muchos métodos de los arrays para aplicar error 
// first. Pero podemos usar algunos más para simplificar aún más nuestro código.


// Array de cupones 2.0: ahora también con los descuentos
// Por ahora tenemos muy separada la lógica de nuestros cupones. Por un lado 
// tenemos la lista de cupones, pero en otro lugar distinto definimos el 
// descuento de cada cupón.

// Vamos a cambiar eso convirtiendo nuestro array de strings en un array de 
// objetos (con el nombre y descuento de cada cupón en el mismo lugar):

//! const coupons = [
//!     {
//!         name: "JuanDC_es_Batman",
//!         discount: 15,
//!     },
//!     {
//!         name: "pero_no_le_digas_a_nadie",
//!         discount: 30,
//!     },
//!     {
//!         name: "es_un_secreto",
//!         discount: 25,
//!     },
//! ];
// Ahora la función array.includes dejó de funcionar, pero podemos reemplazarla
// por la función array.find() para validar si el cupón que escribió el usuario 
// está guardado en la propiedad name de alguno de los objetos en la lista de 
// cupones.

// Vamos a crear una variable isUserCouponValueValid con una función que valide 
// si su parámetro coupon es igual a nuestra variable userCouponValue. Y esta 
// variable la vamos a enviar como parámetro a nuestra función array.find().

//! const isCouponValueValid = function (coupon) {
//!     return coupon.name === couponValue;
//! };

//! const userCoupon = coupons.find(isCouponValueValid);

//! if (!userCoupon) {
//!     alert("El cupón " + userCouponValue + "no es válido");
//! }
// ¡Muy bien!
// Pero fíjate que ya tenemos nuestro cupón (con nombre y descuento) 
// disponible en la nueva variable userCoupon.

// Podemos aprovechar esta variable para eliminar todos nuestros 
// condicionales else if y cambiarlos por un condicional else que nos 
// proporcione el porcentaje de descuento automáticamente, sin importar el 
// cupón (válido) que estén usando nuestros usuarios.

//! if (!userCoupon) {
//!     alert("El cupón " + userCouponValue + "no es válido");
//! } else {
//!     const descuento = userCoupon.discount;
//!     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//!     const resultP = document.getElementById("ResultP");
//!     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//! }

// De esta forma, no solo logramos reducir las líneas de código de nuestro 
// programa, sino también mejorar su legibilidad.
