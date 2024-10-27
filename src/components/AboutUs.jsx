import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";
import { logoZRotate } from "../assets";



const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeInOut", staggerChildren: 0.2 },
    },
};

const AboutUs = () => {
    return (
        <Section crosses className="pt-5" id="aboutus">
            <Heading
                className="container"
                tag="About Sqware Infotech"
                title="Purpose Driven, Impact Focused"
            />


            <div className="relative container">
                <motion.div
                    className="flex items-center gap-12 container mx-auto h-full p-6 flex-col lg:flex-row"
                    initial="initial"
                    variants={aboutVariants}
                >

                    <div className="flex-1 text-left">
                        <motion.div
                            className="flex flex-col items-start gap-6 text-white text-center md:text-left"
                            initial="hidden"
                            whileInView="visible"
                            variants={aboutVariants}
                            viewport={{ once: false, margin: '-100px' }}
                        >
                            <motion.p className="text-lg lg:text-xl max-w-3xl" variants={aboutVariants}>
                                We are innovators, problem solvers, and creators. At Sqware Infotech,
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

                    <div className="relative w-full max-w-xl">


                        <div className="flex-1 flex justify-center lg:justify-end">
                            <motion.video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-50 h-auto brightness-120 contrast-125  " // Adjust the size as needed
                                variants={aboutVariants}
                            >
                                <source src={logoZRotate} type="video/webm" />
                                Your browser does not support the video tag.
                            </motion.video>
                        </div>
                    </div>
                </motion.div>
                <LeftLine />
                <RightLine />
            </div>


        </Section>
    );
};

export default AboutUs;
