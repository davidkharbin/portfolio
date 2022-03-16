import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There <br />
        I&apos;m David, Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        Check out my personal and group projects, learn about my experience, technical skills, accomplishments, and passions!
      </SectionText>
      <Button
        onClick={() => window.location = 'https://github.com/davidkharbin'}>More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;