import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = "http://localhost:5000/api/citas/"

const CompAgregarCitas = () => {

const [fecha, setFecha] = useState ('');
const [dia, setDia] = useState ('');
const [horario, setHorario] = useState ('');
const [nombrepropietario, setNombrepropietario] = useState ('');
const [nombremascota, setNombremascota] = useState ('');
const [servicio, setServicio] = useState ('');
const navigate = useNavigate();

// funcion guardar
const GuardarCitas = async (g) => {
    g.preventDefault()
    await axios.post(URL, {fecha:fecha, dia:dia, horario:horario, nombrepropietario:nombrepropietario,nombremascota:nombremascota, servicio:servicio })
    navigate('/');
}

return (
    <div>
        <h3 >Modulo AGENDAR CITAS </h3>
        <form onSubmit={GuardarCitas}>
            <div className ='mb -3'>
                <label className='form-label'>Fecha</label>
                <input value={fecha}onChange={(g) => setFecha(g.target.value)}
                type = 'text' className='form-control'/>
            </div>

            <div className ='mb -3'>
                <label className='form-label'>Dia</label>
                <input value={dia}onChange={(g) => setDia(g.target.value)}
                type = 'text' className='form-control'/>
            </div>

            <div className ='mb -3'>
                <label className='form-label'>Horario</label>
                <input value={horario}onChange={(g) => setHorario(g.target.value)}
                type = 'number' className='form-control'/>
            </div>

            <div className ='mb -3'>
                <label className='form-label'>Nombre Propietario</label>
                <input value={nombrepropietario}onChange={(g) => setNombrepropietario(g.target.value)}
                type = 'text' className='form-control'/>
            </div>

            <div className ='mb -3'>
                <label className='form-label'>Nombre Mascota</label>
                <input value={nombremascota}onChange={(g) => setNombremascota(g.target.value)}
                type = 'text' className='form-control'/>
            </div>

            <div className ='mb -3'>
                <label className='form-label'>Servicio</label>
                <input value={servicio}onChange={ (g) => setServicio(g.target.value)}
                type = 'text' className='form-control'/>
            </div>

            <button type ='submit' className ='btn btn-primary'><i class ="fa-solid fa-floppy-disk"></i></button>


        </form>
    </div>
)

}

export default CompAgregarCitas;