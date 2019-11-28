import React from "react";
import Notification from "../elements/Notification";
import { StoryButtonContainer } from "./utils";

export default { title: 'Elements/Notification' };

export const BaseNotification = () => (
  <StoryButtonContainer>
    <Notification> Base Notification </Notification>
  </StoryButtonContainer>
);

export const Colors = () => (
  <StoryButtonContainer>
    <Notification primary> Primary </Notification>
    <Notification link> Link </Notification>
    <Notification info> Info </Notification>
    <Notification success> Success </Notification>
    <Notification warning> Warning </Notification>
    <Notification danger> Danger </Notification>
  </StoryButtonContainer>
)