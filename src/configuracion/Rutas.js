

// importamos los componentes
import CompInicio from './Inicio';

import CompMostrarCitas from '../componentes/Citas/MostrarCitas';
import CompAgregarCitas from '../componentes/Citas/CrearCitas';
import CompEditarCitas from '../componentes/Citas/EditarCitas';

import CompMostrarClientes from '../componentes/Clientes/MostrarClientes';
import CompAgregarClientes from '../componentes/Clientes/CrearClientes';
import CompEditarClientes from '../componentes/Clientes/EditarClientes';

import CompMostrarConsultas from '../componentes/Consultas/MostarConsultas';
import CompAgregarConsultas from '../componentes/Consultas/CrearConsultas';
import CompEditarConsultas from '../componentes/Consultas/EditarConsultas';


import CompMostrarFormulas from '../componentes/Formulas/MostrarFormulas';
import CompAgregarFormulas from '../componentes/Formulas/CrearFormulas';
import CompEditarFormulas from '../componentes/Formulas/EditarFormulas';

import CompMostrarMascotas from '../componentes/Mascotas/MostrarMascotas';
import CompAgregarMascotas from '../componentes/Mascotas/CrearMascotas';
import CompEditarMascotas from '../componentes/Mascotas/EditarMascotas';

import CompMostrarPeluquerias from '../componentes/Peluquerias/MostrarPeluquerias';
import CompAgregarPeluquerias from '../componentes/Peluquerias/CrearPeluquerias';
import CompEditarPeluquerias from '../componentes/Peluquerias/EditarPeluquerias';

// importamos routers

import { Route, Routes } from 'react-router-dom';



const CompRutas = () => {

    return (
        <Routes>
          <Route path ='/' element = {<CompInicio />} />
        <Route path ='/citas/' element = {<CompMostrarCitas />} />
        <Route path ='/citas/editar/:id' element = {<CompEditarCitas />} /> 
        <Route path ='/citas/agregar' element = {<CompAgregarCitas />} />

        <Route path ='/clientes/' element = {<CompMostrarClientes />} />
        <Route path ='/clientes/editar/:id' element = {<CompEditarClientes />} /> 
        <Route path ='/clientes/agregar' element = {<CompAgregarClientes />} />

        <Route path ='/consultas/' element = {<CompMostrarConsultas />} />
        <Route path ='/consultas/editar/:id' element = {<CompEditarConsultas />} /> 
        <Route path ='/consultas/agregar' element = {<CompAgregarConsultas />} />

        <Route path ='/formulas/' element = {<CompMostrarFormulas />} />
        <Route path ='/formulas/editar/:id' element = {<CompEditarFormulas />} /> 
        <Route path ='/formulas/agregar' element = {<CompAgregarFormulas />} />

        <Route path ='/mascotas/' element = {<CompMostrarMascotas />} />
        <Route path ='/mascotas/editar/:id' element = {<CompEditarMascotas />} /> 
        <Route path ='/mascotas/agregar' element = {<CompAgregarMascotas />} />

        <Route path ='/peluquerias/' element = {<CompMostrarPeluquerias />} />
        <Route path ='/peluquerias/editar/:id' element = {<CompEditarPeluquerias />} /> 
        <Route path ='/peluquerias/agregar' element = {<CompAgregarPeluquerias />} />
      </Routes>
     )
       
}
export default CompRutas;
