import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:czaw601@gmail.com'>czaw601@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:630-456-0447'>(630) 456-0447</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Resume</LinkTitle>
          <LinkItem href='#'>Latest Resume</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Always Learning</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/davidkharbin'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/david-k-harbin/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://twitter.com/davidkharbin'>
            <AiFillTwitterCircle size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
