//Así se accede a una propiedad específica de un OBJETO.

var usuario = {
    nombre: "Andres",
    contraseña: "hola123",
    edad: 26,
    online: true
}
  undefined

usuario['nombre'];
'Andres'
usuario['edad'];
26
usuario.contraseña
'hola123'
usuario[password]
'hola123'
usuario.password
undefined


// Métodos de un Objeto. Un objeto puede almacenar una Función dentro de una propiedad.
var nuevoObjeto = {
    decirHola: function() {
        return 'Hola a todo el mundo!';
    }
}

nuevoObjeto.decirHola(); //Así se ejecuta.
'Hola a todo el mundo!'


// Bucle:   FOR ... IN
var usuario = {
    nombre: "Andres",
    contraseña: "hola123",
    edad: 26,
    online: true
  }
  
  for(var property in usuario){
    console.log(property);
    console.log(usuario[property]);
}
nombre
Andres
contraseña
hola123
edad
26
online
true
 
     //Desmenuzando el FOR .... IN
console.log('nombre');
nombre
  
usuario['edad'];
26

console.log(usuario['nombre']);
Andres
//-------------------



//keyword -----  THIS  ----- 
/*
Cuando vas a usar un MÉTODO 
y quieres llamar a otra PROPIEDAD 
que está dentro del mismo OBJETO
usa la keyword THIS para poder utilizarlo.
--
Entonces el METODO entenderá el CONTEXTO.
*/
var usuario = {
    nombre: "Pablo",
    contraseña: "hola123",
    edad: 23,
    online: true,
    saludar: function(){
      console.log('hola, ' + this.nombre);
    }
  }
  
  usuario.saludar();
 hola, Pablo

///
 var usuario = {
    nombre: "Pablo",
    password: "hola123",
    edad: 23,
    online: true,
    saludar: function(){
      console.log('hola, ' + this.nombre + ' esta es tu edad: ' + this.edad + ' y tu contraseña es esta: ' + this.password);
    }
  }
  
  usuario.saludar();