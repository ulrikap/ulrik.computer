import { ISectionProps } from "@view/components/Section";
import { ISimpleCanvasProps } from "@view/components/SimpleCanvas";
import { IHeaderProps } from "@view/compositions/Header";

interface ILandingProps {
  HeaderProps: IHeaderProps;
  CanvasProps: ISimpleCanvasProps;
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
  };
};

export default useLanding;
