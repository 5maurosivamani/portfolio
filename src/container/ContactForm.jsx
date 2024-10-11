import React, { useState } from "react";
import Button from "../components/Button";
import { BsSend } from "react-icons/bs";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../components";
import { CONTACT_FORM_URL } from "../utils/constants";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot be more than 50 characters")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
      .trim("No leading or trailing spaces")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .max(50, "Email cannot be more than 50 characters")
      .required("Email is required"),
    subject: Yup.string()
      .min(3, "Subject must be at least 3 characters long")
      .required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters long")
      .required("Message is required"),
  });

  const handleSubmit = (values) => {
    setIsSubmitted(true);

    // Send the form data to your backend API or use a third-party service here
    fetch(CONTACT_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Handle successful submission
          alert("Your message has been sent successfully!");
        } else {
          // Handle error
          console.log("An error occurred while sending your message.");
        }
      })
      .finally(() => {
        setIsSubmitted(false);
      });
  };
  return (
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
          <Button
            title="Send Message"
            icon={BsSend}
            type="submit"
            loading={isSubmitted}
          />
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
