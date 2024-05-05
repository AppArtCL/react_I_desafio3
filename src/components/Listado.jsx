import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores, eliminarColaboradorApp }) => {

  const eliminarColaborador = (idEliminado) => {
    eliminarColaboradorApp(idEliminado)
    console.log(idEliminado)
  }

  return (
    <>
      <Table striped bordered hover> 
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <button
                  className="boton-borrar"
                  onClick={() => eliminarColaborador(colaborador.id)}>
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listado

//responsive="sm" 