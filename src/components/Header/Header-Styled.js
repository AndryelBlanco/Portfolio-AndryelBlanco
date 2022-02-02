import styled from 'styled-components';
import { colors, device } from '../../Helper/StyleSheet';

export const Backdrop = styled.div`
  @media ${device.mobileHeader} {
    display: flex;
    
    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.5);
    position: fixed;
  }
  display: none;
`;

export const HeaderComponent = styled.header`
  @media ${device.mobileHeader} {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: fit-content;

  width: 100%;

  padding: .8rem;

  position: fixed;
  z-index: 999;

  background: rgba(0, 250, 220, 0.06);
  border-bottom: 1px solid ${colors.primary_color};
  box-sizing: border-box;

`;

export const LogoA = styled.h1`
  font-family: 'Space Mono', monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 36px;

  color: ${colors.primary_color};
  text-shadow: 0px 0px 10px rgba(0, 246, 255, 0.8);
  
  cursor: pointer;
`;

export const HeaderButtons = styled.nav`
  @media ${device.mobileHeader} {
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  padding: 0 1rem;
`;

export const Button = styled.button`
  color: ${props => props.isSelected ? `${colors.primary_color}` : `${colors.white_color}`};

  font-style: normal;
  font-weight: bold;
  font-size: 1rem;

  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  transition: .4s ease;

  &:after{
    content: '';
    display: block;
    width: 0;
    height: .6px;
    background: ${colors.primary_color};
    transition: .4s;
  }

  :hover{
    color: ${colors.primary_color};
    
    &:after{
      content: '';
      display: block;
      width: 100%;
      height: .6px;
      background: ${colors.primary_color};
    }
  }
`;

export const SidebarMobile = styled.header`
  @media ${device.mobileHeader} {
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100%;
    
    position: absolute;
    z-index: 999;
  }
`;

export const HeaderComponentMobile = styled.header`
  @media ${device.mobileHeader} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 20%;
    
    height: 100%;
    width: 70%;
    margin-left: 30%;

    padding: 1rem;

    position: fixed;
    z-index: 999;

    background: ${colors.background_color};
    box-sizing: border-box;
  }
  display: none;
`;

export const LogoMobile = styled.h1`
  font-family: 'Space Mono', monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 36px;
  margin-top: 2rem;

  color: ${colors.primary_color};
  text-shadow: 0px 0px 10px rgba(0, 246, 255, 0.8);
  
  cursor: pointer;
`;

export const ButtonMobile = styled.button`
  @media ${device.mobileHeader} {
    border: 1px solid ${colors.primary_color};
    width: 100%;
    height: 40px;
    /* padding: 1rem; */
    color: ${colors.white_color};
    position: relative;

    &::before{
      content: '';
      display: flex;
      
      width: 100%;
      height: ${props => props.isSelected ? `100%` : `0`};
      background: rgba(0, 246, 255, 0.5);
      
      position: absolute;
      z-index: -2;
      bottom: 0;
      transition: .5s ease-in-out;
    }

    :hover{
      /* background: ${colors.primary_color}; */
      &::before{
        height: 100%;
      }
    }
  }
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;

  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  transition: .4s ease;
`;

export const HamburgerMenu = styled.button`
  @media ${device.mobileHeader} {
    display: flex;
    position: fixed;
    z-index: 999;

    border: none;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0.2), rgba(0,0,0,0.2));

    margin-left: 80%;
    margin-top: 10%;

    transition: .5s ease-in-out;
    cursor: pointer;
    
    &:hover{
      filter: opacity(.5);
    }
  }
  display: none;
`;