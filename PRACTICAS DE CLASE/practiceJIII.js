// Esta practica es una copia de lo que se hace en consola

// LOOPS así funciona FOR

for (var i = 0; i < 10; i++){
    console.log(i);
}
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9

// Ahora se le agrega complejidad a FOR
var name = Pablo;
for (var i = 0; i < 5; i++){
    console.log(name[i]);
}
P
a
b
l
o

//FUNCTION con FOR con y un IF:
// Una función en java script sólo puede devolver UN valor
//Por eso finaliza cuando encuentra un "return"
function encontrarVocalA(string){      
    for(var i = 0; i < string.length; i++){
        if(string[i] === 'a'){
            return 'Encontramos la vocal';   
        }
    }
    return 'El string no tiene ninguna letra a'
}

//Otro ejemplo igual al anterior
function encontrarVocalA(string){
    for(var i = 0; i <string.length; i++){
        var position = i + 1;
        if(string[i] === 'a'){
            return 'Encontramos la vocal ' + position;
        }
    }
    return 'El string no tiene letra a'
}
encontrarVocalA('Pablo')
'Encontramos la vocal 2'
encontrarVocalA('espejo')
'El string no tiene letra a'

//WHILE así es como se utiliza
var count = 1;
while(count < 6){
    console.log('count es: ' + count);
    count ++;
}
count 1
count 2
count 3
count 4
count 5
5




//ARRAYS así se hacen los arreglos,
//guardan elementos y se pueden reasignar elementos.
var comidas = ['Hot dog', 'Pastas', 'Lasagna', 45];

comidas[3] = 'Hamburguesa';

console.log(comidas)
(4) ['Hot dog', 'Pastas', 'Lasagna', 'Hamburguesa']


//LENGTH
console.log(comidas.length)
4

//PUSH agrega un elemento al final
comidas.push('sanwich')

console.log(comidas)
1 (5) ['Hot dog', 'Pastas', 'Lasagna', 45, 'sanwich']

//POP elimina el último elemento
comidas.pop()
'sanwich'
console.log(comidas)
1 (4) ['Hot dog', 'Pastas', 'Lasagna', 45]

//UNSHIFT agrega elemento al inicio
comidas.unshift('cocacola');
5
console.log(comidas)
1 (5) ['cocacola', 'Hot dog', 'Pastas', 'Lasagna', 45]

//SHIFT elimina el primer elemento
comidas.shift()
'cocacola'
console.log(comidas)
1 (4) ['Hot dog', 'Pastas', 'Lasagna', 45]



//Mezclando ARRAY con LOOPS

var comidas = ['Hot dog', 'Lasagna', 'Pizza'];
undefined
for (var i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}
Hot dog
Lasagna
Pizza

//FOR OF Recorre todos los elementos del arreglo
for(comidas of comidas){
    console.log(comidas);
}
VM880:2 Hot dog
VM880:2 Lasagna
VM880:2 Pizza

//.FOREACH .forEach  Agrega una función para cada elemento CALLBACK.
