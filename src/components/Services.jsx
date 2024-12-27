import { services } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/GradientLight";
import ClipPath from "../assets/svg/ClipPath";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import ButtonSvg from "../assets/svg/ButtonSvg";


const Services = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [navigateToContact, setNavigateToContact] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const closeModal = () => setSelectedService(null);

  const navigateToContactUs = () => {
    setSelectedService(null)
    setNavigateToContact(true);
  };

  useEffect(() => {
    if (navigateToContact) {
      document.querySelector('#contactus')?.scrollIntoView({ behavior: 'smooth' });
      setNavigateToContact(false);
    }
  }, [navigateToContact]);

  return (
    <Section crosses id="services">
      <div className="container relative">
        <Heading
          tag="Services at Sqware Infotech"
          title="Develop Smarter, Grow Bigger with Sqware Infotech"
        />

        {/* <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {services.map((item) => (
            <motion.div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
              style={{
                backgroundImage: `url("${item.backgroundUrl}")`,
              }}
              key={item.id}
              onMouseEnter={() => setHoveredCardId(item.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              whileHover={{ scale: 1.02 }} // Slightly scale up on hover
              initial={{ opacity: 0, y: 50 }} // Animation when card enters view
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              viewport={{ once: false }}
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
                      className="w-full h-full object-cover blur-lg"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </motion.div>
          ))}
        </div> */}

        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {services.map((item) => (
            <motion.div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem] cursor-pointer"
              style={{
                backgroundImage: `url("${item.backgroundUrl}")`,
              }}
              key={item.id}
              onMouseEnter={() => setHoveredCardId(item.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              viewport={{ once: false }}
              onClick={() => setSelectedService(item)}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
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
                  <p
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"                >
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
                      className="w-full h-full object-cover blur-lg"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 backdrop-blur-md z-[100]">
            <div className="relative bg-n-8 text-white rounded-lg w-11/12 max-w-3xl h-[80vh] md:max-h-[576px] shadow-xl overflow-y-auto">
              {/* Close Button */}
              <button
                className="top-2 right-2 button absolute inline-flex items-center justify-center h-11 transition-colors lg:text-n-1 lg:hover:text-n-1/50 px-3 text-n-1 ml-auto"
                onClick={closeModal}
              >
                <MenuSvg openNavigation={true} />
                {ButtonSvg(false)}
              </button>

              {/* Modal Content */}
              <div className="flex flex-col justify-between h-full p-6">
                {/* Title and Content */}
                <div className="flex-grow">
                  <h2 className="text-3xl font-extrabold gradient-text text-center pt-4 px-6 mb-4">
                    {selectedService.title}
                  </h2>
                  <p className="text-lg text-gray-300 text-left leading-relaxed">
                    {selectedService.detailedText}
                  </p>
                  <ul className="list-disc pl-8 mt-4 text-gray-400">
                    {selectedService.subServices?.map((subService, index) => (
                      <li
                        key={index}
                        className="mb-2 text-lg text-gray-200 hover:text-color-2 transition-colors"
                      >
                        {subService}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Us Button */}
                <div className="flex justify-center mt-6">
                  <Button
                    className="flex w-full lg:text-base"
                    onClick={navigateToContactUs}
                  >
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}



      </div>
    </Section>
  );
};

export default Services;
