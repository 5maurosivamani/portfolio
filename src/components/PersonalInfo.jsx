import React from "react";
import { MdMail, MdPhone } from "react-icons/md";
import ContactCard from "./ContactCard";
import SocialMedia from "./SocialMedia";

function PersonalInfo() {
  return (
    <div className="flex flex-col space-y-5">
      <h3 className="mb-3 text-2xl font-bold tracking-wider text-zinc-500">DON'T BE SHY!</h3>
      <p className="w-full lg:w-3/4">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>
      <ContactCard
        icon={MdMail}
        label="Mail Me"
        value="5maurosivamani@gmail.com"
      />
      <ContactCard icon={MdPhone} label="Call Me" value="+91 8098668053" />

      <SocialMedia/>
    </div>
  );
}

export default PersonalInfo;
