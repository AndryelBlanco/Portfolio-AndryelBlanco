import React from 'react';
import Card from '../../components/ProjectCard/Card';

import { CardsContainer, PageTitle, ProjectsContainer } from './Project-Styled';

import myWallet from '../../assets/ProjectsPng/myWallet.png';
import myWalletLogo from '../../assets/ProjectsPng/myWalletLogo.svg';

import cineParty from '../../assets/ProjectsPng/cineParty.png';
import cinePartyLogo from '../../assets/ProjectsPng/cinePartyLogo.svg';

import dogs from '../../assets/ProjectsPng/dogs.png';
import dogsLogo from '../../assets/ProjectsPng/dogsLogo.svg';

const Projects = () => {
  return (
    <ProjectsContainer id='project-page'>
      <PageTitle>Projetos</PageTitle>
      <CardsContainer>
        <Card
          image={myWallet}
          altText='Imagem da tela da aplicação My Wallet' 
          logo={myWalletLogo}
          description={'Uma aplicação web que visa ajudar os usuários a controlar suas despesas de forma fácil e rápida.'}
          techs={['ReactJS|', 'Firebase|', 'Styled-Components|']}
          gitLink={'https://github.com/AndryelBlanco/MyWallet'}
          webLink={'https://my-wallet-pink.vercel.app/'}
        />
        <Card
          image={cineParty}
          altText='Imagem da tela da aplicação CineParty' 
          logo={cinePartyLogo}
          description={'Visando resolver o problema daquelas pessoas que não conseguem decidir um filme para assistir o CineParty escolhe de forma fácil o filme certo.'}
          techs={['ReactJS|', 'API TMDB|', 'Styled-Components|']}
          gitLink={'https://github.com/AndryelBlanco/CineParty'}
          webLink={'https://cineparty.vercel.app/'}
        />
        <Card
          image={dogs}
          altText='Imagem da tela da aplicação Dogs' 
          logo={dogsLogo}
          description={'Dogs é uma aplicação desenvolvida durante o curso "React" da plataforma Origamid. Uma rede social para cachorros, permitindo com que o usuário poste fotos do seu pet.'}
          techs={['ReactJS|', 'CSS|', 'HTML|']}
          gitLink={'https://github.com/AndryelBlanco/dogs-origamid'}
          webLink={'https://dogs-origamid-zeta.vercel.app/'}
        />
      </CardsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
