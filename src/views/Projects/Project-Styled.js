import styled from 'styled-components';
import { colors } from '../../Helper/StyleSheet';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  min-height: 100vh;
  height: fit-content;
  padding: 2rem;

  background: linear-gradient(180deg, #030910 0.01%, #030910 6.77%, #051D37 100%);

`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.white_color};

  justify-self: flex-start;
  margin-top: 2rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;

  width: 100%;
  min-height: 80vh;
  height: fit-content;
  
  margin-top: 2rem;
  transition: .5s ease-in-out;
`;