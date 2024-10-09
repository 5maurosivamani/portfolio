import React from "react";

import { MdDownload } from "react-icons/md";
import { getId } from "../utils";
import Button from "../components/Button";

const generateUniqueId = getId();

function BioData() {
  const BIO_DATA_FIRST = [
    {
      label: "First Name",
      value: "Sivamani",
    },
    {
      label: "Last Name",
      value: "N",
    },
    {
      label: "Age",
      value: 25,
    },
    {
      label: "Nationality",
      value: "Indian",
    },
    {
      label: "Freelance",
      value: "Available",
    },
  ];

  const BIO_DATA_SECOND = [
    {
      label: "Address",
      value: "Chennai",
    },
    {
      label: "Phone",
      value: "+91 8098668053",
    },
    {
      label: "Email",
      value: "5maurosivamani@gmail.com",
    },
    {
      label: "Languages",
      value: "English, Tamil",
    },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 mb-7">
        <GenerateList data={BIO_DATA_FIRST} />
        <GenerateList data={BIO_DATA_SECOND} />
      </div>
      <Button title="Download CV" icon={MdDownload} />
    </div>
  );
}

export default BioData;

const GenerateList = ({ data }) => {
  return (
    <div className="grid gap-5 text-dark-primary dark:text-white">
      {data?.map((data) => (
        <p className="tracking-wider" key={generateUniqueId.next().value}>
          {data.label}: <span className="font-semibold  ">{data.value}</span>
        </p>
      ))}
    </div>
  );
};
