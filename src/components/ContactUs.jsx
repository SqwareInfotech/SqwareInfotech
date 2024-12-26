import Section from "./Section";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { contactDetails, socials } from "../constants";




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
        if (isInView) {
            controls.start("animate");
        } else {
            controls.start("initial");
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
                        className="flex items-center gap-12 container mx-auto h-full flex-col lg:flex-row"
                        variants={variants}
                        initial="initial"
                        animate={controls}
                    >
                        <motion.div className="flex flex-col gap-6 text-left lg:text-left" variants={variants} animate={controls}>
                            <motion.h1 className="text-[64px] leading-tight lg:text-[100px] gradient-text" variants={variants} animate={controls}>Let’s work together</motion.h1>

                            {contactDetails.map((item) => ( item.show &&
                                <motion.div key={item.id} className="text-lg lg:text-xl" variants={variants} animate={controls}>
                                    <h2 className="font-semibold">{item.title}</h2>
                                    {item.title.toLowerCase() == 'Email'.toLowerCase() ? (
                                        <a
                                        href={socials[7].url}
                                        target="_blank"
                                        className="text-white transition duration-200 hover:text-color-2">
                                            <span>{item.value}</span>
                                        </a>
                                     ) : (
                                        <span>{item.value}</span>
                                    )}
                                </motion.div>
                            ))}

                        </motion.div>
                        <div className="relative w-full max-w-xl">
                            <motion.div
                                className="absolute inset-0 z-[-1] flex justify-center"
                                initial={{ opacity: 1 }}
                                whileInView={{ opacity: 0 }}
                                transition={{ delay: 2, duration: 2 }}
                                animate={controls}
                                viewport={{ once: true }}
                            >
                                <svg width="512px" height="512px" viewBox="0 0 64 64">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#38b6ff" />
                                            <stop offset="100%" stopColor="#ff3131" />
                                        </linearGradient>
                                    </defs>
                                    <motion.path
                                        stroke="url(#gradient)"
                                        strokeWidth={1}
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: isInView ? 1.1 : 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                        d="M12,13c-4.40644,0 -8,3.59356 -8,8v23c0,4.40644 3.59356,8 8,8h40c4.40644,0 8,-3.59356 8,-8v-16c0.0051,-0.36064 -0.18438,-0.69608 -0.49587,-0.87789c-0.3115,-0.18181 -0.69676,-0.18181 -1.00825,0c-0.3115,0.18181 -0.50097,0.51725 -0.49587,0.87789v16c0,3.32556 -2.67444,6 -6,6h-40c-3.32556,0 -6,-2.67444 -6,-6v-23c0,-3.32556 2.67444,-6 6,-6h40c3.11328,0 5.56893,2.3746 5.88086,5.40234l-25.8457,11.48828l-20.57031,-10.77734c-0.3168,-0.16617 -0.6982,-0.15067 -1.00048,0.04065c-0.30228,0.19132 -0.47951,0.52939 -0.4649,0.88683c0.0146,0.35744 0.21882,0.67993 0.53569,0.84596l21,11c0.27092,0.14181 0.59182,0.15188 0.87109,0.02734l27,-12c0.36115,-0.16059 0.59384,-0.51882 0.59375,-0.91406c0,-4.40644 -3.59356,-8 -8,-8z"
                                    />
                                </svg>
                            </motion.div>

                            <motion.form
                                ref={formRef}
                                onSubmit={sendEmail}
                                className="flex flex-col space-y-4 py-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 4, duration: 1 }}
                                viewport={{ once: true }}
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
                                    className={`flex lg:text-base ${success ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                    type="submit"
                                    disabled={success} // Disable button after success
                                >
                                    {success ? "Submitted!" : "Send message"}
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
