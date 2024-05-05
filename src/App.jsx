import { useState } from 'react'
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Alert from './components/Alert';

import { BaseColaboradores } from './components/BaseColaboradores';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const actualizaListaColaboradores = (data) => {
    setListaColaboradores(data)
  }
  
  const [listaEnUso, setListaEnUso] = useState(BaseColaboradores)
  const actualizaListaEnUso = (data) => {
    setListaEnUso(data)
  }

  const [error, setError] = useState("");
  const actualizaError = (data) => {
    setError(data)
  }

  const [colorError, setColorError] = useState("dark");
  const actualizaColorError = (data) => {
    setColorError(data)
  } 

  return (
    <>
      <main>
        <p className='titulo'>Lista de colaboradores</p>
        <Buscador colaboradores={listaColaboradores} listaActualizada={actualizaListaEnUso} />
        <div className='datos-colaboradores'>
          <Listado colaboradores={listaEnUso} />
          <div className='nuevo-colaborador'>
            <Formulario actualizaErrorApp={actualizaError} actualizaColorErrorApp={actualizaColorError}  />
            <Alert error={error} colorError={colorError} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App