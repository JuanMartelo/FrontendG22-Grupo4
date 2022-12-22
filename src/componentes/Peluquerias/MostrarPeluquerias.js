import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = "http://localhost:5000/api/peluquerias/"

const CompMostrarPeluquerias = () => {

    const [peluquerias, SetPeluqueria] = useState([])
    useEffect(() => {
        getPeluquerias ()        
    }, []);

    //funcion mostrar peluquerias
    const getPeluquerias = async () => {
        const resul = await axios.get(URL)
        SetPeluqueria(resul.data);
    }

    //funcion eliminar peluquerias
    const eliminarPeluquerias = async (id) => {
        await axios.delete (`${URL}${id}`)
        getPeluquerias()
        // eslint-disable-next-line
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to = '/peluquerias/agregar' className='btn btn-success mt-2 mb-2'><i className="fa-sharp fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableThedBg'>
                            <tr>
                                <th>Baño</th>
                                <th>Corte</th>
                                <th>Patologias</th>
                                <th>Telefono</th>
                                <th>Responsable</th>
                            </tr>                        
                        </thead>
                        <tbody>
                            { peluquerias.map ((peluqueria, index) => (
                                <tr key = { index }>
                                    <td> {peluqueria.baño}</td>
                                    <td> {peluqueria.corte}</td>
                                    <td> {peluqueria.patologias}</td>
                                    <td> {peluqueria.telefono}</td>
                                    <td> {peluqueria.responsable}</td>
                                    <td>
                                        <Link to = {`/peluquerias/editar/${peluqueria._id}`} className = 'btn btn-info'><i className = "fa-solid fa-address-card"></i></Link>
                                        <button onClick={ () => eliminarPeluquerias(peluqueria._id)} className = 'btn btn-danger'><i className = "fa-solid fa-eraser"></i></button>
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

export default CompMostrarPeluquerias;
