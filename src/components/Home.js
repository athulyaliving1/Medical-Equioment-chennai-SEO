import React, { useRef } from "react";

// import OxygenContrator from "./Card/OxygenContrator";
import ProjectBed from "../components/Card/Project/ProjectBed";
// import ProjectsCylinder from "./Card/ProjectCylinder";
import ProjectDisposal from "./Card/Project/ProjectDisposal";
// import ProjectsCylinder from "./Card/ProjectCylinder";
import Banner from "../components/Basic/Banner";
import ProjectsConcentrator from "./Card/Project/ProjectsConcentrator";
import ProjectsCot from "../components/Card/Project/ProjectsCot";
import ProjectsWheelchair from "./Card/Project/ProjectsWheelchair";
// import Testimonal from "./Card/Testimonal";
import { useInView } from "framer-motion";
import Title from "./Title";
import { LazyLoadComponent } from "react-lazy-load-image-component";
// import { Faq } from "./Card/Faq";
import AccordionTitle from "./Card/AccordionTitle";
import ContentSeo from "./Card/Project/ContentSeo";
import ContentSeo1 from "./Card/Project/ContentSeo1";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Home() {
  return (
    <div className="rounded-3xl bg-matisse-200">
      <LazyLoadComponent>
        <Section>
          <Banner />
        </Section>
        <Section>
          <Title />
        </Section>
        <Section>
          <ProjectsCot />
        </Section>
        <Section>
          <ProjectsWheelchair />
        </Section>
        <Section>
          <ProjectBed />
        </Section>
        <Section>
          <ProjectsConcentrator />
        </Section>
        <Section>
          <ProjectDisposal />
        </Section>
        <Section>
          <ContentSeo />
          <ContentSeo1 />
          <AccordionTitle />
        </Section>
      </LazyLoadComponent>
    </div>
  );
}

export default Home;
