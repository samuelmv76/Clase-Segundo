import { useState } from "react";
const EjemploEstado3 = () => {
    const [estado, setEstado] = useState(
        {
            titulo: "Por defecto",
            hora: new Date().toLocaleTimeString(),
            numero: 0,
            numeros: []
        }
    )
    const cambiarEstado = () => {
        let numero = Math.floor(Math.random() * 4);
        let numeros = estado.numeros;
        numeros.push(numero);
        setEstado({
                hora: new Date().toLocaleTimeString(),
                numeros:  numeros,
                numero: numero,
                titulo: numero % 2 == 0 ? "Par" : "Impar"
            });
            console.log("cambiarEstado",estado);
        };

        const colores= ["red", "blue", "green", "yellow"];
        return (
            <>
                <div style= {{backgroundColor: colores[estado.numero]}}>
                    <header>
                        <h1>{estado.titulo} -{estado.numero}</h1>
                        <h2>{estado.hora}</h2>
                    </header>
                    <div>
                        <div>{estado.hora}</div>
                        Pulsa el boton para cambiar el estado
                        <div>
                            <button onClick={cambiarEstado}>Cambiar estado</button>
                        </div>
                        Numeros generados:
                        <ul>
                            {estado.numeros.map( (n) => (
                                <li key={n}>{n}</li>
                            ))}
                        </ul>
                    </div>
           
                </div>
            </>
        );
    }
export default EjemploEstado3;