import React, { Component } from "react";
import ListadoElemento from "./ListadoElemento";

const arregloContactos = [

    {
        id: 1,
        nombre: "Instrumental",
        Autor:"De James Rhodes ",
        Descripcion: "Esa es quizá la mejor definición de Instrumental, la autobiografía del pianista James Rhodes, que arranca con los terroríficos abusos sexuales que sufrió en su infancia para llevarnos por un recorrido vital de música, enfermedad mental, éxito y fracaso, con un lenguaje directo y sencillo que hace que lleguemos al final casi sin darnos cuenta, la experiencia será perfecta."
    },

    {
        id: 2,
        nombre: "El silencio de la ciudad blanca",
        Autor:" Eva García Sáenz ", 
        Descripcion: "La novela negra alcanza otro nivel con la trilogía de la ciudad blanca, de Eva García Sáenz de Urturi, cuyo primer volumen, El silencio de la ciudad blanca ha sido un éxito arrollador de ventas y crítica. La trama nos trasladará a Álava, a movernos entre leyendas, arqueología, la psicología criminal, el pasado y el presente. "
    },

    {
        id: 3,
        nombre: "Yo antes de ti",
        Autor:"Jojo Moyes ",
        Descripcion: "Yo antes de ti ha sido uno de los grandes best sellers de los últimos años, gracias a una historia capaz de arrancarnos sonrisas y lágrimas a partes iguales. El debate sobre la eutanasia, sobre las decisiones personales y un cierto espíritu carpe diem subyacen tras la historia de amistad y amor entre Will Traynor, un hombre de éxito que ha quedado tetrapléjico en un accidente, y Louisa Clark, su cuidadora."
    },

    {
        id: 4,
        nombre: "Origen",
        Autor:"Dan Brown",
        Descripcion: "De Dan Brown se pueden decir muchas cosas, pero nadie se atreve a negar que sus novelas enganchan. Mucho. En Origen volvemos a encontrarnos con Robert Langdon, el profesor de simbología a quien conocimos en El código da Vinci, y con una trama de intriga que, en esta ocasión, se desarrolla en España."
    },

    {
        id: 5,
        nombre: "Un debut en la vida",
        Autor:"Anita Brookner",
        Descripcion: "Divertida y triste al mismo tiempo. Eso es lo que dicen quienes han leído Un debut en la vida, lo último de Anita Brookner, una autora que es garantía de calidad. Una mujer cercana a los cuarenta se da cuenta de que su vida ha sido, en cierto modo, una mentira, por habérsela pasado obsesionada por los personajes de las novelas de Balzac, que ha acabado por confundir con la vida real"
    },

    {
        id: 6,
        nombre: "El legado de los espías,",
        Autor:"John le Carré",
        Descripcion: "Recién publicada, El legado de los espías es lo último de John le Carré, apuesta segura cuando nos apetece sumergirnos en una novela de espionaje. En este caso, viviremos una historia a medio camino entre el presente y el pasado, pues todo gira en torno al pasado como espía en la Guerra Fría del protagonista. "
    },

    {
        id: 7,
        nombre: "Te espero en la última esquina del otoño",
        Autor:"Casilda Sánchez Varela",
        Descripcion: "El amor es el tema de fondo de esta novela, no solo por la historia entre sus protagonistas, sino también por la concepción del mismo que tienen y sobre la que reflexionan. "
    },

    {
        id: 8,
        nombre: "El método 15/33",
        Autor:"Shannon Kirk",
        Descripcion: "Sorprendente y llena de vida. Así es El método 15/33 y así es su protagonista, que da un giro de ciento ochenta grados a nuestra concepción de una víctima. En este caso, la protagonista es una adolescente superdotada víctima de un secuestro, que utiliza sus altas capacidades para planificar su huida... y su venganza."
    },

    {
        id: 9,
        nombre: "Tiene que ser aquí",
        Autor:"Maggie O'Farrell ",
        Descripcion: "¿Cómo leer una historia de pareja más o menos corriente y que nos parezca que estamos ante una obra extraordinaria? Eso es lo que nos preguntamos cuando acabamos de leer Tiene que ser aquí, cuya trama gira alrededor de Daniel, neoyorquino con dos hijos en California, y Claudette, actriz retirada, que viven tranquilos en la campiña irlandesa hasta que una persona del pasado de él se cruza "
    },

    {
        id: 10,
        nombre: "Berta Isla",
        Autor:"Javier Marías",
        Descripcion: "Aunque alguna vez no hemos coincidido con él en su forma de pensar, no se puede negar que Javier Marías escribe bien. Muy bien. Berta Isla es su última novela, convertida en un arrollador éxito de ventas y crítica. "
    },

]

class Contenedor extends Component {

    constructor() {
        super()
        this.state = {
            ListadoContactos: arregloContactos
        }

    }

    escribiendo = (evento) => {
        // console.log("escribiendo",event.target.value)
        const texto = evento.target.value;
        this.filtrar(texto)

    }

    filtrar = (texto) => {
        const listadofiltrado = [];

        for (let i = 0; i < arregloContactos.length; i++) {
            const contacto = arregloContactos[i];
            if (contacto.nombre.startsWith(texto)) {
                listadofiltrado.push(contacto);
            }
            this.setState({ ListadoContactos: listadofiltrado })
        }
    }
    render() {
        const { ListadoContactos } = this.state;

        return ( 
        < div  >  
        <br/>
        <div className="titulo"> "La lectura es una forma de arte y toda persona puede ser artista"</div>
        <br/>
        <div className="subtitulo1"> Bucar Libro</div>

         < div >
            < div > 
            < input onChange = { this.escribiendo } /></div >
            <  ListadoElemento contactos = { ListadoContactos } />
            </div> 
            </div>
        )
    }


}

export default Contenedor