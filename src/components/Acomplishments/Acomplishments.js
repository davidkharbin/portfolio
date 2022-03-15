import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxIcon, BoxText } from './AcomplishmentsStyles';
import { AcomplishmentsData } from '../../constants/constants';

const Acomplishments = () => (
  <Section id='accomplishments'>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {AcomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxIcon>{card.icon}</BoxIcon>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;