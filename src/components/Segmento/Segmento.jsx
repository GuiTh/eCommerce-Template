import React from 'react'

//css
import './Segmento.css'

const Segmento = () => {
  return (
    <div className='container mt-5'>
        <h2 className='text-center mb-5'>Segmentos</h2>
        <div className='d-flex flex-row justify-content-around' id='segmentos'>
            <button>Engenharia Civil</button>
            <button>Educação</button>
            <button>Saude</button>
            <button>Tecnologia</button>
            <button>Sustentabilidade</button>
            <button>Mobilidade</button>
            <button>Eventos</button>
        </div>
    </div>
  )
}

export default Segmento