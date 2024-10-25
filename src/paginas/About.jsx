import React from 'react'
import Card from '../componentes/Card'

const About = ({titulo, autor, ficha, centro}) => {
  return (
    <Card>
        <div className='about'> 
            <h1>Acerca de este proyecto</h1>
            <h3>Esta es una app de react</h3>

            <p><b>Titulo: </b>{titulo}</p>
            <p><b>Autor: </b>{autor}</p>
            <p><b>Ficha: </b>{ficha}</p>
            <p><b>Centr: </b>{centro}</p>
            <p><b>Versión: </b>1.0.0</p>

            <p>
                <a href='/'>Volver a Página Principal</a>
            </p>
            
        </div>
    </Card>
  )
}

export default About