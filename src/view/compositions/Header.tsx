import type { IHeaderTitleProps } from "@view/components/HeaderTitle";
import HeaderTitle from "@view/components/HeaderTitle";
import HeaderMenu from "@view/compositions/HeaderMenu";
import type { THeaderMenuItem } from "./HeaderMenuItem";
import HeaderMenuItem from "./HeaderMenuItem";

export interface IHeaderProps {
  HeaderTitleProps: IHeaderTitleProps;
  options: THeaderMenuItem[];
}

const defaultStyle: React.CSSProperties = {
  position: "fixed",
  display: "grid",
  gridTemplateColumns: "5fr 1fr",
  gridTemplateRows: "5fr 1fr",
  height: "200px",
  zIndex: "50",
};

const Header = ({ HeaderTitleProps, options }: IHeaderProps) => {
  return (
    <header style={defaultStyle}>
      <HeaderTitle {...HeaderTitleProps} />
      <HeaderMenu>
        {options.map((item) => (
          <HeaderMenuItem {...item} />
        ))}
      </HeaderMenu>
    </header>
  );
};

export default Header;
