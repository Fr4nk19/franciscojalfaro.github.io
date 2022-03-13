import React from 'react';
import { FeatSection } from './Components/FeatSection';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { PortFolio } from './Components/Portfolio';


export const Content = () => {
  
    return (
      <>
        <Header/>
        <FeatSection/>  
        <PortFolio />
        <Footer/>
      </>
  );

}