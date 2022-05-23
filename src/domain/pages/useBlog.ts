import { IHeaderProps } from "@view/compositions/Header";

interface IBlogProps {
  HeaderProps: IHeaderProps;
}

const useBlog = (): IBlogProps => {
  return {
    HeaderProps: {
      HeaderTitleProps: {
        title: "Ulriks Website",
      },
    },
  };
};

export default useBlog;
