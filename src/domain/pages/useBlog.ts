import type { ILinkProps } from "@view/components/Link";
import type { ISimpleCanvasProps } from "@view/components/SimpleCanvas";
import type { IHeaderProps } from "@view/compositions/Header";

interface IBlogProps {
  HeaderProps: IHeaderProps;
  LinkProps: ILinkProps;
  CanvasProps: ISimpleCanvasProps;
}

const useBlog = (): IBlogProps => {
  return {
    HeaderProps: {
      HeaderTitleProps: {
        title: "Ulriks Website",
      },
      options: [],
    },
    CanvasProps: {
      id: "spinning-cube",
      height: "800px",
      width: "800px",
    },
    LinkProps: {
      ReactRouterLinkProps: {
        to: "/",
      },
    },
  };
};

export default useBlog;
