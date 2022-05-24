import useLanding from "@domain/pages/useLanding";
import Header from "@view/compositions/Header";
import TwoPartSection from "@view/components/TwoPartSection";

export const defaultStyle: React.CSSProperties = {
  width: "100%",
  alignItems: "end",
  fontSize: "7vw",
  fontWeight: "300",
  display: "grid",
  justifyItems: "end",
  mixBlendMode: "darken",
  zIndex: "30",
  transition:
    " 0.5s" /* Add a transition effect (when scrolling - and font size is decreased) */,
};

export const Landing = () => {
  const { HeaderProps } = useLanding();

  return (
    <>
      <Header {...HeaderProps} />
      <section style={defaultStyle}>
        <TwoPartSection>
          <div>first</div>
          <div>second</div>
        </TwoPartSection>
        <TwoPartSection reverse={true}>
          <div>second</div>
          <div>first</div>
        </TwoPartSection>
        <TwoPartSection>
          <div>second</div>
          <div>first</div>
        </TwoPartSection>
        <TwoPartSection reverse={true}>
          <div>second</div>
          <div>first</div>
        </TwoPartSection>
      </section>
    </>
  );
};
