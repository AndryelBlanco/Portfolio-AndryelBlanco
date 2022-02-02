import styled from 'styled-components';
import { device } from '../../Helper/StyleSheet';

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileS} {
    width: 350px;
    min-height: 550px;
    height: fit-content;
  }

  @media ${device.mobileL} {
    width: 350px;
    min-height: 550px;
    height: fit-content;
  }

  width: 380px;
  height: 580px;
  margin-bottom: 2rem;

  background: linear-gradient(180deg, #091A2D 0%, #030910 100%);
  border: 1px solid #00BBFF;
  box-sizing: border-box;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.14), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.10064), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.083455), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.07), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.056545), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0393604);
  border-radius: 8px;

  transition: .5s cubic-bezier(.49,.43,.46,.66);

  &:hover{
    transform: scale(1.01);
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: end;
  gap: .5rem;

  width: 100%;
  padding: .5rem;

  background: #06101D;
  border: 1px solid #00BBFF;
  box-sizing: border-box;
  border-radius: 8px 8px 0px 0px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const TopCircles = styled.span`
  width: 15px;
  height: 15px;

  border-radius: 99999px;
  border: 2px solid #FFF;
  background: ${props => props.color ? `${props.color}` : "#FF4B23"};
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 100%;
  padding: 1rem 0;

  /* border: 1px solid red; */
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const ProjectLogo = styled.img`
  width: 100px;
  height: 24px;
`;

export const ProjectDescription = styled.div`
  display: flex;
  padding: 0rem 1rem;
  
  width: 100%;
  height: 100px;
  max-height: 100px;
`;

export const DescriptionText = styled.p`
  color: #FFF;
  font-size: .9rem;
  font-weight: 400;
`;

export const ProjectTechs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 8px;
  
  width: 100%;
`;

export const TechsText = styled.span`
  color: #00FF55;
  font-size: .9rem;
  font-family: 'Space Mono';
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: end;
  gap: 1rem;

  width: 100%;
  padding: 1rem;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;

  background: ${props => props.btnType === 'Web' ? `rgba(0, 246, 255, 0.26)` : "none"};
  border: 1px solid #00BBFF;
  box-sizing: border-box;
  border-radius: 4px;

  color: #FFF;
  font-family: 'Space Mono';
  
  cursor: pointer;
  transition: .3s ease-in-out;

  &:hover{
    filter: opacity(.8);
  }
`;