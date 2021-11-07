//declaro una variable tipo let "btnenviar" que toma un valor que viene
//del input send (que es el boton donde se le da enviar datos)
let buttonSend = document.getElementById("send");

//creo una función a partir de la variable "btnenviar" que
//tomaba los valores del envío de datos, y la asocio al "click"
buttonSend.addEventListener("click", function(){
  //Primero busco el input
  //aca tomo el id del input text (donde el usuario ingresa 
  //el valor), y almaceno ese valor en el let "inputCaptcha"
  let inputCaptcha = document.getElementById("captcha");
  //Verifico el dato
  //ahora creo el let "divResultado" que luego me devuelve si
  //el captcha es correcto e incorrecto
  let result = document.getElementById("result");
  //por ahora lo dejo vacío
  result.innerHTML = "";
  //creo la variable que almacene tres valores de numeros enteros
  //para 6,7 y 9  
  let = int1 = 6, int2 = 7, int3 = 9;
  //ahora creo la función booleana dentro de la funcion general
  if (inputCaptcha.value == int1 || inputCaptcha.value == int2 || inputCaptcha.value == int3) {
    //si el resultado es igual a "int1" (6) se ejecutará lo de abajo
    //se crea una variable let "encabezado" que lo que hace
    //es hacer un h1 para html
    let textResult = document.createElement("h1");
    //ahora a ese let se le agrega un texto para modificar
    //el html
    textResult.innerText = "El resultado es correcto";
    //y ahora vinculo ese texto del let "encabezado" con el otro
    //let "divResultado" que tomaba el valor del div de html
    //esta operacion permite que si se cumple el "if" entonces
    //se creara un h1 que modificara el div del html agregando
    //el texto del "encabezado"
    result.appendChild(textResult)
    console.log(int1, int2, int3);
  }else{
    // El dato es distinto a 6, 7 o 9
    //alert("esta mal");
    //divResultado.innerHTML = "Captcha incorrecto"
    //aca en definitiva hago lo mismo que en el "if" pero esto
    //se ejecuta solo si el valor almacenado en el let "inputCaptcha"
    //es diferente de 8
    let textResult = document.createElement("h1");
    textResult.innerText = "El resultado es incorrecto";
    result.appendChild(textResult) 
  }
});
