import React from "react";
import Subtitle from "../components/Subtitle";
import { StoryButtonContainer } from './utils';

export default { title: 'Components/Base Subtitle' };

export const BaseSubtitle = () => (
  <StoryButtonContainer>

    <p style={{color: '#888'}}> Base Subtitle </p>
    <Subtitle>
      I'm a subtitle!
    </Subtitle>
    
    <p style={{ color: '#888' }}> Spaced Subtitle </p>
    <Subtitle spaced>
      Subtitle
    </Subtitle>

    <p style={{ color: '#888' }}> Size 1 Subtitle </p>
    <Subtitle is1>
      SubTitle 1
    </Subtitle>

    <p style={{ color: '#888' }}> Size 2 Subtitle </p>
    <Subtitle is2>
      SubTitle 1
    </Subtitle>

    <p style={{ color: '#888' }}> Size 3 Subtitle </p>
    <Subtitle is3>
      SubTitle 1
    </Subtitle>

    <p style={{ color: '#888' }}> Size 4 Subtitle </p>
    <Subtitle is4>
      SubTitle 4
    </Subtitle>

    <p style={{ color: '#888' }}> Size 5 Subtitle </p>
    <Subtitle is5>
      SubTitle 5
    </Subtitle>

    <p style={{ color: '#888' }}> Size 6 Subtitle </p>
    <Subtitle is6>
      SubTitle 6
    </Subtitle>

  </StoryButtonContainer>
);