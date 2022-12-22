import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = "http://localhost:5000/api/consultas/"

const CompMostrarConsultas = () => {

    const [consultas, SetConsulta] = useState([])
    useEffect(() => {
        getConsultas ()        
    }, []);

    //funcion mostrar consultas
    const getConsultas = async () => {
        const resul = await axios.get(URL)
        SetConsulta(resul.data);
    }

    //funcion eliminar consultas
    const eliminarConsultas = async (id) => {
        await axios.delete (`${URL}${id}`)
        getConsultas()
        // eslint-disable-next-line
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to = '/consultas/agregar' className='btn btn-success mt-2 mb-2'><i className="fa-sharp fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableThedBg'>
                            <tr>
                                <th>Vacuna</th>
                                <th>Desparacitante</th>
                                <th>Antipulgas</th>
                                <th>Enfcronica</th>
                                <th>Proprefiere</th>
                                <th>Amnesis</th>
                            </tr>                        
                        </thead>
                        <tbody>
                            { consultas.map ((consulta, index) => (
                                <tr key = { index }>
                                    <td> {consulta.vacuna}</td>
                                    <td> {consulta.desparacitante}</td>
                                    <td> {consulta.antipulgas}</td>
                                    <td> {consulta.enfcronica}</td>
                                    <td> {consulta.proprefiere}</td>
                                    <td> {consulta.amnesis}</td>
                                    <td>
                                        <Link to = {`/consultas/editar/${consulta._id}`} className = 'btn btn-info'><i className = "fa-solid fa-address-card"></i></Link>
                                        <button onClick={ () => eliminarConsultas(consulta._id)} className = 'btn btn-danger'><i className = "fa-solid fa-eraser"></i></button>
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

export default CompMostrarConsultas;
