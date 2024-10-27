import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
// import { Gradient } from "./design/Roadmap";
import { motion } from 'framer-motion';
import { useState } from "react";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,  // Stagger animations for cool effect
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0.3, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
};

const Workfolio = () => {
  const [isHovered, setIsHovered] = useState(false);

  return(
  
  <Section crosses id="workfolio">
    <div className="container md:pb-10">
      <Heading tag="Work Done at Sqware Infotech" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-1 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
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
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

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
            </div>
          );
        })}

      </div>

{/* <motion.div
      className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {roadmap.map((item) => {
        const status = item.status === "done" ? "Done" : "In progress";

        return (
          <motion.div
            className={`md:flex even:md:translate-y-[7rem] p-1 rounded-[2.5rem] ${
              item.colorful ? "bg-conic-gradient" : "bg-n-6"
            }`}
            key={item.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}  // Slight tilt and scale on hover
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ perspective: '1000px' }}  // 3D perspective only for card
          >
            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <motion.div className="absolute top-0 left-0 max-w-full" variants={imageVariants}>
                <img
                  className="w-full"
                  src={grid}
                  width={550}
                  height={550}
                  alt="Grid"
                />
              </motion.div>

              <div className="relative z-1">
                <motion.div
                  className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20"
                  variants={textVariants}
                >
                  <Tagline>{item.date}</Tagline>

                  <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                    <motion.img
                      className="mr-2.5"
                      src={item.status === "done" ? check2 : loading1}
                      width={16}
                      height={16}
                      alt={status}
                      whileHover={{ scale: 1.1 }}  // Icon scales up on hover
                    />
                    <motion.div className="tagline" whileHover={{ scale: 1.1 }}>
                      {status}
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div className="mb-10 -my-10 -mx-15" variants={imageVariants}>
                  <img
                    className="w-full opacity-30"
                    src={item.imageUrl}
                    width={628}
                    height={426}
                    alt={item.title}
                  />
                </motion.div>

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
    </motion.div> */}
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="">Adding more...</Button>
      </div>
    </div>
  </Section>
);
}

export default Workfolio;
