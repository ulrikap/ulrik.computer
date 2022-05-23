import useBlog from "@domain/pages/useBlog";
import Link from "@view/components/Link";
import Header from "@view/compositions/Header";

export const Blog = () => {
  const { HeaderProps, LinkProps } = useBlog();
  return (
    <>
      <Header {...HeaderProps} />
      <Link {...LinkProps}>Go back</Link>
    </>
  );
};

export default Blog;
