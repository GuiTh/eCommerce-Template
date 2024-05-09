import React from 'react'

//components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carousel  from '../../components/Carousel/Carousel'
import Contrate from '../../components/Contrate/Contrate'
import Segmento from '../../components/Segmento/Segmento'
import Orcamento from '../../components/Orcamento/Orcamento'
import RedesSociais from '../../components/RedesSociais/RedesSociais'

//Data
import { slidesFirstCarousel } from "../../data/carousel.json";

const Home = () => {
  return (
    <div>
        <Header />
        <Carousel data={slidesFirstCarousel}/>
        <Contrate />
        <Segmento />
        <Orcamento />
        <RedesSociais />
        <Footer />
    </div>
  )
}

export default Home