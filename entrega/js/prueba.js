catalogo = []
class Zapatilla{
    constructor(id,marca, modelo, color, sexo, precio){
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.sexo = sexo
        this.precio = precio

    }
    agregarzapatilla(object){
        catalogo.push(object)
        

    }
}

const zapas1 = new Zapatilla(1, "Nike", "Vaporfly", "Verdes", "Hombre", 65000)
zapas1.agregarzapatilla(zapas1)
const zapas2 = new Zapatilla(2, "Adidas", "Adizero", "Blancas", "Mujer", 62000)
zapas2.agregarzapatilla(zapas2)
const zapas3 = new Zapatilla(3, "New Balance", "Echo", "Negras", "Hombre", 35000)
zapas3.agregarzapatilla(zapas3)
const zapas4 = new Zapatilla(4, "Saucony", "Endorphine", "Rojas", "Hombre", 75000)
zapas4.agregarzapatilla(zapas4)
const zapas5 = new Zapatilla(5, "Asics", "FlyPro", "Blancas", "Mujer", 45000)
zapas5.agregarzapatilla(zapas5)
const zapas6 = new Zapatilla(6, "Puma", "Voladoras", "Negras", "Hombre", 44000)
zapas6.agregarzapatilla(zapas6)
console.log(catalogo)

function agregarzapa(){
    marca = prompt("Ingrese la marca de la zapatilla")
    modelo =  prompt("Ingrese el modelo de la zapatilla")
    color =  prompt("Ingrese el color de la zapatilla")
    sexo =  prompt("Ingrese el sexo la zapatilla")
    precio =  parseInt(prompt("Ingrese el precio de la zapatilla"))
    zapatillanueva = new Zapatilla(catalogo.length+1, marca,modelo,color,sexo,precio)
    zapatillanueva.agregarzapatilla(zapatillanueva)
}
const carrito = []
function vercatalogo(){
    const list = []
    let num = 0
    for(let zapatilla of catalogo){
        num += 1
        let zapa = `${num}- ${zapatilla.marca} ${zapatilla.modelo} -- $${zapatilla.precio}\n`
        list.push(zapa)
        
    }
    let eleccion = parseInt(prompt(`${list.join("")}${catalogo.length+1}- Volver al menu principal \n Si le interesa un modelo, elija la opcion`))
    console.log(eleccion)
    if(eleccion == catalogo.length+1){
        menu()

    }
    let zapaencontrada =catalogo.find( x => x.id == eleccion)
    if (zapaencontrada != undefined){
        let comprar = prompt(`Zapatilla: ${zapaencontrada.marca} ${zapaencontrada.modelo} \nColor: ${zapaencontrada.color}\nSexo: ${zapaencontrada.sexo} \nPrecio: $${zapaencontrada.precio}\n Quieres agregar al carrito estas zapatillas?`)
        if(comprar.toLowerCase() == 'si'){
            // let elegido = ` Marca: ${zapaencontrada.marca} Modelo: ${zapaencontrada.modelo} Color: ${zapaencontrada.color} Sexo: ${zapaencontrada.sexo} --$${zapaencontrada.precio} \n`
            
            carrito.push(zapaencontrada)
            vercarrito()
            
            
        }else{
            menu()
        }
    }else{
        alert(`La opcion (${eleccion} no es valida, intentelo de nuevo)`)
        menu()
    }

}


const carritofinal = []
let total = 0
function vercarrito(){
    
    for(let zapa of carrito){
        carritofinal.push(`${zapa.id}- ${zapa.marca} ${zapa.modelo} -- $${zapa.precio}\n`)
        total += parseInt(zapa.precio)
        carrito.splice(zapa)

    }

    
    confirmar = parseInt(prompt(` Carrito: \n ${carritofinal.join("")}\n ${carritofinal.length+1}- Volver al menu  \n Quieres comprar los siguientes productos? \n10- Eliminar todos los productos\n 11- Finalizar compra`))
    switch(confirmar){
        case 10:
            alert('Porductos eliminados correctamente')
            carritofinal.splice(0,carritofinal.length)
            menu()
            break
        case 11:
            let confirmacion = prompt(`Su total es de $${total}. Quiere confirmar la compra?`)
            if(confirmacion.toLowerCase() == 'si'){
                alert("Gracias por su compra,vuelva pronto")
                total = 0
            }else{
                menu()
            }
            
            carritofinal.splice(0,carritofinal.length)
            break
        case carritofinal.length+1:
            menu()
            break
        default: 
            alert(`Ingrese una opción correcta`)
        
    }
        
    }

function buscarmarca(){
    let marca = prompt("Que marca quiere buscar?")
    let marcaencontrada = catalogo.find(
        (zapa)=> zapa.marca.toLowerCase() == marca.toLowerCase()
        )
    if(marcaencontrada == undefined){
        alert(`No hay ninguna zapatilla de la marca ${marca} en el catalogo`)
    }else{
        let decision = prompt(`Zapatilla: ${marcaencontrada.marca} ${marcaencontrada.modelo} \nColor: ${marcaencontrada.color}\nSexo: ${marcaencontrada.sexo} \nPrecio: $${marcaencontrada.precio}\n Quieres agregar esta zapatilla al carrito?`)
        if(decision.toLowerCase() == 'si'){
            // let elegido = ` Marca: ${zapaencontrada.marca} Modelo: ${zapaencontrada.modelo} Color: ${zapaencontrada.color} Sexo: ${zapaencontrada.sexo} --$${zapaencontrada.precio} \n`
            
            // carritofinal.push(`${marcaencontrada.id}- ${marcaencontrada.marca} ${marcaencontrada.modelo} -- $${marcaencontrada.precio}\n`)
            // vercarrito()
            carrito.push(marcaencontrada)
            vercarrito()
        }
    }
}

    
        
        
        

   



let exit = false
function menu(){

    let opcion = parseInt(prompt("1- Ver catalogo de zapatillas \n2- Agregar nuevas zapatillas \n3- Buscar zapatillas \n4- Ver Carrito/ Finalizar Compra  \n5- Salir del menu"))
    console.log(opcion)
    switch(opcion){
        case 1 :
            vercatalogo()
            break
        case 2 :
            agregarzapa()
            break
        case 3 :
            buscarmarca()
            break
        case 4 :
            vercarrito()
            break
        case 5:
            exit = true
            break
       
        
    

    }
}

while(exit != true){
    menu()
}

