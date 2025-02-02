import { curve, heroBackground } from "../assets";
import Section from "./Section";
import { BackgroundSqwaresHero, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Solving from "./Solving";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import TechLogos from "./TechLogos";
import { services, showCompanyLogos, showTechLogos } from "../constants";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] justify-center items-center">
          <h1 className="h1 mb-6 gradient-text">
            Ideas Squared into Impactful&nbsp;<br/>
            <span className="inline-block gradient-text relative">
              Innovations!{" "}
              <img
                src={curve}
                className="absolute top-[97%] rotate-1 left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mt-12 mb-6 text-n-2 lg:mb-8">
            Unleash the power of cutting-edge software solutions and AI-powered technologies. Unlock your full potential with us to fuel growth and turn bold <span>visions into reality</span> 
          </p>

        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="see-beyond aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={heroBackground}
                  className="w-full  scale-[2.4] -translate-y-[13%] md:scale-[1.39] md:-translate-y-[20%] lg:scale-[1.45] lg:-translate-y-[40%]"
                  width={1080}
                  height={1080}
                  alt="SeeBeyond"
                />

                <Solving className="absolute font-grotesk left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned >
                  <a href="#services">
                    <Notification
                      className="hidden absolute -left-[5.5rem] bottom-[15rem] w-[18rem] xl:flex"
                      title={services[0].title}
                    />
                  </a>
                  <a href="#services">
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[18.5rem] w-[18rem] xl:flex"
                      title={services[1].title}
                    />
                  </a>
                  <a href="#services">
                    <Notification
                      className="hidden absolute -left-[5.5rem] bottom-[7.5rem] w-[18rem] xl:flex"
                      title={services[2].title}
                    />
                  </a>
                  <a href="#services">
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title={services[3].title}
                    />
                  </a>
                  <a href="#services">
                    <Notification
                      className="hidden absolute -left-[5.5rem] bottom-[0rem] w-[18rem] xl:flex"
                      title={services[4].title}
                    />
                  </a>
                  <a href="#services">
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[3.5rem] w-[18rem] xl:flex"
                      title={services[5].title}
                    />
                  </a>
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full fade-bg"
              loading="eager"
              width={1080}
              height={1080}
              alt="hero"
            />
          </div>
          <BackgroundSqwaresHero className="z-0"/>
        </div>
        {showCompanyLogos && <CompanyLogos className="relative z-10 mt-20" />}
        {showTechLogos && <TechLogos className="relative z-10 mt-20" />}
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
