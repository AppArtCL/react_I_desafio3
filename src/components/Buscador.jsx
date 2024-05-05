import { useState } from "react"


const Buscador = ({ colaboradores, listaActualizada}) => {
    const [texto, setTexto] = useState("")

    var listaFiltrada = []

    function filtrarColaboradores(lista, palabra) {
        return lista.filter((item) => (
            Object.values(item).some(campo =>
                campo.toString().toLowerCase().includes(palabra.toLowerCase())
        )))
    }

    const buscarTexto = (e) => {
        setTexto(e.target.value)

        if (e.target.value != "") {
            listaFiltrada = filtrarColaboradores(colaboradores, e.target.value)
        } else {
            listaFiltrada = colaboradores
        }
        listaActualizada(listaFiltrada)
    }

  return (
    <>
        <input className="texto-buscar" name="texto-buscar" placeholder="Busca un colaborador" onChange={buscarTexto} />
    </>
  )
}

export default Buscador