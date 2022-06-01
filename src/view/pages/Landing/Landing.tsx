import useLanding from "@domain/pages/useLanding";
import Header from "@view/compositions/Header";
import TwoPartSection from "@view/components/TwoPartSection";
import Section from "@view/components/Section";
import Image from "@view/components/Image";
import Box from "@webgl/threejs/Box";

export const Landing = () => {
  const { HeaderProps, WrapperProps, ImageProps, SectionOneProps } =
    useLanding();

  return (
    <>
      <Header {...HeaderProps} />
      <Section {...WrapperProps}>
        <TwoPartSection>
          <Box />
          <div>Heisann på deisann</div>
        </TwoPartSection>
        <TwoPartSection reverse={true}>
          <div>This is some text to check if this breaks correctly</div>
          <Image {...ImageProps} />
        </TwoPartSection>
        <TwoPartSection>
          <div>second</div>
          <div>first</div>
        </TwoPartSection>
        <TwoPartSection reverse={true}>
          <div>second</div>
          <div>first</div>
        </TwoPartSection>
      </Section>
    </>
  );
};
