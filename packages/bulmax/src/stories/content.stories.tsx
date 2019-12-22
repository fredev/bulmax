import React from "react";
import Content from "../elements/Content";
import { StoryContainer, StoryButtonContainer } from "./utils";

export default { title: 'Elements/Content' };


export const BasicContent = () => (

  <StoryContainer>
    <Content>
      <p style={{color: '#eee'}}> Basic Content Element </p>
    </Content>
  </StoryContainer>
);

export const Sizes = () => (
  <StoryButtonContainer>

    <Content small>
      <p style={{ color: '#eee' }}> Small size content </p>
    </Content>

    <Content medium>
      <p style={{ color: '#eee' }}> Medium size content </p>
    </Content>

    <Content large>
      <p style={{ color: '#eee' }}> Large size content </p>
    </Content>

  </StoryButtonContainer>
);