import { useState } from 'react'
import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"


const Formulario = ({ actualizaErrorApp, actualizaColorErrorApp, agregaColaboradorApp, colaboradores }) => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  function creaColaborador() {
    const nuevoID = Number(colaboradores[colaboradores.length - 1].id) + 1  
    const datosColaborador = {}
    datosColaborador.id = nuevoID
    datosColaborador.nombre = formData.nombre
    datosColaborador.correo = formData.correo
    datosColaborador.edad = formData.edad
    datosColaborador.cargo = formData.cargo
    datosColaborador.telefono = formData.telefono
    return datosColaborador
  }

  const validarUsuario = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      actualizaErrorApp("Completa todos los datos!");
      actualizaColorErrorApp("danger");
      setValidated(true);
    } else {
      const colaborador = creaColaborador(formData)
      agregaColaboradorApp(colaborador)
      actualizaErrorApp("Colaborador agregado!");
      actualizaColorErrorApp("success");
      formData.nombre = "";
      formData.correo = "";
      formData.edad = "";
      formData.cargo = "";
      formData.telefono = "";
      setValidated(false);
      e.stopPropagation()
    }
  };

  const funcionOnChange = (e) => {
    if (validated === false) {
        actualizaErrorApp("")
    }
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="agregar-colaborador">
      <p className="subtitulo">Agregar colaborador</p>
      <Form
        noValidate
        validated={validated}
        className="formulario"
        onSubmit={validarUsuario}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre del colaborador"
            value={formData.nombre}
            onChange={funcionOnChange}
            pattern='.{1,}'
            required
            isInvalid={validated && !/.{1,}/.test(formData.nombre)}
          />
          <Form.Control.Feedback type="invalid">
            El campo no puede estar vacío.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="correo"
            placeholder="Email del colaborador"
            value={formData.correo}
            onChange={funcionOnChange}
            required
            isInvalid={validated && !/^\S+@\S+\.\S+$/.test(formData.correo)}
          />
          <Form.Control.Feedback type="invalid">
            Ingrese una dirección de correo válida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            type="text"
            name="edad"
            placeholder="Edad del colaborador"
            value={formData.edad}
            onChange={funcionOnChange}
            pattern="^[0-9]+$"
            required
            isInvalid={validated && !/^[0-9]+$/.test(formData.edad)}
          />
          <Form.Control.Feedback type="invalid">
            Ingrese solo números.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPosition">
          <Form.Control
            type="text"
            name="cargo"
            placeholder="Cargo del colaborador"
            value={formData.cargo}
            onChange={funcionOnChange}
            pattern='.{1,}'
            required
            isInvalid={validated && !/.{1,}/.test(formData.cargo)}
          />
          <Form.Control.Feedback type="invalid">
            El campo no puede estar vacío.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control
            type="tel"
            name="telefono"
            placeholder="Teléfono del colaborador"
            value={formData.telefono}
            onChange={funcionOnChange}
            pattern="[0-9]{9}"
            required
            isInvalid={validated && !/[0-9]{9}/.test(formData.telefono)}
          />
          <Form.Control.Feedback type="invalid">
            Ingrese 9 números.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="success" type="submit">
          Agregar colaborador
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;

//guardar
