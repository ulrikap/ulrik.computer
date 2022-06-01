import type { IHeaderTitleProps } from "@view/components/HeaderTitle";
import HeaderTitle from "@view/components/HeaderTitle";
import HeaderMenu from "@view/compositions/HeaderMenu";
import Box from "@webgl/threejs/Box";
import type { THeaderMenuItem } from "./HeaderMenuItem";
import HeaderMenuItem from "./HeaderMenuItem";

export interface IHeaderProps {
  HeaderTitleProps: IHeaderTitleProps;
  options: THeaderMenuItem[];
}

const defaultStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "5fr 1fr",
  height: "200px",
  zIndex: "50",
};

const Header = ({ HeaderTitleProps, options }: IHeaderProps) => {
  return (
    <header style={defaultStyle}>
      <HeaderTitle {...HeaderTitleProps} />
      <HeaderMenu>
        <Box />
      </HeaderMenu>
    </header>
  );
};

export default Header;
