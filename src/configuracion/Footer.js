import  React from "react";
import redes from '../componentes/Imagenes/redes.png'

const CompFooter =() => {
    return (
        
        <div className="card text-center">
        <div className="card-header">
            CLINICA VETERINARIA ANIMAL VET
        </div>
        <div className="card-footer text-muted">
            Horario de atencion: Lunes - Sabao 9:00 am a 6:00 pm
        </div>
        <div className="card-body">
            
            <p className="card-text">Diagonl 15 B # 104-46 casa 287 Compostela II</p>
           
            <img src={redes} className = "App-logo1" alt="logo" />

            <p className="card-text">e-mail: animalvetbogota@gmail.com Cel: 3114768615</p>
            
        </div>
        
        </div>
    
    )


}
export default CompFooter;
