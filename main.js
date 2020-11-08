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

class Inventario{
    constructor(){
        this.inicio = null
    }

    agregar(producto){

        if (this.inicio == null){
            this.inicio = producto
        }

        else{
            aux = this.inicio

            while (aux != null){
                if (producto.codigo == aux.codigo){
                    return false;
                }

                aux = aux.siguiente;
            }

            aux = this.inicio

            while(aux.siguiente != null){
                aux = aux.siguiente
            }

            aux.siguiente = producto
        }
    }

    agregarInicio(producto){

        aux = this.inicio

        while(aux != null){
            if (aux.codigo == producto.codigo){
                return false
            }

            aux = aux.siguiente
        }

        producto.siguiente = this.inicio

        this.inicio = producto
    }

    borrarInicio(){

        aux = this.inicio

        this.inicio = this.inicio.siguiente

        aux.siguiente = null

        return aux
    }

    borrarCodigo(codigo){

        if(this.inicio == null){
            return null
        }
        else if(this.inicio.codigo == codigo){
            return this.borrarInicio();
        }
        else{
            aux = this.inicio

            while (aux.siguiente.codigo != codigo && aux.siguiente != null){
                aux= aux.siguiente
            }
            if (aux.siguiente != null){
                let temp = aux.siguiente

                aux.siguiente = temp.siguiente

                temp.siguiente = null

                return temp
            }
            else{
                return null
            }
        }
    }

    buscarCodigo(codigo){
        if(this.inicio == null){
            return null
        }
        else if(this.inicio.codigo == codigo){
            return this.inicio
        }
        else{
            aux = this.inicio

            while(aux.codigo != codigo && aux.siguiente != null){
                aux = aux.siguiente
            }
            if(aux.siguiente == null && aux.codigo != codigo){
                return null
            }
            else{
                return aux
            }
            
        }
    }

    listar(){

        crearTabla()
        let valMer = 0

        let tabla = document.querySelector("#tabla")

        let merc = document.querySelector("#merc")

        if (this.inicio == null){
            div.textContent=""

            div.insertAdjacentHTML("beforeend","No hay productos")

            return false
        }

        aux = this.inicio

        while (aux != null){
            let ren = tabla.insertRow(-1)
            let col = ren.insertCell(0)
            let col1 = ren.insertCell(1)
            let col2 = ren.insertCell(2)
            let col3 = ren.insertCell(3)
            let col4 = ren.insertCell(4)

            col.textContent = aux.codigo
            col1.textContent = aux.nombre
            col2.textContent = aux.descripcion
            col3.textContent = aux.cantidad
            col4.textContent = aux.costo
            valMer += (parseInt(aux.cantidad) * parseInt(aux.costo))
            aux = aux.siguiente
        }
        merc.textContent = "El valor de la mercancia es: $"+valMer
    }

    listarInverso(){
        crearTabla()
        let valMer = 0

        let tabla = document.querySelector("#tabla")

        let merc = document.querySelector("#merc")
        
        if (this.inicio == null){
            div.textContent=""

            div.insertAdjacentHTML("beforeend","No hay productos")

            return false;
        }
        aux = this.inicio

        while (aux != null){
            let ren = tabla.insertRow(0)
            let col = ren.insertCell(0)
            let col1 = ren.insertCell(1)
            let col2 = ren.insertCell(2)
            let col3 = ren.insertCell(3)
            let col4 = ren.insertCell(4)

            col.textContent = aux.codigo
            col1.textContent = aux.nombre
            col2.textContent = aux.desc
            col3.textContent = aux.cantidad
            col4.textContent = aux.costo
            valMer += (parseInt(aux.cantidad) * parseInt(aux.costo))
            aux = aux.siguiente
        }
        merc.textContent = "El valor de la mercancia es: $"+valMer
    }
    
    agregarPos(producto,posicion){
        if(this.inicio == null){
            return false
        }
        aux = this.inicio

        while (aux != null){
            if (producto.codigo == aux.codigo){
                return false
            }
            aux = aux.siguiente
        }

        aux = this.inicio

        let i = 1

        while(i < posicion-1 && aux != null){
            aux = aux.siguiente
            i++
        }
        if(aux == null){
            return false
        }

        let temp = aux.siguiente

        aux.siguiente = producto

        aux.siguiente.siguiente = temp
    }   
}