// importing the react and react-dom package
import React from 'react';
import ReactDOM from 'react-dom/client';

// Definimos el contenido del header
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
);

// Obtenemos el elemento raíz del DOM
const rootElement = document.getElementById('root');

// Creamos el contenedor raíz con React 18+
const root = ReactDOM.createRoot(rootElement);

// Renderizamos el contenido
root.render(header);

const main = ( <div id="main-content">
  <table>
    <thead>
      <tr>
        <th>Full Name</th>
        <th>Country</th>
        <th>Skills</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Asabeneh Yetayeh</td>
        <td>Finland</td>
        <td>JavaScript, React, Python</td>
      </tr>
      <tr>
        <td>Donald Duck</td>
        <td>Disney Land</td>
        <td>Photoshop, Photography</td>
      </tr>
    </tbody>
  </table>
  </div>
);
const rootMainElement = document.getElementById('main');

const rootMain = ReactDOM.createRoot(rootMainElement);
rootMain.render(main);