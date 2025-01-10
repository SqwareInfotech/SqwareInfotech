import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/ContactUs";

import { Globe } from "./Globe"; // Adjust path as per your project structure


const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeInOut", staggerChildren: 0.3 },
    },
};

const AboutUs = () => {
    return (
        <Section crosses id="about-us">
            <div className="container relative z-2">
                <Heading
                    tag="About Sqware Infotech"
                    title="Purpose Driven, Impact Focused"
                />


                    <motion.div
                        className="flex items-center gap-6 h-full flex-col lg:flex-row lg:justify-evenly"
                        initial="initial"
                        variants={aboutVariants}
                    >

                        <div className="flex-1 text-left md:max-w-[42rem]">
                            <motion.div
                                className="flex flex-col items-start gap-6 text-white text-center md:text-left "
                                initial="hidden"
                                whileInView="visible"
                                variants={aboutVariants}
                                viewport={{ once: true, margin: '-100px' }}
                            >
                                <motion.p className="text-lg lg:text-xl max-w-3xl" variants={aboutVariants}>
                                    We are innovators, problem solvers, and catalysts. At Sqware Infotech,
                                    our goal is to help businesses harness the power of technology to
                                    deliver impactful solutions and drive success.
                                </motion.p>
                                <motion.div className="text-lg py-4 lg:text-xl font-medium" variants={aboutVariants}>
                                    <h3 className="text-4xl font-bold gradient-text">Our Vision</h3>
                                    <p className="mt-2">
                                        To be a leading tech company that delivers cutting-edge solutions
                                        that transform industries and inspire change.
                                    </p>
                                </motion.div>
                                <motion.div className="text-lg py-4 lg:text-xl font-medium" variants={aboutVariants}>
                                    <h3 className="text-4xl font-bold gradient-text">Our Mission</h3>
                                    <p className="mt-2">
                                        Creating technology solutions that turn our clients' visions into
                                        impactful realities, with a focus on innovation, quality, and
                                        sustainability.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="relative">
                            <Globe/>
                        </div>
                    </motion.div>
                    <LeftLine />
                    <RightLine />
            </div>
        </Section>
    );
};

export default AboutUs;
