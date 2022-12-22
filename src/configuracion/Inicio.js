import React from "react"
import vacunas from '../componentes/Imagenes/vacunas.png';
import citas from '../componentes/Imagenes/citas.png';
import baño from '../componentes/Imagenes/baño.png';

const CompInicio = () => {
    return (
        <div className="card text-center">
            <div className="card-body">
                            
                <img src={vacunas} className = "App-logo3" alt="logo" />
                <img src={citas} className = "App-logo2" alt="logo" />
                <img src={baño} className = "App-logo4" alt="logo" />
                
            </div>
       
        </div>

    )

}
export default CompInicio;