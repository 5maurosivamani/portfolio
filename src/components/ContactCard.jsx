import React from "react";

function ContactCard({ icon: Icon, label, value }) {
  return (
    <div className="flex">
      <div className="text-light-primary">
        <Icon size={50} />
      </div>
      <div className="ms-2">
        <p className="opacity-75 uppercase">{label}</p>
        <p className="font-semibold opacity-90 lowercase text-wrap">{value}</p>
      </div>
    </div>
  );
}

export default ContactCard;
