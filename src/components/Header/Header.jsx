import React from 'react'

//CSS
import './Header.css'

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex pt-2">
                <div className='justify-content-start ms-2'>
                    <a href="#" className="navbar-brand">@guilhermeCarlos</a>
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className='justify-content-end me-4'>    
                    <div className="collapse navbar-collapse mt-2">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 " id='menuHeader'>
                        <li className="nav-item dropdown p-4 pt-2">
                            <a className="nav-link dropdown-toggle p-0 text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Serviços
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Terceirização</a></li>
                                <li><a className="dropdown-item" href="#">Temporarios</a></li>
                                <li><a className="dropdown-item" href="#">Recrutamento e seleção</a></li>
                            </ul>
                        </li>
                            <li className="nav-item ps-4 pt-2">Como funciona</li>
                            <li className="nav-item ps-4 pt-2">Contato</li>
                            <li className="nav-item ps-4 pt-2">Vagas</li>
                            <li className="nav-item ps-4 pt-2">Franquias</li>
                        <form className="ps-4 p" role="search">
                            <input className="form-control me-2" type="search" placeholder="Pesquise" aria-label="Search" />
                        </form>
                            <li className='nav-item ps-4 pt-2'>
                            <i className="bi bi-person pe-2"></i>
                               <span className=''>Login</span>
                            </li>
                            <li className="nav-item ps-4 pt-2">
                                <i className="bi bi-cart pe-2"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header