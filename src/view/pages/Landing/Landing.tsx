import { useEffect } from "react";
import useLanding from "@domain/pages/useLanding";
import initTriangle from "@webgl/elements/triangle";
import Header from "@view/compositions/Header";
import SimpleCanvas from "@view/components/SimpleCanvas";
import Section from "@view/components/Section";
import Link from "@view/components/Link";

export const Landing = () => {
  const { HeaderProps, CanvasProps, LinkProps } = useLanding();

  useEffect(() => {
    initTriangle();
  }, []);

  return (
    <>
      <Header {...HeaderProps} />
      <Section>
        <SimpleCanvas {...CanvasProps} />
        <Link {...LinkProps}>Go to blog</Link>
      </Section>
    </>
  );
};
