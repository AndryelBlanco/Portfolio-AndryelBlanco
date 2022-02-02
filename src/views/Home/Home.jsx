import React from 'react';
import Particles from "react-tsparticles";
import { AvatarSvg, BottomText, HomeContainer, MainText, NameText, TopText } from './Home-Styled';
import Avatar from '../../assets/Avatar.svg';

const HomePage = () => {
  const particlesInit = (main) => {
  };

  const particlesLoaded = (container) => {
  };

  return (
    <HomeContainer>
      <AvatarSvg alt='Avatar 3D de Andryel Blanco' src={Avatar} />
      <MainText>
        <TopText >Hey, sou </TopText>
        <NameText>Andryel Blanco</NameText>
        <BottomText className='line typing'>{'>'}_Desenvolvedor Front-End</BottomText>
      </MainText>
      <Particles
        id="tsparticles"
        className='limitator'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          fullScreen: { enable: false },
          particles: {
            color: { value: "#00faa7" },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: false,
              speed: .5,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 40
            },
            opacity: {
              animation: {
                enable: true,
                speed: 0.05,
                sync: true,
                startValue: "max",
                count: 1,
                destroy: "min"
              },
              value: {
                min: 0,
                max: 1.5
              }
            },
            shape: {
              type: "triangle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          }
        }}
      />
    </HomeContainer>
  )
};

export default HomePage;
