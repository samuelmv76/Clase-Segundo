import { useState } from "react";
const EjemploEstado3 = () => {
    const [estado, setEstado] = useState(
        {
            titulo: "Por defecto",
            hora: new Date().toLocaleTimeString(),
            numero: 0,
            numeros: []
        }
    );
    return (
        <>
            
        </>
    );
}
export default EjemploEstado3;