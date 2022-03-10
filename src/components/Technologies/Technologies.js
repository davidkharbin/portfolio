import React from 'react';
import{FaNodeJs}from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import {SiAmazonaws} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>I have experience with a range of software engineering technologies and methodologies, specifically for  web applications</SectionText>
    <List>
      <ListItem>
        <GrReactjs size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JavaScript, HTML, CSS, React, MaterialUI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaNodeJs size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node, Express, PostgreSQL, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAmazonaws size='3rem' />
        <ListContainer>
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            AWS, Nginx
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;