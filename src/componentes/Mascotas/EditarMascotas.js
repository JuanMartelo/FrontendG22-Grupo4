import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = "http://localhost:5000/api/mascotas/"

const CompEditarMascotas = () => {

    const [nombre, setNombre] = useState ('');
    const [sexo,setSexo] =useState ('');
    const [raza, setRaza] = useState ('');
    const [especie, setEspecie] = useState ('');
    const [peso, setPeso] = useState ('');
    const [edad, setEdad] = useState ('');
    const [historiaclinica, setHistoriaclinica] = useState ('');
    const [observacones, setObsesrvaciones] = useState ('');
    const navigate = useNavigate();
    const {id} =useParams();


    // funcion Actualizar
 
    const ActualizarMascotas = async (g) => {
        g.preventDefault()
        await axios.post(URL, {nombre:nombre, sexo:sexo, raza:raza, especie:especie, peso:peso,edad:edad, historiaclinica:historiaclinica, observacones:observacones })
        navigate('/mascotas');
    }

    useEffect (() => {
        getMascotasById()        
        // eslint-disable-next-line
    }, [])
 
    const getMascotasById = async () => {
        const res = await axios.get(`${URL}${id}`)
            setNombre(res.data.nombre)
            setSexo(res.data.sexo)
            setRaza(res.data.raza)
            setEspecie(res.data.especie)
            setPeso(res.data.peso)
            setEdad(res.data.edad)
   
    }

    return (
        <div>
            <h3 >Modulo Agregar Mascotas </h3>
            <form onSubmit={ActualizarMascotas}>
                <div className ='mb -3'>
                    <label className='form-label'>Nombre</label>
                    <input value={nombre}onChange={(g) => setNombre(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Sexo</label>
                    <input value={sexo}onChange={(g) => setSexo(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Raza</label>
                    <input value={raza}onChange={(g) => setRaza(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Especie</label>
                    <input value={especie}onChange={(g) => setEspecie(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Peso</label>
                    <input value={peso}onChange={(g) => setPeso(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Edad</label>
                    <input value={edad}onChange={(g) => setEdad(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Historia Clinica</label>
                    <input value={historiaclinica}onChange={ (g) => setHistoriaclinica(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Observaciones</label>
                    <input value={observacones}onChange={ (g) => setObsesrvaciones(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <button type ='submit' className ='btn btn-primary'><i class ="fa-solid fa-floppy-disk"></i></button>
    
    
            </form>
        </div>
    )
    
}

export default CompEditarMascotas;
