import { useEffect } from "react";

export interface ISectionProps {
  SectionProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  children?: React.ReactNode | React.ReactNode[];
  even?: boolean;
  blank?: boolean;
}

export const defaultStyle: React.CSSProperties = {
  display: "grid",
  justifyContent: "center",
  width: "100vw",
  height: "200vh",
};

const StickySection = (props: ISectionProps) => {
  const styles = { ...defaultStyle, ...props.SectionProps?.style };
  let zoom;
  useEffect(() => {
    zoom = document.querySelector(".zoom");
  });
  const minZoom = 1;
  const maxZoom = 2;

  addEventListener("scroll", (e) => {
    const vh = window.innerHeight / 100;
    const scrollTop = document.documentElement.scrollTop;
    const start = 100 * vh;
    const stop = 200 * vh;
    if (scrollTop > start && scrollTop < stop) {
      const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);
      zoom.style.transform = `scale(${scale})`;
    }
  });

  return (
    <section style={{ ...styles }} className={"wrap"}>
      <img
        style={{
          position: "sticky",
          top: "20vh",
          willChange: "transform",
          transform: "scale(2.2)",
          objectFit: "cover",
          width: "100%",
        }}
        className="zoom"
        src="https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto/uploads/2020/06/SOC101_Portfolio_Guide.png"
      />
    </section>
  );
};

export default StickySection;
