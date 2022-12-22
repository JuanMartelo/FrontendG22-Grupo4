import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = "http://localhost:5000/api/clientes/"

const CompMostrarClientes = () => {

    const [clientes, SetCliente] = useState([])
    useEffect(() => {
        getClientes ()        
    }, []);

    //funcion mostrar clientes
    const getClientes = async () => {
        const resul = await axios.get(URL)
        SetCliente(resul.data);
    }

    //funcion eliminar clientes
    const eliminarClientes = async (id) => {
        await axios.delete (`${URL}${id}`)
        getClientes()
        // eslint-disable-next-line
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to = '/clientes/agregar' className='btn btn-primary mt-2 mb-2'><i className="fa-sharp fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableThedBg'>
                            <tr>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Documento</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                            </tr>                        
                        </thead>
                        <tbody>
                            { clientes.map ((cliente, index) => (
                                <tr key = { index }>
                                    <td> {cliente.nombres}</td>
                                    <td> {cliente.apellidos}</td>
                                    <td> {cliente.documento}</td>
                                    <td> {cliente.correo}</td>
                                    <td> {cliente.telefono}</td>
                                    <td> {cliente.direccion}</td>
                                    <td>
                                        <Link to = {`/clientes/editar/${cliente._id}`} className = 'btn btn-info'><i className ="fa-solid fa-file-pen"></i></Link>
                                        <button onClick={ () => eliminarClientes(cliente._id)} className = 'btn btn-danger'><i className ="fa-solid fa-square-minus"></i></button>
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

export default CompMostrarClientes;
