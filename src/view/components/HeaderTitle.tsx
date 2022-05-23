export interface IHeaderTitleProps {
  title: string;
}

const HeaderTitle = ({ title }: IHeaderTitleProps) => {
  return <h1> {title}</h1>;
};

export default HeaderTitle;
