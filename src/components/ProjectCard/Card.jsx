import React from 'react';
import { Button, ButtonsContainer, CardImage, CardItem, CardMain, CardTop, DescriptionText, ProjectDescription, ProjectLogo, ProjectTechs, TechsText, TopCircles } from './Card-Styled';


const Card = ({ image, altText, logo, description, techs, gitLink, webLink, }) => {

  function handleClick(type){
    switch(type){
      case 'Git':
        window.open(gitLink);
        break;
      case 'Web':
        window.open(webLink);
        break;
      default:
        break;
    }
  }

  return (
    <CardItem>
      <CardTop>
        <TopCircles color='#68C93B'></TopCircles>
        <TopCircles color='#FFED4E'></TopCircles>
        <TopCircles></TopCircles>
      </CardTop>
      <CardMain>
        <CardImage src={image} alt={altText}/>
        <ProjectLogo src={logo} alt='logo da apliação'/>
        <ProjectDescription>
          <DescriptionText>
            {description}
          </DescriptionText>
        </ProjectDescription>
        <ProjectTechs>
          {techs.map((e, index) => 
            <TechsText key={index}>
              {e}
            </TechsText>
          )}
        </ProjectTechs>
        <ButtonsContainer>
            <Button onClick={() => handleClick('Git')} btnType={'Git'}>Repositório</Button>
            <Button onClick={() => handleClick('Web')} btnType={'Web'}>Visitar Site</Button>
        </ButtonsContainer>
      </CardMain>
    </CardItem>
  );
};

export default Card;
