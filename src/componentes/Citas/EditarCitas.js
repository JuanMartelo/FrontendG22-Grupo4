import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = "http://localhost:5000/api/citas/"

const CompEditarCitas = () => {

    const [fecha, setFecha] = useState ('');
    const [dia, setDia] = useState ('');
    const [horario, setHorario] = useState ('');
    const [nombrepropietario, setNombrepropietario] = useState ('');
    const [nombremascota, setNombremascota] = useState ('');
    const [servicio, setServicio] = useState ('');
    const navigate = useNavigate();
    const {id} =useParams();


    // funcion Actualizar
 
    const ActualizarCitas = async (g) => {
        g.preventDefault()
        await axios.post(URL, {fecha:fecha, dia:dia, horario:horario, nombrepropietario:nombrepropietario,nombremascota:nombremascota, servicio:servicio })
        navigate('/citas');
    }

    useEffect (() => {
        getCitasById()        
        // eslint-disable-next-line
    }, [])
 
    const getCitasById = async () => {
        const res = await axios.get(`${URL}${id}`)
            setFecha(res.data.fecha)
            setDia(res.data.dia)
            setHorario(res.data.horario)
            setNombrepropietario(res.data.nombrepropietario)
            setNombremascota(res.data.nombremascota)
            setServicio(res.data.servicio)
   
    }
    return (
        <div>
            <h3 >Modulo ACTUALIZAR CITAS </h3>
            <form onSubmit={ActualizarCitas}>
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

export default CompEditarCitas;