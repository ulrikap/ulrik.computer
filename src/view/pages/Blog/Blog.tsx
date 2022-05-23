import useBlog from "@domain/pages/useBlog";
import Header from "@view/compositions/Header";

export const Blog = () => {
  const { HeaderProps } = useBlog();
  return (
    <>
      <Header {...HeaderProps} />
    </>
  );
};

export default Blog;
