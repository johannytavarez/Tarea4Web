export const componentes = () => {

    const Datos = async() => {        
        let respuesta = await fetch("http://www.raydelto.org/agenda.php")

        return await respuesta.json()
    }

    const Crear = async() => {
        fetch('http://www.raydelto.org/agenda.php', {
         method: "POST",
         body: JSON.stringify({
             nombre: window.prompt("Nombre: "),
             apellido: window.prompt("Apellido: "),
             telefono: window.prompt("Telefono: ")
            })
        })
    }
    
    return {
        Datos,
        Crear
    }
}