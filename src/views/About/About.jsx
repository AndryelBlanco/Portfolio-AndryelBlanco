import React from 'react';
import { AboutPage, ImageContainer, AboutText, AboutTitle, AboutSpanText } from './About-Styled';
import './animated-border.css'

const About = () => {
  return(
    <AboutPage id='about-page'>
      <ImageContainer>
      </ImageContainer>
      <AboutText>
        <AboutTitle>{'>_'} Sobre mim</AboutTitle>
        <AboutSpanText>
          Meu primeiro contato com programação foi no ensino médio técnico em informática, onde criei meu amor a 
          primeira vista com desenvolvimento web. Porém foi no começo de 2021 onde comecei a focar no aprendizado e buscar evoluir a cada dia, desde então busco aprender cada vez.
          Hoje tenho foco em JavaScript com ReactJS e em meu tempo livre busco aprender sobre programação mobile!
        </AboutSpanText>
      </AboutText>
    </AboutPage>
  );
};

export default About;
