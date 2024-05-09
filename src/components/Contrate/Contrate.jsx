import React from 'react'

const Contrate = () => {
  return (
    <div>
      <div className="d-flex justify-content-center my-5">
        <h2>Contrate agora</h2>
      </div>
        <div className='d-flex flex-row justify-content-center'>
          <div className="card" style={{width: "15rem", margin:"0 15px"}}>
              <img className="card-img-top" src="imgs/motossera.webp" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Operador</h5>
              <p className="card-text">Entre em contato e negocie valores.</p>
              <a href="#" className="btn btn-danger">Entre em contato</a>
            </div>
          </div>
          <div className="card" style={{width:"15rem", margin:"0 15px"}}>
              <img className="card-img-top" src="imgs/engCivil.webp" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Engenheiro Civil</h5>
              <p className="card-text">Entre em contato e negocie valores.</p>
              <a href="#" className="btn btn-danger">Entre em contato</a>
            </div>
          </div>
          <div className="card" style={{width:"15rem", margin:"0 15px"}}>
              <img className="card-img-top" src="imgs/auxiliar.webp" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Auxiliar </h5>
              <p className="card-text">Entre em contato e negocie valores.</p>
              <a href="#" className="btn btn-danger">Entre em contato</a>
            </div>
          </div>
          <div className="card" style={{width:"15rem", margin:"0 15px"}}>
              <img className="card-img-top" src="imgs/serralheiro.webp" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Serralheiro</h5>
              <p className="card-text">Entre em contato e negocie valores.</p>
              <a href="#" className="btn btn-danger">Entre em contato</a>
            </div>
          </div>
          <div className="card" style={{width:"15rem", margin:"0 15px"}}>
              <img className="card-img-top" src="imgs/servente.webp" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Servente</h5>
              <p className="card-text">Entre em contato e negocie valores.</p>
              <a href="" className="btn btn-danger">Entre em contato</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contrate