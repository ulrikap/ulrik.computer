import styled from "styled-components";
import type { IImageProps } from "@view/components/Image";
import Image from "@view/components/Image";

export interface IHoverableImageProps {
  ImageProps: IImageProps;
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  div {
    position: absolute;
    width: 0;
    display: block;
    height: 100%;
    background-color: grey;
    transition: all 0.4s ease-in;
    z-index: 10;
    opacity: 0;
  }
  &:hover {
    div {
      width: 100%;
      opacity: 0.5;
      color: red;
    }
  }
`;

const HoverableImage = ({ ImageProps }: IHoverableImageProps) => {
  return (
    <Wrapper>
      <div />
      <Image {...ImageProps} />
    </Wrapper>
  );
};

export default HoverableImage;
