import { useEffect } from "react";
import { Link } from "react-router-dom";
import useLanding from "@domain/pages/useLanding";
import initTriangle from "@webgl/elements/triangle";
import Header from "@view/compositions/Header";
import SimpleCanvas from "@view/components/SimpleCanvas";
import Section from "@view/components/Section";

export const Landing = () => {
  const { HeaderProps, CanvasProps } = useLanding();

  useEffect(() => {
    initTriangle();
  }, []);

  return (
    <>
      <Header {...HeaderProps} />
      <Section>
        <SimpleCanvas {...CanvasProps} />
        <Link to="/blog">Go to blog</Link>
      </Section>
    </>
  );
};
