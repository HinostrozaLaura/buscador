import React,{Component} from "react";
import ListadoElemento from "./ListadoElemento";

const arregloContactos = [

   {id:1, nombre:"julia", apellido:"cordova",edad:23,telefono:"993521110",pais:"Peru"},
    {id:2, nombre:"Daniel", apellido:"vargas",edad:20,telefono:"992013010",pais:"Chile"},
    {id:3, nombre:"Vanessa", apellido:"nuñez",edad:22,telefono:"936526520",pais:"Argentina"},
    {id:4, nombre:"Miguel", apellido:"calderon",edad:15,telefono:"995998960",pais:"Brasil"},
    {id:5, nombre:"Jorge", apellido:"castro",edad:14,telefono:"912563052",pais:"Bolivia"},
    {id:6, nombre:"Carlos", apellido:"estrada",edad:30,telefono:"99099817",pais:"Ecuador"},
    {id:7, nombre:"Alysson", apellido:"rojas",edad:35,telefono:"975334253",pais:"Colombia"},
    {id:8, nombre:"antoni", apellido:"yauri",edad:40,telefono:"985342169",pais:"Puerto Rico"},
    {id:9, nombre:"Maria Fernanda", apellido:"rebaza",edad:42,telefono:"936528124",pais:"Madrid"},
    {id:10, nombre:"Juan Carlos", apellido:"marin",edad:50,telefono:"936556685",pais:"Mexico"},

]

class Contenedor extends Component {
   
    constructor(){
        super()
        this.state={
            ListadoContactos:arregloContactos
        }
        
    }
   
    escribiendo = (evento)=>{
       // console.log("escribiendo",event.target.value)
        const texto = evento.target.value;
        this.filtrar(texto)

    }

    filtrar = (texto)=>{
        const listadofiltrado = [];
     
        for (let i=0; i < arregloContactos.length; i++){
            const contacto = arregloContactos[i];
            if(contacto.nombre.startsWith(texto)){
                listadofiltrado.push(contacto);
            }
this.setState({ListadoContactos:listadofiltrado})
        }
    }
    render(){
        const{ListadoContactos} = this.state;

        return(
            <div>
             Buscador Web
             <div>
                 <div><input onChange={this.escribiendo} /></div>
                <ListadoElemento contactos={ListadoContactos} />
             </div>
           </div>
        )
    } 

    
        }
    
export default Contenedor