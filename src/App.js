import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import Article_first from './main/Article_first';
import Article_second from './main/Article_second';
import Article_third from './main/Article_third';

function App() {
  return (
    <div className="App" >
      <Helmet>
        <title>Psychotherapist_portfolio</title> 
      </Helmet> 
      <Header />
        <Article_first id='home'/>
      <AnimationOnScroll animateIn="animate__bounceIn" animateOnce="true">
        <Article_second id='areasOfExpertise'/>
      </AnimationOnScroll>  
      <AnimationOnScroll animateIn="animate__bounceIn" animateOnce="true">
        <Article_third id='contact'/>
      </AnimationOnScroll>   
     <Footer />
    </div>
  )
}

export default App;
