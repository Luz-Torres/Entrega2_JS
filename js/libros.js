/*-----------------
CREANDO ARRAY CON 6 LIBROS
------------------*/
const productos = [
    {
        id :1,
        nombre : "El señor de los anillos: La comunidad del anillo",
        autor :"J.R.R. Tolkien",
        publicacion: 1954,
        editorial: "Minotauro",
        precio:8600,
        stock:7,
    },
    {
        id :2,
        nombre : "El señor de los anillos: Las dos torres",
        autor :"J.R.R. Tolkien",
        publicacion: 1954,
        editorial: "Minotauro",
        precio:8500,
        stock:5,
    },
    {
        id :3,
        nombre : "El señor de los anillos: El retorno del rey",
        autor :"J.R.R. Tolkien",
        publicacion: 1955,
        editorial: "Minotauro",
        precio:8100,
        stock:6,
    },
    {
        id :4,
        nombre : "El Silmarillon",
        autor :"J.R.R. Tolkien",
        publicacion: 1977,
        editorial: "Minotauro",
        precio:8000,
        stock:2,
    },
    {
        id :5,
        nombre : "El Hobbit",
        autor :"J.R.R. Tolkien",
        publicacion: 1937,
        editorial: "Minotauro",
        precio:9000,
        stock:3,
    },
    {
        id :6,
        nombre : "Dune",
        autor :"Frank Herbert",
        publicacion: 1965,
        editorial: "De Bolsillo",
        precio:9000,
        stock:5,
    }
];

/* CREACION DE FUNCIONES */
function Bienvenidas(respuesta) {

    switch (respuesta) {
        case 0:
            alert("Bienvenido al sistema de stock");
            break;
        case 1:
            alert("Bienvenido a nuestra tienda");
        default:
            alert("Hasta luego");
            break;
    }
}
function Recordatorio(){
    alert("Ingresar en consola presionar f12");
}

function MostrarCatalogo(respuesta) {
    if (respuesta == 0) {
        productos.forEach( producto => {
            console.log("------------------------------");
            console.log( "NOMBRE:" + producto.nombre +","+"  STOCK: " + producto.stock);
        });
    } else {
        productos.forEach( producto => {
            console.log("------------------------------");
            console.log( "NOMBRE:    " + producto.nombre +" \nPRECIO:    " + producto.precio +" \n SELECCIONAR NRO:  " + producto.id);
        });
    }
}

function ValidarCompra(compra) {
    while (compra > productos.length || compra < 1) {
        compra = parseInt(prompt("Ingrese un número válido de 1 a ", productos.length, ":"));
    }
    return compra;
}

function ValidarCantidad(cantidad) {
    if (isNaN(cantidad) && cantidad < 0) {
        cantidad = parseInt(prompt("Ingrese un número mayor a cero"));
        return cantidad;
    } else {
        return cantidad;
    }
}


function Comprar(id, cantidad) {
    const producto = productos.find(producto => producto.id === id);
    const precio_total = producto.precio * cantidad;
    return precio_total;
};

/* INICIANDO LA COMPRA */
function Libreria() {
    let respuesta = parseInt(prompt("Ingresar \n 0= Administrar tienda \n 1= Comprar  \n 2=Salir..."));
    Bienvenidas(respuesta);

    if (respuesta == 0) {
        alert("Por el momento esto es lo que tenemos")
        Recordatorio();

        MostrarCatalogo(respuesta);

        let agregados = parseInt(prompt("¿Cuántos libros sumaremos?"));
        ValidarCantidad(agregados);
        
        for (let i = 0; i < agregados; i++) {
            let id = productos.length;
            let nombre = prompt("Nombre: ");
            let autor = prompt("Autor: ");
            let editorial = prompt("Editorial: ");
            let precio = parseInt(prompt("Precio:"));
            ValidarCantidad(precio);
            let stock = parseInt(prompt("Stock: "));
            ValidarCantidad(stock);
            productos.push({ id,nombre, autor, editorial, precio, stock});
        }

        console.log(productos);


    } else if (respuesta == 1) {
        Bienvenidas(respuesta);
        const usuario = prompt("Ingrese su nombre:");

        Recordatorio();
        MostrarCatalogo(respuesta);

        let compra = parseInt(prompt("¿Qué libro desea comprar?"));
        ValidarCompra(compra);

        let cantidad =parseInt(prompt("¿Cuantas unidades desea obtener?"));
        ValidarCantidad(cantidad);

        let precio_total = Comprar(compra, cantidad);
        alert("El pedido para: "+ usuario +" tiene un total de $ "+ precio_total);

    } else {
        Bienvenidas(respuesta);
    }
}

/* inicio de programa */
Libreria();