import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const Boton = ({text}) => {
  return (
    <button>
    
      {text}
    </button>
  )
}
root.render(
  <React.Fragment>
    <Boton text="Button 1"/>
    <Boton text="Button 2"/>
  </React.Fragment>
)