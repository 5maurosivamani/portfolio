import React, { lazy } from "react";
import { motion } from "motion/react";
import { LazyComponent, PageHeading } from "../components";

const PersonalInfo = lazy(() => import("../components/PersonalInfo"));
const ContactForm = lazy(() => import("../container/ContactForm"));

function Contact() {
  return (
    <div className="h-full overflow-x-hidden overflow-y-auto bg-white dark:bg-dark-primary text-dark-primary dark:text-white">
      <PageHeading title="Contact" subTitle={["Get In", "Touch"]} />

      <div className="w-full md:w-5/6 mx-auto py-10  px-8 sm:p-10 sm:pt-5  flex flex-col-reverse md:flex-row space-x-0 md:space-x-5  bg-white dark:bg-dark-primary">
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-1/2 mt-10 md:mt-0"
        >
          <LazyComponent component={<PersonalInfo />} />
        </motion.div>

        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 200 }}
          transition={{ duration: 0.9 }}
        >
          <LazyComponent component={<ContactForm />} />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
