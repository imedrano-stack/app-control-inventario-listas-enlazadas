// VARIABLES BOTONES

var btnAgregar = document.querySelector('#agregar')
var btnBorrar = document.querySelector('#borrar')
var btnBuscar = document.querySelector('#buscar')
var btnListar = document.querySelector('#listar')
var btnListarInverso = document.querySelector('#listarInverso')
var btnAgregarInicio = document.querySelector("#agregarInicio")
var btnBorrarInicio = document.querySelector("#borrarInicio")

// VARIABLES DE LAS CAJAS INPUT

var codigo = document.querySelector('#codigo')
var nombre = document.querySelector('#nombre')
var descripcion = document.querySelector('#descripcion')
var cantidad =document.querySelector('#cantidad')
var costo = document.querySelector('#costo')
var posicion = document.querySelector('#posicion')

//VARIABLE DIV DE RESULTADO

var div = document.querySelector('#resultado')

//VARIABLES GUARDADO DE DATOS

var aux = null

class Producto{
    constructor(codigo, nombre, descripcion, cantidad, costo, posicion){
        this.codigo = codigo
        this.nombre = nombre
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
        this.posicion = posicion
        this.siguiente = null
    }
}

