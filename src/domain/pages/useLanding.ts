import type { IHeaderProps } from "@view/compositions/Header";

interface ILandingProps {
  HeaderProps: IHeaderProps;
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
  };
};

export default useLanding;
