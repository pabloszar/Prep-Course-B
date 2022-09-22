// Esto se está ejecutando en la:
// "Consola"

function logHola(nombre, apellido) {
    console.log('Hola, ' + nombre + ' ' + apellido);
}

logHola('Ramses', 'Guerrero')

// Esto es para ver lo que hace:
// "RETURN".

function sumarDosNúmeros(a,b)
{
... var suma = a + b;
... return suma;
... }

sumarDosNúmeros(5,6)
11

//Se puede realizar sin "var" variable
function sumarDosNúmeros(a,b)
{
... var suma = a + b;
... return suma;
... }

sumarDosNúmeros(5,6)
11


// CONDICIONALES "IF" "ELSE"

function puedeManejar(edad) {
    ... if (edad >= 18) {
    ..... return true;
    ..... } else {
    ..... return false;
    ..... }
    ... }
    undefined
    > puedeManejar(56)
    true
    > puedeManejar(8)
    false
    > puedeManejar(18)
    true

// Ejemplo más de una condición IF
    function puedeManejar(edad) {
        ... if (edad >= 18 && edad < 80) { 
        ..... return true;
        ..... } else {
        ..... return false;
        ..... }
        ... }
        undefined
        > puedeManejar(99)
        false
        > puedeManejar(15)
        false
        > puedeManejar(80)
        false
        > puedeManejar(18)
        true



        //Múltiples condicionales
    
function dominiosDeInternet(dominio){ 
    if(dominio === 'us'){
        return 'Es de Estados Unidos'
    } else if(dominio === 'mx'){       
        return 'Es de México'
    } else if(dominio === 'co'){
        return 'Es de Colombia'
    } else {
        return 'No sabo de dónde es :('    
    }
}

dominiosDeInternet('co')
'Es de Colombia'
dominiosDeInternet('us')
'Es de Estados Unidos'
dominiosDeInternet('com')
'No sabo de dónde es :('