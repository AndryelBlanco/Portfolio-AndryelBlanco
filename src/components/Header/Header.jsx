import React from 'react';
import UseAnimations from "react-useanimations";
import menu from 'react-useanimations/lib/menu';

import { HamburgerMenu, Backdrop, Button, HeaderButtons, HeaderComponent, LogoA, SidebarMobile, HeaderComponentMobile, LogoMobile, ButtonMobile } from './Header-Styled';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [tabSelected, setTabSelected] = React.useState('Home')
  const [showSidebar, setShowSidebar] = React.useState(false);

  React.useEffect(() => {
    handleScreen()
  }, [])

  function handleScreen(){
    let height = window.innerHeight;
    let width = window.innerWidth;
    if(width <= 610){
      setShowSidebar(!showSidebar)
    }else{
      setShowSidebar(false)
    }
  }

  function handleSidebar({target}){
    if(target.id != 'BackdropElement'){
      null
    }else{
      handleScreen()
    }
  }

  function changeTabs(tabName){
    setTabSelected(tabName)
    setShowSidebar(false)
    // window.scrollIntoView('')
  }

  return (
    <>
      {!showSidebar ? 
        <HamburgerMenu onClick={() => setShowSidebar(!showSidebar)}><UseAnimations animation={menu} strokeColor='#FFF' size={45}/></HamburgerMenu>
        :
        <SidebarMobile>
          <Backdrop id='BackdropElement' onClick={handleSidebar}>
          </Backdrop>
          <HeaderComponentMobile onClick={handleSidebar} id='HeaderElement' className='fadeIn'>
            <LogoMobile>{'{A}'}</LogoMobile>
            <HeaderButtons>
            <HashLink to="/#top"><ButtonMobile isSelected={tabSelected == 'Home' ? true : false} onClick={() => changeTabs('Home')}>{tabSelected == 'Home' ? '>_Início' : 'Início'}</ButtonMobile></HashLink>
            <HashLink to="/#about-page"><ButtonMobile isSelected={tabSelected == 'About' ? true : false} onClick={() => changeTabs('About')} >{tabSelected == 'About' ? '>_Sobre' : 'Sobre'}</ButtonMobile></HashLink>
            <HashLink to="/#project-page"><ButtonMobile isSelected={tabSelected == 'Project' ? true : false} onClick={() => changeTabs('Project')} >{tabSelected == 'Project' ? '>_Projetos' : 'Projetos'}</ButtonMobile></HashLink>
            <HashLink to="/#contact-page"><ButtonMobile isSelected={tabSelected == 'Contact' ? true : false} onClick={() => changeTabs('Contact')} >{tabSelected == 'Contact' ? '>_Contato' : 'Contato'}</ButtonMobile></HashLink>
            </HeaderButtons>
          </HeaderComponentMobile>
        </SidebarMobile>
      }
      <HeaderComponent onClick={handleSidebar}>
        <LogoA>{'{A}'}</LogoA>
        <HeaderButtons>
        <HashLink to="/#top"><Button isSelected={tabSelected == 'Home' ? true : false} onClick={() => setTabSelected('Home')}>{tabSelected == 'Home' ? '>_Início' : 'Início'}</Button></HashLink>
        <HashLink to="/#about-page"><Button isSelected={tabSelected == 'About' ? true : false} onClick={() => setTabSelected('About')} >{tabSelected == 'About' ? '>_Sobre' : 'Sobre'}</Button></HashLink>
        <HashLink to="/#project-page"><Button isSelected={tabSelected == 'Project' ? true : false} onClick={() => setTabSelected('Project')} >{tabSelected == 'Project' ? '>_Projetos' : 'Projetos'}</Button></HashLink>
        <HashLink to="/#contact-page"><Button isSelected={tabSelected == 'Contact' ? true : false} onClick={() => setTabSelected('Contact')} >{tabSelected == 'Contact' ? '>_Contato' : 'Contato'}</Button></HashLink>
        </HeaderButtons>
      </HeaderComponent>
    </>
  );
};

export default Header;
