import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Spans } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <nav style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom: "20" }}>
          <DiCssdeck size="3rem" /> <span style={{fontSize: "2rem"}}>DDevTechnologies</span>
        </nav>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>    
      <li>
        <Link href="#contact">
          <NavLink>Contact Me</NavLink>
        </Link>
      </li>     
    </Div2>
      <Div3>
        <Link href="https://github.com/davidms5" target='_blank'>
        <SocialIcons >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        </Link>
        <Link href='https://www.linkedin.com/in/david-medina-435a50199/' target='_blank'>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        </Link>
      </Div3>
    </Container>
);

export default Header;
