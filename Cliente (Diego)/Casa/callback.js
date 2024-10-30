/*
Higher order functions are functions which 
-take other function as a parameter or 
-return a function as a value.
----The function passed as a parameter is called callback.
Callback
A callback is a function which can be passed as parameter to other function.
*/

// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
  }
  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
  console.log(cube(callback, 3))

//arrow function
const saludo = () =>{
    return console.log("Te saludo");
}
const createUser =(username, password) =>{
    const usuario ={
        this:id =1,
        this:username = username,
        this:password = password,
        direccion: {
            calle: "Av. 1",
            numero: "123",
            ciudad: "Madrid"
          }
    }
    return console.log(usuario);
}