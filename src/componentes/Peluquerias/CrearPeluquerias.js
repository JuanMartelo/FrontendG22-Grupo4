import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = "http://localhost:5000/api/peluquerias/"

const CompEditarPeluquerias = () => {

    const [baño, setBaño] = useState ('');
    const [corte, setCorte] = useState ('');
    const [patologias, setPatologias] = useState ('');
    const [telefono, setTelefono] = useState ('');
    const [responsable, setResponsable] = useState ('');
    const navigate = useNavigate();
    const {id} =useParams();


    // funcion Actualizar
 
    const ActualizarPeluquerias = async (g) => {
        g.preventDefault()
        await axios.post(URL, {baño:baño, corte:corte, patologias:patologias, telefono:telefono,responsable:responsable })
        navigate('/peluquerias');
    }

    useEffect (() => {
        getPeluqueriasById()        
        // eslint-disable-next-line
    }, [])
 
    const getPeluqueriasById = async () => {
        const res = await axios.get(`${URL}${id}`)
            setBaño(res.data.baño)
            setCorte(res.data.corte)
            setPatologias(res.data.patologias)
            setTelefono(res.data.telefono)
            setResponsable(res.data.responsable)
   
    }
    return (
        <div>
            <h3 >Modulo ACTUALIZAR CITAS </h3>
            <form onSubmit={ActualizarPeluquerias}>
                <div className ='mb -3'>
                    <label className='form-label'>Baño</label>
                    <input value={baño}onChange={(g) => setBaño(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>

                <div className ='mb -3'>
                    <label className='form-label'>Corte</label>
                    <input value={corte}onChange={(g) => setCorte(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>

                <div className ='mb -3'>
                    <label className='form-label'>Patologias</label>
                    <input value={patologias}onChange={(g) => setPatologias(g.target.value)}
                    type = 'number' className='form-control'/>
                </div>

                <div className ='mb -3'>
                    <label className='form-label'>N. Telefono</label>
                    <input value={telefono}onChange={(g) => setTelefono(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>

                <div className ='mb -3'>
                    <label className='form-label'>Nombre Responsable</label>
                    <input value={responsable}onChange={(g) => setResponsable(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>

                <button type ='submit' className ='btn btn-primary'><i class ="fa-solid fa-floppy-disk"></i></button>


            </form>
        </div>
    )
}

export default CompEditarPeluquerias;