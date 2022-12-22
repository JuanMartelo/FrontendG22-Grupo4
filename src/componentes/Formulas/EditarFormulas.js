import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = "http://localhost:5000/api/formulas/"

const CompEditarCitas = () => {

    const [medicamento, setMedicamento] = useState ('');
    const [cantidad, setCantidad] = useState ('');
    const [dosis, setDosis] = useState ('');
    const [uso, setUso] = useState ('');
    const [recomendaciones, setRecomendaciones] = useState ('');
    const navigate = useNavigate();
    const {id} =useParams();


    // funcion Actualizar
 
    const ActualizarCitas = async (g) => {
        g.preventDefault()
        await axios.post(URL, {medicamento:medicamento, cantidad:cantidad, dosis:dosis, uso:uso,recomendaciones:recomendaciones})
        navigate('/formulas');
    }

    useEffect (() => {
        getCitasById()        
        // eslint-disable-next-line
    }, [])
 
    const getCitasById = async () => {
        const res = await axios.get(`${URL}${id}`)
            setMedicamento(res.data.medicamento)
            setCantidad(res.data.cantidad)
            setDosis(res.data.dosis)
            setUso(res.data.uso)
            setRecomendaciones(res.data.recomendaciones)
               
    }
    return (
        <div>
            <h3 >Modulo FORMULA MEDICA </h3>
            <form onSubmit={ActualizarCitas}>
                <div className ='mb -3'>
                    <label className='form-label'>medicamentos</label>
                    <input value={medicamento}onChange={(g) => setMedicamento(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Cantidad</label>
                    <input value={cantidad}onChange={(g) => setCantidad(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Dosis</label>
                    <input value={dosis}onChange={(g) => setDosis(g.target.value)}
                    type = 'number' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Nombre Propietario</label>
                    <input value={uso}onChange={(g) => setUso(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <div className ='mb -3'>
                    <label className='form-label'>Nombre Mascota</label>
                    <input value={recomendaciones}onChange={(g) => setRecomendaciones(g.target.value)}
                    type = 'text' className='form-control'/>
                </div>
    
                <button type ='submit' className ='btn btn-primary'><i class ="fa-solid fa-floppy-disk"></i></button>
    
    
            </form>
        </div>
    )
    
}
export default CompEditarCitas;