import React, { useId } from "react";

function TextInput({
  type = "text",
  placeHolder = "Job Title",
  textarea,
  label,
  error,
  classes,
  ...props
}) {
  const inputId = useId();
  return (
    <div className="">
      {label ? (
        <label htmlFor="jobTitle" className="block mb-2">
          {label}
        </label>
      ) : null}
      {textarea ? (
        <textarea
          className="w-full h-36 p-4 rounded-[1.5rem] border bg-white dark:bg-dark-primary border-gray-200 outline-none focus:border-none focus:outline-light-primary mb-3 resize-none"
          placeholder={placeHolder}
          value={props?.datavalue}
          {...props}
        ></textarea>
      ) : (
        <input
          type={type}
          id={`input-${inputId}`}
          placeholder={placeHolder}
          className={`w-full h-12 px-7 rounded-full border bg-white dark:bg-dark-primary border-gray-200 outline-none focus:border-none focus:outline-light-primary mb-3 ${classes}`}
          {...props}
        />
      )}

      <p className="text-red-400 h-[14px]">{error ? error : null}</p>
    </div>
  );
}

export default TextInput;
