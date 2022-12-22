import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = "http://localhost:5000/api/citas/"

const CompMostrarCitas = () => {

    const [citas, SetCita] = useState([])
    useEffect(() => {
        getCitas ()        
    }, []);

    //funcion mostrar citas
    const getCitas = async () => {
        const resul = await axios.get(URL)
        SetCita(resul.data);
    }

    //funcion eliminar citas
    const eliminarCitas = async (id) => {
        await axios.delete (`${URL}${id}`)
        getCitas()
        // eslint-disable-next-line
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to = '/citas/agregar' className='btn btn-success mt-2 mb-2'><i className="fa-sharp fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableThedBg'>
                            <tr>
                                <th>Fecha</th>
                                <th>Dia</th>
                                <th>Horario</th>
                                <th>Nombre Propietario</th>
                                <th>Nombre Mascota</th>
                                <th>Servicio</th>
                            </tr>                        
                        </thead>
                        <tbody>
                            { citas.map ((cita, index) => (
                                <tr key = { index }>
                                    <td> {cita.fecha}</td>
                                    <td> {cita.dia}</td>
                                    <td> {cita.horario}</td>
                                    <td> {cita.nombrepropietario}</td>
                                    <td> {cita.nombremascota}</td>
                                    <td> {cita.servicio}</td>
                                    <td>
                                        <Link to = {`/citas/editar/${cita._id}`} className = 'btn btn-info'><i className = "fa-solid fa-address-card"></i></Link>
                                        <button onClick={ () => eliminarCitas(cita._id)} className = 'btn btn-danger'><i className = "fa-solid fa-eraser"></i></button>
                                    </td>
                                </tr>
                            ))}  
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompMostrarCitas;
