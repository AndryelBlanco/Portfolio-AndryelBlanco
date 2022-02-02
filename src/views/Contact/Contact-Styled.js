import styled from 'styled-components';
import { colors, device } from '../../Helper/StyleSheet';
import { Mail } from '@styled-icons/entypo/Mail';
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Github } from '@styled-icons/boxicons-logos/Github';


export const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100vh;

  background: linear-gradient(180deg, #051D37 0%, #06111E 100%);
`;

export const ContactTitle = styled.h1`
  @media ${device.mobileS}{
    font-size: 1.4rem;
  }

  @media ${device.mobileL}{
    font-size: 1.6rem;
  }

  font-size: 1.8rem;
  font-weight: 600;
  color: ${colors.white_color};

  justify-self: flex-start;
  margin-top: 5%;
  margin-bottom: 5%;
  transition: .5s ease-in-out;
`;

export const ContactButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 1rem;
`;

export const ContactBorder = styled.div`
 
  margin-bottom: 2rem;

  position: relative;
  width: 300px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0,0,0,0.1);
  overflow: hidden;
  border-radius: 8px;

  cursor: pointer;
  transition: .5s ease;

  &:hover{
    filter: opacity(.5);
  }

  &:before{
    content: "";
    position: absolute;
    width: 600px;
    height: 50px;
    background: ${props => props.colorOne ? `linear-gradient(${props.colorOne}, ${props.colorTwo}) ` : null};
    animation: ${props => props.type === 'Back' ? `BackLinearRotate 6s linear infinite` : ` linearRotate 6s linear infinite `};;
  }

  &:after{
    content: "";    
    position: absolute;

    
    border-radius: 8px;
    inset: 1px;

    background: #082543;

  }
`;

export const ButtonContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100%;
  
  padding: 16px;
`;

export const ContactButtonText = styled.span`
  z-index: 100;
  font-size: 1.2rem;
  color: #FFF;
`;

export const WhiteMail = styled(Mail)`
  color: #FFF;
  z-index: 100;
  width: 2.8rem;
`;

export const WhiteWpp = styled(Whatsapp)`
  color: #FFF;
  z-index: 100;
  width: 2.8rem;
`;

export const WhiteLinkedin = styled(Linkedin)`
  color: #FFF;
  z-index: 100;
  width: 2.8rem;
  margin-bottom: 6px;
`;

export const WhiteGithub = styled(Github)`
  color: #FFF;
  z-index: 100;
  width: 2.8rem;
`;