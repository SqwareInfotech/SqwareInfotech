import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";
import { grid } from "../assets";
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Workfolio = () => {
  return(
  
  <Section crosses id="workfolio">
    <div className="container">
      <Heading tag="Work Done at Sqware Infotech" title="What we’ve worked on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-8 md:pb-[7rem]">
        {roadmap.map((item) => {
          return (
            <motion.div
              className={`md:flex even:md:translate-y-[8rem] p-1 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
              initial={{
                opacity: 0,
                x: item.id % 2 === 0 ? -50 : 50,
                y: window.innerWidth < 768 ? 0 : item.id % 2 === 0 ? 0 : 125,
              }}
              whileInView={{
                opacity: 1,
                x: 0, 
                transition: {
                  duration: 1 
                }
              }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">

                  <div className="my-10 -my-10 -mx-15">
                    <img
                      className="w-full opacity-30"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <motion.h4
                  className="h4 mb-4 gradient-text"
                  variants={textVariants}
                  whileHover={{ scale: 1.1 }}  // Title scales up on hover
                >
                  {item.title}
                </motion.h4>

                <motion.p
                  className="body-2 text-n-4"
                  variants={textVariants}
                  whileHover={{ scale: 1.05 }}  // Text grows slightly on hover
                >
                  {item.text}
                </motion.p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </Section>
);
}

export default Workfolio;
