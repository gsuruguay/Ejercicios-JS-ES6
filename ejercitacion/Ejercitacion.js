//Crea una clase con ES6.
//La clase Persona debe: 
//1. Recibir en su constructor un nombre, apellido, edad, pasaTiempo, email, password
//2. Debe tener un metodo 'saludar', que retorne un saludo 'Hola {nombre de la persona}'
//3. Debe tener un metodo 'mayoriaDeEdad', que retorne true si la persona es mayor de edad
//4. Debe tener un metoodo 'pasaTiempos', que retorne un arreglo con por lo menos 3 pasatiempos
//5. Debe tener un metodo 'login' que reciba un 'email' y una 'password', que retorne "logueado" si, el email y la password, matchean con el email y la password de la Persona. En caso contrario retornar "404"
//↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ 
/* function Persona(){}
 */
class Persona {
    constructor(nombre, apellido, edad, pasaTiempo, email, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pasaTiempo = pasaTiempo;
        this.email = email;
        this.password = password;
    }
    saludar() {
        return `Hola ${this.nombre}`;
    }
    mayoriaDeEdad() {
        return this.edad > 18 ? true : false;
    }
    pasaTiempos(uno, dos, tres) {
        let algunosPasatiempos = [uno = "no hace nada", dos = "capaz hace algo", tres = "nose nada", ...this.pasaTiempo]
        return algunosPasatiempos;
    }
    login(email, password) {
        let logueado = (email === this.email && password === this.password) ? "logueado" : "404";
        return logueado
    }
}

//↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ 
//Crea una clase con ES6.
//La clase Empleado debe: 
//1. Extender de Persona
//2. Recibir en su constructor un nombre, apellido, edad, pasaTiempo, email, password, empresa, cargo, salario
//3. Llamar a Super y pasarle los argumentos que puede heredar de su padre.
//4. Debe tener un metodo 'cantidadVacaciones', que retorne:
//      - 20 si el cargo del Empleado es 'jefe'.
//      - 0 si el cargo del Empleado es 'ayudante'.
//      - 10 si el cargo del Empleado es 'asistente'.
//3. Debe tener un metodo 'saludar', que retorne `nombre apellido cargo` del Empleado
//4. Debe tener un metoodo 'acceso', que utilice el metodo 'login' para verificar si la persona puede loguearse, si el mensaje de login es 'logueado' debe:
//      - verificar si el cargo es 'jefe' y responder con un mensaje 'bienvenido jefe'. 
//      - verificar si el cargo es 'ayudante' y responder con un mensaje 'bienvenido ayudante'. 
//      - si no es ninguno de estos dos cargos, debe responder con '404'
//↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ 
//function Empleado(){}

class Empleado extends Persona {
    constructor(nombre, apellido, edad, pasaTiempo, email, password, empresa, cargo, salario) {
        super(nombre, apellido, edad, pasaTiempo, email, password)
        this.empresa = empresa;
        this.cargo = cargo;
        this.salario = salario;
    }
    cantidadVacaciones() {
        if (this.cargo === "jefe") {
            return 20;
        } else if (this.cargo === "ayudante") {
            return 0;
        } else if (this.cargo === "asistente") {
            return 10;
        }
    }
    saludar() {
        return `${this.nombre} ${this.apellido} ${this.cargo}`
    }
    acceso() {
        let islogued = super.login(this.email, this.password);
        if (islogued === "logueado") {
            return (this.cargo === "jefe" || this.cargo === "ayudante") ? `bienvenido ${this.cargo}` : "404";
        }
    }
}


//↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ ↓↓↓↓↓↓↓↓↓ 
//Transforma la mayor cantidad de codigo posible a ES6.
//Verifica que los test sigan pasando despues de hacer los cambios
//TIPS: 
// 1. Transformar 'pasarAES6' en arrow function.
// 2. Destructura el objeto que ingresa como argumento.
// 3. Aplica spread operator sobre el 'array' recibido para generar la 'listaCompras'
// 4. Cambiar el 'if' - 'else' por un 'operador ternario'.

pasarAES6 = (objeto, array) => {
    var { nombre, apellido, edad } = objeto;
    var resultado = (objeto) ?
        nuevoObjeto = {
            nombre,
            apellido,
            edad,
            ciudad: "san salvador",
            pais: "argentina",
            listaCompras: [...array, 'pan', 'arroz', 'pasta']
        }
        : "non object";

    return resultado
}

// NO MODIFIQUES NADA DE AQUI ABAJO ↓↓↓↓↓↓↓↓↓ 
module.exports = {
    Persona,
    Empleado,
    pasarAES6
};