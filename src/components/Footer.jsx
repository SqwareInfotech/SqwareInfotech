import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { navigation, contactDetails } from "../constants";


const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 gradient-text">Sqware Infotech</h2>
            <p className="text-gray-400">
              Bringing innovative IT solutions to help your business grow and succeed.
            </p>
          </div>
          <div className="flex flex-wrap justify-center my-16 text-left md:text-center">
            <div className="w-full md:w-1/3 mb-8">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Quick Links</h3>
              {navigation.map((item) => (

                <a
                  key={item.id}
                  href={item.url}
                  className={`block text-gray-400 transition-colors hover:text-n-1`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="w-full md:w-1/3 mb-8">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Contact Us</h3>
              {contactDetails.map((item) => (
                <p className="text-gray-400 mb-4">
                  <span className="font-bold">{item.title}:</span> {item.value}
                </p>
              ))}
            </div>
            <div className="w-full md:w-1/3 mb-8">
              <h3 className="text-xl font-semibold mb-4 text gradient-text text-center">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <ul className="flex gap-5 flex-wrap">
                  {socials.map((item) => ( item.visible &&
                    < a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                      <img src={item.iconUrl} width={32} height={32} alt={item.title} />
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="caption text-center text-n-4 lg:block">
          &copy; {new Date().getFullYear()} Sqware Infotech. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
