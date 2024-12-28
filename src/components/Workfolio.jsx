import Heading from "./Heading";
import Section from "./Section";
import { projects } from "../constants";
import { grid } from "../assets";
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "../components/design/3d-card";

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Workfolio = () => {
  return (

    <Section crosses id="workfolio">
      <div className="container">
        <Heading tag="Work Done at Sqware Infotech" title="What we’ve worked on" />

        <div className="relative grid gap-10 md:grid-cols-2 md:gap-12 md:pb-[7rem]">
          {projects.map((item) => {
            return (
              <CardContainer
                className={`md:flex-even:md:translate-y-[8rem] p-1 rounded-[2.5rem] bg-conic-gradient`}
                key={item.id}
              >
                <CardBody className="relative flex flex-col justify-between p-8 bg-n-8 rounded-[2.4375rem] h-full md:h-[45rem] xl:h-[52rem] xl:p-15 xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img className="w-full min-h-fit" src={grid} alt="Grid" />
                  </div>

                  <div className="relative flex-grow">
                    <CardItem translateZ="50" className="h4 mb-4 gradient-text min-h-24">
                      {item.title}
                    </CardItem>

                    <CardItem translateZ="100" className="flex flex-grow w-full mt-4">
                      <img
                        src={item.imageUrl}
                        height="1000"
                        width="1000"
                        className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>

                    {/* Description positioned at the bottom */}
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="body-2 text-n-3 my-6 mb-auto"
                    >
                      {item.text}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Workfolio;
