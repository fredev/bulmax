import React from 'react';
import { StoryContainer } from './utils';
import Box from '../components/Box';

export default { title: 'Elements/Box' };

export const BaseBox = () => (
  <StoryContainer>
    <p style={{color: '#777'}}> Base Box </p>
    <Box>
      <ol>
        <li> Bulma </li>
        <li> Box </li>
        <li> Component </li>
      </ol>
    </Box>
  </StoryContainer>
);
