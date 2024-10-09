import React from "react";
import { PageHeading, PersonalInfo, TextInput } from "../components";
import Button from "../components/Button";
import { BsSend } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Contact() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot be more than 50 characters")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
      .trim("No leading or trailing spaces")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
  };

  return (
    <div className="h-full bg-white dark:bg-dark-primary text-dark-primary dark:text-white">
      <PageHeading title="Contact" subTitle={["Get In", "Touch"]} />

      <div className="w-5/6 mx-auto flex py-10 md:p-10 flex-col-reverse md:flex-row ">
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <PersonalInfo />
        </div>

        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <Form
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col justify-between space-y-5 "
              >
                <div className="grid md:grid-cols-2 space-y-5 md:space-y-0 md:space-x-3  ">
                  {/* Name Input */}
                  <TextInput
                    placeHolder="YOUR NAME"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    error={touched.name && errors.name}

                    // Show error when field is touched and has errors
                  />

                  {/* Email Input */}
                  <TextInput
                    placeHolder="YOUR EMAIL"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    error={touched.email && errors.email}
                  />
                </div>

                {/* Subject Input */}
                <TextInput
                  placeHolder="YOUR SUBJECT"
                  name="subject"
                  onChange={handleChange}
                  value={values.subject}
                  error={touched.subject && errors.subject}
                />

                {/* Message Input */}
                <TextInput
                  placeHolder="YOUR MESSAGE"
                  name="message"
                  textarea // To handle multi-line input
                  onChange={handleChange}
                  value={values.message}
                  error={touched.message && errors.message}
                />

                {/* Submit Button */}
                <Button title="Send Message" icon={BsSend} type="submit" />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contact;
