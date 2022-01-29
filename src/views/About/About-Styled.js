import styled, { keyframes } from 'styled-components';
import { colors, device } from '../../Helper/StyleSheet';
import PortraitImg from '../../assets/foto.svg'

export const AboutPage = styled.div`
  @media ${device.mobileS}{
    flex-direction: column;
    height: fit-content;
    padding: 1rem 0;
  }

  @media ${device.mobileL}{
    flex-direction: column;
    height: fit-content;
    padding: 1rem 0;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  height: 100vh;
  background: #030910;
`;

export const ImageContainer = styled.div`
  @media ${device.mobileS}{
    margin-top: 10%;
  }

  @media ${device.mobileL}{
    margin-top: 10%;
  }

  width: 300px;
  height: 300px;
  box-shadow: 16px 14px 20px #0000008c;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before{
    content: "";
    background-image: conic-gradient(
      #00D1FF 20deg,
      #00FF55 60deg,
      transparent 120deg
    );
    width: 150%;
    height: 150%;
    position: absolute;
    animation: rotate 4s linear infinite;
  }

  &:after{
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;

    width: 290px;
    height: 290px;
    
    background: url(${PortraitImg}), linear-gradient(180deg, #00BBFF 100%, rgba(5, 10, 30, 0.28) 100%);
    background-size: cover;
    border-radius: 10px;
    
    position: absolute;
    box-shadow: inset 20px 20px 20px #0000008c;
  }

`;

export const AboutText = styled.div`
  @media ${device.mobileS}{
    width: 90%;
    align-items: center;
  }

  @media ${device.mobileL}{
    width: 90%;
    align-items: center;
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 50%;

  padding: 1rem;
`;

export const AboutTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  font-family: 'IBM Plex Mono';
  color: ${colors.secondary_color};
`;

export const AboutSpanText = styled.p`
  @media ${device.mobileS}{
    text-align: center;
  }

  @media ${device.mobileL}{
    text-align: center;
  }

  max-width: 100%;

  font-size: 1rem;
  font-weight: normal;
  color: ${colors.white_color};
`;
