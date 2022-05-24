import useBlog from "@domain/pages/useBlog";
import Link from "@view/components/Link";
import Section from "@view/components/Section";
import SimpleCanvas from "@view/components/SimpleCanvas";
import Header from "@view/compositions/Header";
import initSpinningCube from "@webgl/elements/spinning_cube";
import { useEffect } from "react";

export const Blog = () => {
  const { HeaderProps, LinkProps, CanvasProps } = useBlog();

  useEffect(() => {
    initSpinningCube();
  }, []);

  return (
    <>
      <Header {...HeaderProps} />
      <Section>
        <SimpleCanvas {...CanvasProps} />
        <Link {...LinkProps}>Go back</Link>
      </Section>
    </>
  );
};

export default Blog;
