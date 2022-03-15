import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AcomplishmentsData } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    {/* <SectionTitle>Person Acomplishments</SectionTitle>
    <Boxes>
      {AcomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxNum>{card.text}+</BoxNum>
        </Box>
      ))}
    </Boxes> */}
  </Section>
);

export default Acomplishments;