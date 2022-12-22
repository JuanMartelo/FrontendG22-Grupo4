import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = "http://localhost:5000/api/mascotas/"

const CompMostrarMascotas = () => {

    const [mascotas, SetMascota] = useState([])
    useEffect(() => {
        getMascotas ()        
    }, []);

    //funcion mostrar mascotas
    const getMascotas = async () => {
        const resul = await axios.get(URL)
        SetMascota(resul.data);
    }

    //funcion eliminar mascota
    const eliminarMascotas = async (id) => {
        await axios.delete (`${URL}${id}`)
        getMascotas()
        // eslint-disable-next-line
    }
    return (
        <div className='container'>
            <div className='column'>
                <div className='col'>
                    <Link to = '/agregar' className = 'btn btn-success mt-2 mb-2'><i className = "fa-sharp fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableThedBg'>
                            <tr>
                                <th>Nombre</th>
                                <th>Sexo</th>
                                <th>Raza</th>
                                <th>Especie</th>
                                <th>Peso</th>
                                <th>Edad</th>
                                <th>Historia Clinica</th>
                                <th>Observaciones</th>
                            </tr>                        
                        </thead>
                        <tbody>
                            { mascotas.map ((mascota, index) => (
                                <tr key = { index }>
                                    <td> {mascota.nombre}</td>
                                    <td> {mascota.sexo}</td>
                                    <td> {mascota.raza}</td>
                                    <td> {mascota.especie}</td>
                                    <td> {mascota.peso}</td>
                                    <td> {mascota.edad}</td>
                                    <td> {mascota.historiaclinica}</td>
                                    <td> {mascota.Observacion}</td>
                                    <td>
                                        <Link to = {`/mascotas/editar/${mascota._id}`} className = 'btn btn-info'><i className = "fa-solid fa-file-pen"></i></Link>
                                        <button onClick={ () => eliminarMascotas(mascota._id)} className = 'btn btn-danger'><i className = "fa-solid fa-square-minus"></i></button>
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

export default CompMostrarMascotas;
