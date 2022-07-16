import '../css/App.css';
import { useEffect, useState } from "react";
import { componentes } from "./componentes";

function App() {
  const { Datos, Crear } = componentes();
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    Datos().then(respuesta => {
      setContactos(respuesta)
    })
  })

  return (
    <div className="App">
        <div className="label">Lista de contactos <button onClick={() => {Crear()}}>Crear</button> </div>
        <table id="contactos" className="contenedor">
          <thead>
            <tr><th>Nombre</th><th>Apellido</th><th>Contacto</th></tr>
          </thead>
          <tbody>
            { contactos.map((contacto) => (
              <tr> 
                <td>{contacto.nombre}</td>
                <td>{contacto.apellido}</td>
                <td>{contacto.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
