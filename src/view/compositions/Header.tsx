import type { IHeaderTitleProps } from "@view/components/HeaderTitle";
import HeaderTitle from "@view/components/HeaderTitle";
import type { THeaderMenuItem } from "./HeaderMenuItem";

export interface IHeaderProps {
  HeaderTitleProps: IHeaderTitleProps;
  options: THeaderMenuItem[];
}

const defaultStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gridTemplateRows: "5fr 1fr",
  height: "200px",
  zIndex: "50",
};

const Header = ({ HeaderTitleProps, options }: IHeaderProps) => {
  return (
    <header style={defaultStyle}>
      <HeaderTitle {...HeaderTitleProps} />
    </header>
  );
};

export default Header;
