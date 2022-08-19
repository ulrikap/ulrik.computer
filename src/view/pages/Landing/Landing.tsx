import useLanding from "@domain/pages/useLanding";
import Header from "@view/compositions/Header";
import TwoPartSection from "@view/components/TwoPartSection";
import Section from "@view/components/Section";
import Image from "@view/components/Image";
import Planes from "@webgl/threejs/Planes";
import Boxes from "@webgl/threejs/Boxes";
import StickySection from "@view/components/StickySection";

export const Landing = () => {
  const { HeaderProps, WrapperProps, ImageProps } = useLanding();

  return (
    <>
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          display: "block",
          zIndex: "-1000",
        }}
      >
        <Boxes />
      </div>
      <Header {...HeaderProps} />
      <StickySection />
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section />
      <Section />
    </>
  );
};
