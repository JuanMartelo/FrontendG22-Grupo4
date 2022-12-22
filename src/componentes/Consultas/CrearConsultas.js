import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = "http://localhost:5000/api/consultas/"

const CompAgregarConsultas = () => {

const [vacuna, setVacuna] = useState ('');
const [desparacitante, setDesparacitante] = useState ('');
const [antipulgas, setAntipulgas] = useState ('');
const [enfcronica, setEnfcronica] = useState ('');
const [proprefiere, setProprefiere] = useState ('');
const [amnesis, setAmnesis] = useState ('');
const navigate = useNavigate();

// funcion guardar
const GuardarConsultas = async (g) => {
    g.preventDefault()
    await axios.post(URL, {vacuna:vacuna, desparacitante:desparacitante, antipulgas:antipulgas, enfcronica:enfcronica,proprefiere:proprefiere, amnesis:amnesis })
    navigate('/');
}

return (
    <div>
        <h3 >Modulo AGENDAR CONSULTAS </h3>
        <form onSubmit={GuardarConsultas}>
            <div className ='mb -3'>
                <label className='form-label'>Vacuna</label>
                <input value={vacuna}onChange={(g) => setVacuna(g.target.value)}
                type = 'text' className='form-control'/>
            </div>

            <div className ='mb -3'>
                <label className='form-label'>Desparacitante</label>
                <input value={desparacitante}onChange={(g) => setDesparacitante(g.target.value)}
                type = 'text' className='form-control'/>
            </div>

            <div className ='mb -3'>
                <label className='form-label'>Antipulgas</label>
                <input value={antipulgas}onChange={(g) => setAntipulgas(g.target.value)}
                type = 'number' className='form-control'/>
            </div>

            <div className ='mb -3'>
                <label className='form-label'>Enfermedad Cronica</label>
                <input value={enfcronica}onChange={(g) => setEnfcronica(g.target.value)}
                type = 'text' className='form-control'/>
            </div>

            <div className ='mb -3'>
                <label className='form-label'>Propietario Refiere</label>
                <input value={proprefiere}onChange={(g) => setProprefiere(g.target.value)}
                type = 'text' className='form-control'/>
            </div>

            <div className ='mb -3'>
                <label className='form-label'>Amnesis</label>
                <input value={amnesis}onChange={ (g) => setAmnesis(g.target.value)}
                type = 'text' className='form-control'/>
            </div>

            <button type ='submit' className ='btn btn-primary'><i class ="fa-solid fa-floppy-disk"></i></button>


        </form>
    </div>
)

}

export default CompAgregarConsultas;