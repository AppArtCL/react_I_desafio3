import { Alert as AlertBootstrap } from "react-bootstrap"

const Alert = ({error, colorError}) => {
  return (
    <>
        {
            error != "" ?
            <AlertBootstrap className="alerta" variant={colorError} >{error}</AlertBootstrap>:
            ""
        }
    </>
  )
}

export default Alert