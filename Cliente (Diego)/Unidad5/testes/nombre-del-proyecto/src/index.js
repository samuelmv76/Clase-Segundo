import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxElement = <h1>This is a JSX element</h1>;
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(jsxElement);

function insertarTabla() {
    const filaElement=
    <table> 
        <th>
            <td>
                Holita
            </td>
        </th>
    </table>;
    const insertfila=ReactDOM.createRoot(rootElement);
    insertfila.render(filaElement);
};

document.addEventListener("click", function() {
    document.getElementById("bot").click();
    insertarTabla();   
});
