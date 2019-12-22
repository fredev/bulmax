import React from "react";
import Tag from "../elements/Tag";
import { StoryContainer } from "./utils";

export default { title: 'Elements/Tag' };

export const BaseTag = () => (
  <StoryContainer>
    <Tag> I'm a tag! </Tag>
  </StoryContainer>
);

export const Colors = () => (
  <StoryContainer>
    <Tag primary> Primary </Tag>
    <Tag link> Link </Tag>
    <Tag info> Info </Tag>
    <Tag success> Success </Tag>
    <Tag warning> Warning </Tag>
    <Tag danger> Danger </Tag>
    <Tag light> light </Tag>
    <Tag dark> Dark </Tag>
    <Tag black> Black </Tag>
    <Tag white> White </Tag>
  </StoryContainer>
);

export const Sizes = () => (
  <StoryContainer>
    <Tag normal> Normal Size </Tag>
    <Tag medium> Medium Size </Tag>
    <Tag large> Large Size </Tag>
  </StoryContainer>
);

export const Modifiers = () => (
  <StoryContainer>
    <Tag rounded> Rounded </Tag>
    <Tag hasdelete> with delete button</Tag>
  </StoryContainer>
);