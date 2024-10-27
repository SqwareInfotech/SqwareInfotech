import { services } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/GradientLight";
import ClipPath from "../assets/svg/ClipPath";
import { useState } from 'react';

const Services = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);


  return (
    <Section crosses id="services">
      <div className="container relative z-2">
        <Heading
                tag="Services at Sqware Infotech"
                title="Develop Smarter, Grow Bigger with Sqware Infotech"
            />

        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {services.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
              style={{
                backgroundImage: `url("${item.backgroundUrl}")`,
              }}
              key={item.id}
              onMouseEnter={() => setHoveredCardId(item.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >

              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <div className="flex-grow">
                  <h5 className="h5 mb-5 gradient-text">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-center p-4">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Find more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && hoveredCardId === item.id && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
