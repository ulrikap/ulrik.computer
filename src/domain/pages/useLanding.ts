import { ILinkProps } from "@view/components/Link";
import { ISimpleCanvasProps } from "@view/components/SimpleCanvas";
import { IHeaderProps } from "@view/compositions/Header";

interface ILandingProps {
  HeaderProps: IHeaderProps;
  CanvasProps: ISimpleCanvasProps;
  LinkProps: ILinkProps;
}

const useLanding = (): ILandingProps => {
  return {
    HeaderProps: {
      HeaderTitleProps: {
        title: "Ulriks Website",
      },
    },
    CanvasProps: {
      id: "game-surface",
      height: "800px",
      width: "800px",
    },
    LinkProps: {
      ReactRouterLinkProps: {
        to: "/blog",
      },
    },
  };
};

export default useLanding;
