import Section from "./Section";
// import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { contactDetails } from "../constants";




const variants = {
    initial: {
        y: 200,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const ContactUs = () => {
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const controls = useAnimation();

    const isInView = useInView(ref, { margin: "200px" });

    useEffect(() => {
        // If the element is in view when the component mounts, trigger the animation
        if (isInView) {
            controls.start("animate");
        } else {
            controls.start("initial"); // Reset animation when out of view
        }
    }, [isInView, controls]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_l7q34m4",
                "template_o834ugh",
                formRef.current,
                "549o8oEW7a8nZQK-K"
            )
            .then(
                (result) => {
                    setTimeout(() => {
                        setSuccess(true);
                        setError(false);
                        clearFormFields();
                      }, 1000);
                },
                (error) => {
                    setSuccess(false);
                    setError(true);
                    console.log(error.text);
                }
            );
    };

    const clearFormFields = () => {
        formRef.current.reset();
      };

    return (
        <Section crosses id="contactus"
        >
            <div className="container relative z-2 ">


                <Heading
                    tag="Connect with Sqware Infotech"
                    title="Your Vision, Our Expertise"
                />

                <div className="relative">
                    <motion.div
                        ref={ref}
                        className="flex items-center gap-12 container mx-auto h-full p-6 flex-col lg:flex-row"
                        variants={variants}
                        initial="initial"
                        animate={controls}
                    >
                        <motion.div className="flex flex-col gap-10 text-left lg:text-left" variants={variants} animate={controls}>
                            <motion.h1 className="text-[64px] leading-tight lg:text-[100px] gradient-text" variants={variants} animate={controls}>Let’s work together</motion.h1>

                            {contactDetails.map((item) => (
                                <motion.div key={item.id} className="text-lg lg:text-xl" variants={variants} animate={controls}>
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <span>{item.value}</span>
                                </motion.div>
                            ))}

                        </motion.div>
                        <div className="relative w-full max-w-xl">
                            <motion.div
                                className="absolute inset-0 z-[-1] flex justify-center"
                                initial={{ opacity: 1 }}
                                whileInView={{ opacity: 0 }}
                                transition={{ delay: 2, duration: 1 }}
                                animate={controls}
                            >
                                <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#38b6ff" />
                                            <stop offset="100%" stopColor="#ff3131" />
                                        </linearGradient>
                                    </defs>
                                    <motion.path
                                        stroke="url(#gradient)"
                                        strokeWidth={0.2}
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: isInView ? 1 : 0 }}
                                        transition={{ duration: 3 }}
                                        d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                                        M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
                                        C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
                                        c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
                                        c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
                                        c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
                                        c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
                                        c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
                                        c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
                                        c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
                                        c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
                                        l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
                                        C32.666,7.326,25.339,0,16.333,0z"
                                    />
                                </svg>
                            </motion.div>

                            <motion.form
                                ref={formRef}
                                onSubmit={sendEmail}
                                className="flex flex-col space-y-4 py-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 1 }}
                            >
                                <motion.input
                                    type="text"
                                    required
                                    placeholder="Name"
                                    name="name"
                                    className="p-4 rounded-md bg-transparent border border-white text-white focus:outline-none"
                                    disabled={success} // Disable input after success
                                    initial={{ opacity: 1 }}
                                    animate={success ? { opacity: 0.5 } : { opacity: 1 }} // Animate opacity on success
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.input
                                    type="email"
                                    required
                                    placeholder="Email"
                                    name="email"
                                    className="p-4 rounded-md bg-transparent border border-white text-white focus:outline-none"
                                    disabled={success} // Disable input after success
                                    initial={{ opacity: 1 }}
                                    animate={success ? { opacity: 0.5 } : { opacity: 1 }} // Animate opacity on success
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.textarea
                                    rows={8}
                                    placeholder="Message"
                                    name="message"
                                    className="p-4 rounded-md bg-transparent border border-white text-white focus:outline-none"
                                    disabled={success} // Disable textarea after success
                                    initial={{ opacity: 1 }}
                                    animate={success ? { opacity: 0.5 } : { opacity: 1 }} // Animate opacity on success
                                    transition={{ duration: 0.5 }}
                                />
                                <Button
                                    className={`flex ${success ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                    type="submit"
                                    disabled={success} // Disable button after success
                                >
                                    {success ? "Submitted!" : "Contact us"}
                                </Button>
                                {error && <p className="text-red-500">Oops, something went wrong!</p>}
                                {success && <p className="text-green-500">We got your mail!</p>}
                            </motion.form>
                        </div>
                    </motion.div>
                    <LeftLine />
                    <RightLine />
                </div>

            </div>
        </Section>

    );
};

export default ContactUs;
