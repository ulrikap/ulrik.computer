import { ILinkProps } from "@view/components/Link";
import { IHeaderProps } from "@view/compositions/Header";

interface IBlogProps {
  HeaderProps: IHeaderProps;
  LinkProps: ILinkProps;
}

const useBlog = (): IBlogProps => {
  return {
    HeaderProps: {
      HeaderTitleProps: {
        title: "Ulriks Website",
      },
    },
    LinkProps: {
      ReactRouterLinkProps: {
        to: "/",
      },
    },
  };
};

export default useBlog;
