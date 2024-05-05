import { useState } from 'react'
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Alert from './components/Alert';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BaseColaboradores } from './components/BaseColaboradores';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const actualizaListaColaboradores = (data) => {
    setListaColaboradores([...listaColaboradores, data])
    setListaEnUso([...listaColaboradores, data])
  }
  const eliminarColaborador = (idEliminado) => {
    const listaNueva = listaColaboradores.filter(colaborador => colaborador.id != idEliminado)
    setListaColaboradores(listaNueva)
    setListaEnUso(listaNueva)
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
        <p className="titulo">Lista de colaboradores</p>
        <Buscador
          colaboradores={listaColaboradores}
          listaActualizada={actualizaListaEnUso}
        />
        <Container>
          <Row className="datos-colaboradores">
            <Col className='listado-colaboradores' sm={12}  xl={8} >
              <Listado
                colaboradores={listaEnUso}
                eliminarColaboradorApp={eliminarColaborador}
              />
            </Col>
            <Col className="nuevo-colaborador" sm={6} xl={4} >
              <Formulario
                actualizaErrorApp={actualizaError}
                actualizaColorErrorApp={actualizaColorError}
                agregaColaboradorApp={actualizaListaColaboradores}
                colaboradores={listaColaboradores}
              />
              <Alert error={error} colorError={colorError} />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App