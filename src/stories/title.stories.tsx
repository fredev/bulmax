import React from "react";
import Title from "../components/Title";
import { StoryButtonContainer } from "./utils";

export default { title: "Components/Title" };

export const BaseTitleComponent = () => (
  <StoryButtonContainer>
    <p style={{color: "#eee"}} > Base Title </p>
    <Title>
      Title
    </Title>

    <p style={{ color: "#eee" }} > Spaced Title </p>
    <Title spaced>
      Title
    </Title>

    <p style={{ color: "#eee" }}> Size 1 Title </p>
    <Title is1>
      Title
    </Title>

    <p style={{ color: "#eee" }}> Size 2 Title </p>
    <Title is2>
      Title
    </Title>

    <p style={{ color: "#eee" }}> Size 3 Title (default) </p>
    <Title is3>
      Title
    </Title>

    <p style={{ color: "#eee" }}> Size 4 Title </p>
    <Title is4>
      Title
    </Title>

    <p style={{ color: "#eee" }}> Size 5 Title </p>
    <Title is5>
      Title
    </Title>

    <p style={{ color: "#eee" }}> Size 6 Title </p>
    <Title is6>
      Title
    </Title>
  </StoryButtonContainer>
);