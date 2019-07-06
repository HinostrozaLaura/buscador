import React, {Component} from "react";

class ListadoElemento extends Component {

render(){
    const{contactos}=this.props;
    return(
    <div>
        <div className="subtitulo">...</div>
        <div className="descrpcion">
            {contactos.map((item)=>{
             return(
                 <div class key={item.id}>
                      <hr/>
                      <div className="Ntitulo">
                     {item.nombre}
                     </div>
                     <div className="autor">
                        {item.Autor} :
                     </div>
                     
                     <br/>
                     {item.Descripcion}
                    
                 </div>
             )

             
            })}
        </div>
    </div>
    )
}
}
export default ListadoElemento