import React from 'react';

import { ButtonContent, ContactBorder, ContactButtonsContainer, ContactButtonText, ContactPage, ContactTitle, WhiteGithub, WhiteLinkedin, WhiteMail, WhiteWpp } from './Contact-Styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  
  function handleClick(link){
    window.open(link); 
  }

  function handleCopy(){
    navigator.clipboard.writeText('andryelblancodev@gmail.com');
    notify()
  }

  const notify = () => toast.success("Email copiado!");

  return (
    <ContactPage id='contact-page'>
      <ToastContainer />
      <ContactTitle>
        Você me encontra aqui!
      </ContactTitle>
      <ContactButtonsContainer>
        <ContactBorder colorOne={'#00FADC'} colorTwo={'#0064FA'} type='Back' onClick={() => handleClick('https://www.linkedin.com/in/andryel-blanco/')}>
          <ButtonContent>
            <WhiteLinkedin></WhiteLinkedin>
            <ContactButtonText>/AndryelBlanco</ContactButtonText>
          </ButtonContent>
        </ContactBorder>
        <ContactBorder colorOne={'#BD00FF'} colorTwo={'#6100FF'} type='Forward' onClick={() => handleClick('https://github.com/AndryelBlanco')}>
          <ButtonContent>
            <WhiteGithub></WhiteGithub>
            <ContactButtonText>/AndryelBlanco</ContactButtonText> 
          </ButtonContent>
        </ContactBorder>
        <ContactBorder colorOne={'#FF1F00'} colorTwo={'#FF5C00'} type='Back' onClick={() => handleCopy()}>
          <ButtonContent>
            <WhiteMail></WhiteMail>
            <ContactButtonText>Copiar e-mail</ContactButtonText>
          </ButtonContent>
        </ContactBorder>
        <ContactBorder colorOne={'#00FF75'} colorTwo={'#24FF00'} type='Forward' onClick={() => handleClick('https://api.whatsapp.com/send?phone=5553999507005&text=Ol%C3%A1%2C%20tudo%20bem%3F')}>
          <ButtonContent>
            <WhiteWpp></WhiteWpp>
            <ContactButtonText>Enviar Mensagem</ContactButtonText>        
          </ButtonContent>
        </ContactBorder>
      </ContactButtonsContainer>
    </ContactPage>
  )
};

export default Contact;
