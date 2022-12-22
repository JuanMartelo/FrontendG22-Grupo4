import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = "http://localhost:5000/api/clientes/"

const CompEditarClientes = () => {

    const [nombres, setNombres] = useState ('');
    const [apellidos, setApellidos] = useState ('');
    const [documento, setDocumento] = useState ('');
    const [correo, setCorreo] = useState ('');
    const [telefono, setTelefono] = useState ('');
    const [direccion, setDireccion] = useState ('');
    const navigate = useNavigate();
    const {id} =useParams();


    // funcion Actualizar
 
    const ActualizarClientes = async (g) => {
        g.preventDefault()
        await axios.post(URL, {nombres:nombres, apellidos:apellidos, documento:documento, correo:correo,telefono:telefono, direccion:direccion })
        navigate('/clientes');
    }

    useEffect (() => {
        getClientesById()        
        // eslint-disable-next-line
    }, [])
 
    const getClientesById = async () => {
        const res = await axios.get(`${URL}${id}`)
            setNombres(res.data.nombres)
            setApellidos(res.data.apellidos)
            setDocumento(res.data.documento)
            setCorreo(res.data.correo)
            setTelefono(res.data.telefono)
            setDireccion(res.data.direccion)
   
    }
    return (
        <div>
            <h3 >Modulo Agregar Clientes </h3>
            <form onSubmit={ActualizarClientes}>
                <div className ='mb -3'>
                    <label className='form-label'>Nombres</label>
                    <input value={nombres}onChange={(g) => setNombres(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Apellidos</label>
                    <input value={apellidos}onChange={(g) => setApellidos(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Documento</label>
                    <input value={documento}onChange={(g) => setDocumento(g.target.value)}
                    type = 'number' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Correo</label>
                    <input value={correo}onChange={(g) => setCorreo(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Telefono</label>
                    <input value={telefono}onChange={(g) => setTelefono(g.target.value)}
                    type = 'number' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Direccion</label>
                    <input value={direccion}onChange={ (g) => setDireccion(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <button type ='submit' className ='btn btn-primary'><i class ="fa-solid fa-floppy-disk"></i></button>
    
    
            </form>
        </div>
    )

}

export default CompEditarClientes;
