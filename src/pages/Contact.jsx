import React from "react";
import { PageHeading, PersonalInfo } from "../components";

import ContactForm from "../container/ContactForm";

function Contact() {


  return (
    <div className="h-full overflow-y-auto bg-white dark:bg-dark-primary text-dark-primary dark:text-white">
      <PageHeading title="Contact" subTitle={["Get In", "Touch"]} />

      <div className="w-full md:w-5/6 mx-auto py-10  px-8 sm:p-10 sm:pt-5  flex flex-col-reverse md:flex-row space-x-0 md:space-x-5  bg-white dark:bg-dark-primary">
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <PersonalInfo />
        </div>

        <div>
          <ContactForm/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
