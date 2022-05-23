import HeaderTitle, { IHeaderTitleProps } from "@view/components/HeaderTitle";

export interface IHeaderProps {
  HeaderTitleProps: IHeaderTitleProps;
}

const defaultStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};

const Header = ({ HeaderTitleProps }: IHeaderProps) => {
  return (
    <header style={defaultStyle}>
      <HeaderTitle {...HeaderTitleProps} />
    </header>
  );
};

export default Header;
