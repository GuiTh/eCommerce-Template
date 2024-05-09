import React from 'react'

//CSS
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className='logo'>
                <div className="logo">
                    <span>@guilhermeCarlos</span>
                </div>
                <div className="listaDeLinks">
                    <ul>
                        <li>Ajuda</li>
                        <li>Blog</li>
                        <li>Sobre Nós</li>
                        <li>Politica de Privacidade</li>
                    </ul>
                </div>
            </div>
            <div className='faleConosco'>
                <p>Fale Conosco</p>
            </div>
            <div className="conteudo">
                <div className='empresa'>
                    <div>
                        <h4>Empresa</h4>
                        <p>Sobre nós</p>
                        <p>Localização</p>
                        <p>Entre em Contato</p>
                    </div>
                </div>
                <div className='carreiras'>
                    <div>
                        <h4>Profissionais</h4>
                        <p>Vagas</p>
                        <p>Releases</p>                     
                    </div>
                </div>
                <div className='redeSocial'>
                    <div>
                        <h4>Redes Sociais</h4>
                        <p>X/Twitter</p>
                        <p>Facebook</p>
                        <p>Instagram</p>                        
                        <p>Linkedin</p>                        
                        <p>Youtube</p>                        
                    </div>
                </div>
                <div className='blog'>
                    <div>
                        <h4>Blog</h4>
                        <p>Posts</p>
                        <p>Novidades</p>
                    </div>
                </div>
                <div className='norte'>
                    <div>
                        <h4>Politica de privacidade</h4>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer