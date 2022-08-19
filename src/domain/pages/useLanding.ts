import { IImageProps } from "@view/components/Image";
import { ISectionProps } from "@view/components/Section";
import { ISimpleCanvasProps } from "@view/components/SimpleCanvas";
import type { IHeaderProps } from "@view/compositions/Header";

interface ILandingProps {
  HeaderProps: IHeaderProps;
  WrapperProps: ISectionProps;
  ImageProps: IImageProps;
  SectionOneProps: {
    CanvasProps: ISimpleCanvasProps;
  };
}

const useLanding = (): ILandingProps => {
  return {
    HeaderProps: {
      HeaderTitleProps: {
        title: "Frontend & Mobile developer",
      },
      options: [
        {
          title: "Menu item 1",
          linkProps: { ReactRouterLinkProps: { to: "/blog" } },
        },
        {
          title: "Menu item 2",
          linkProps: { ReactRouterLinkProps: { to: "/blog" } },
        },
      ],
    },
    SectionOneProps: {
      CanvasProps: {
        style: {
          height: "100%",
          width: "100%",
        },
        id: "triangle-canvas",
      },
    },
    WrapperProps: {
      SectionProps: {
        style: {
          marginTop: "80vh",
        },
      },
    },
    ImageProps: {
      src: "https://img.freepik.com/free-vector/gradient-colored-portfolio-template_52683-78629.jpg?w=2000",
    },
  };
};

export default useLanding;
