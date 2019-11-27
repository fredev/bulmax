import React from "react";
import Image from "../elements/Image";
import { StoryButtonContainer } from "./utils";

export default { title: 'Elements/Image' };

export const BaseImage = () => (
  <StoryButtonContainer>
    <p style={{color: "#eee", marginBottom: 20}}> Base Image Element </p>
    <Image source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg?resize=480:*"/>
  </StoryButtonContainer>
);

export const Sizes = () => (
  <StoryButtonContainer>
    <p style={{ color: "#eee", marginBottom: 20 }}> Image Size 16 </p>
    <Image is16 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg?resize=480:*"/>

    <p style={{ color: "#eee", marginBottom: 20 }}> Image Size 24 </p>
    <Image is24 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg?resize=480:*" />

    <p style={{ color: "#eee", marginBottom: 20 }}> Image Size 32 </p>
    <Image is32 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg?resize=480:*" />

    <p style={{ color: "#eee", marginBottom: 20 }}> Image Size 48 </p>
    <Image is48 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg?resize=480:*" />

    <p style={{ color: "#eee", marginBottom: 20 }}> Image Size 64 </p>
    <Image is64 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg?resize=480:*" />

    <p style={{ color: "#eee", marginBottom: 20 }}> Image Size 96 </p>
    <Image is96 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg?resize=480:*" />

    <p style={{ color: "#eee", marginBottom: 20 }}> Image Size 128 </p>
    <Image is128 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg?resize=480:*" />
  </StoryButtonContainer>
);

export const Ratios = () => (
  <StoryButtonContainer>
    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 1 By 1 </p>
    <Image is1by1 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg " />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 5 By 4 </p>
    <Image is5by4 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 4 By 3 </p>
    <Image is4by3 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 3 By 2 </p>
    <Image is3by2 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 5 By 3 </p>
    <Image is5by3 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 16 By 9 </p>
    <Image is16by9 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 2 By 1 </p>
    <Image is2by1 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 3 By 1 </p>
    <Image is3by1 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 4 By 5 </p>
    <Image is4by5 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />


    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 3 By 4 </p>
    <Image is3by4 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 2 By 3 </p>
    <Image is2by3 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 3 By 5 </p>
    <Image is3by5 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 9 By 16 </p>
    <Image is9by16 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 1 By 2 </p>
    <Image is1by2 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Image Ratio 1 By 3 </p>
    <Image is1by3 source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />
  </StoryButtonContainer>
);

export const Modifiers = () => (
  <StoryButtonContainer>

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Fullwidth Image </p>
    <Image fullwidth source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Square Image </p>
    <Image square source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />

    <p style={{ color: "#eee", marginBottom: 20, marginTop: 20 }}> Rounded Image </p>
    <Image is128 rounded source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/google-pixel-4-1068-1571345153.jpg" />
  </StoryButtonContainer>
);