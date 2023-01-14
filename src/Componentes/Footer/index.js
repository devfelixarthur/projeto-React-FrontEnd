import React from 'react'
import { FooterContainer, ImagemFooter } from './styled'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
 

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        Criado Por: Arthur Felix
        <p>Email: dev.felixarthur@gmail.com</p>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/arthurflandrade/' target="_blank">
        <ImagemFooter src={linkedin}/>
        </a>
      <a href='https://github.com/devfelixarthur' target="_blank">
        <ImagemFooter src={github}/>
        </a>
      </div>
    </FooterContainer>
  )
}

export default Footer

