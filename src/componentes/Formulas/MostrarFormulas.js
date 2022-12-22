import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = "http://localhost:5000/api/formulas/"

const CompMostrarFormulas = () => {

    const [formulas, SetFormula] = useState([])
    useEffect(() => {
        getFormulas ()        
    }, []);

    //funcion mostrar formulas
    const getFormulas = async () => {
        const resul = await axios.get(URL)
        SetFormula(resul.data);
    }

    //funcion eliminar formulas
    const eliminarFormulas = async (id) => {
        await axios.delete (`${URL}${id}`)
        getFormulas()
        // eslint-disable-next-line
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to = '/formulas/agregar' className='btn btn-success mt-2 mb-2'><i className="fa-sharp fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableThedBg'>
                            <tr>
                                <th>Medicamento</th>
                                <th>Cantidad</th>
                                <th>Dosis</th>
                                <th>Uso</th>
                                <th>recomendaciones</th>
                            </tr>                        
                        </thead>
                        <tbody>
                            { formulas.map ((formula, index) => (
                                <tr key = { index }>
                                    <td> {formula.medicamento}</td>
                                    <td> {formula.cantidad}</td>
                                    <td> {formula.dosis}</td>
                                    <td> {formula.uso}</td>
                                    <td> {formula.recomendaciones}</td>
                                    <td>
                                        <Link to = {`/formulas/editar/${formula._id}`} className = 'btn btn-info'><i className = "fa-solid fa-address-card"></i></Link>
                                        <button onClick={ () => eliminarFormulas(formula._id)} className = 'btn btn-danger'><i className = "fa-solid fa-eraser"></i></button>
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

export default CompMostrarFormulas;
