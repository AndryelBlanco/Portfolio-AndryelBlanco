import styled from 'styled-components';
import { colors, device } from '../../Helper/StyleSheet';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  @media ${device.mobileS}  {
    background: radial-gradient(97% 53.54% at 50% 46.46%, rgba(0, 250, 220, 0.2) 0%, rgba(0, 1, 2, 0) 100%), linear-gradient(0deg, #050A1E, #050A1E), #FFFFFF;
  }

  @media ${device.mobileL}  {
    background: radial-gradient(97% 53.54% at 50% 46.46%, rgba(0, 250, 220, 0.2) 0%, rgba(0, 1, 2, 0) 100%), linear-gradient(0deg, #050A1E, #050A1E), #FFFFFF;
  }

  background: radial-gradient(46.97% 53.54% at 50% 46.46%, rgba(0, 250, 220, 0.2) 0%, rgba(0, 1, 2, 0) 100%), #050A1E;

`;

export const MainText = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
`;

export const TopText = styled.span`
  font-family: 'Space Mono', monospace;
  transition: .5s ease;

  @media ${device.mobileS}{
    font-size: 1.4rem;
  }

  @media ${device.mobileL}{
    font-size: 1.6rem;
  }

  color: ${colors.white_color};
  font-size: 1.2rem;
`;

export const NameText = styled.h1`
  font-family: 'IBM Plex Mono', monospace;
  
  @media ${device.mobileS}{
    font-size: 2.3rem;
  }

  @media ${device.mobileL}{
    font-size: 2.8rem;
  }
  
  color: ${colors.white_color};
  font-size: 4rem;
  font-weight: 800;

  transition: .5s ease;
`;

export const BottomText = styled.span`
  font-family: 'Space Mono', monospace;
  transition: .5s ease;

  @media ${device.mobileS}{
    font-size: 1rem;
  }

  @media ${device.mobileL}{
    font-size: 1.3rem;
  }

  color: ${colors.primary_color};
  font-size: 1.4rem;
`;