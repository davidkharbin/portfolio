import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillCode } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import {RiBracesFill} from 'react-icons/ri'
import {IoCodeDownloadOutline} from 'react-icons/io5'

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons, Anchor } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={Anchor}>
          <IoCodeDownloadOutline size='3rem' /> <Span>David Harbin</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/davidkharbin'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/david-k-harbin/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/davidkharbin'>
        <AiFillTwitterCircle size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
