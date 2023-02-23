import React from 'react';
import Link from 'next/link';
//import document from '@/../public/assets/CV-David-frontend-developer-english-version.pdf'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          David Medina: <br/>
  Front End Developer <br/>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
          with the objective of create awesome apps. From amazing pages in the client side, to solid logic in the server side. All while accepting new challenges to Learn new things and keep improving myself every day!
        </SectionText>
        
        <Button onClick={props.handleClick}>
          <Link href='/assets/CV-David-frontend-developer-english-version.pdf' download='davidMedinaCV' target='_blank'>
          Download CV
          </Link>
          </Button>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;
