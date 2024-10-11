import React from "react";

function Button({ title, classes = "", icon: Icon, loading, ...props }) {
  return (
    <div className="flex">
      <button
        className={`group h-12  flex items-center justify-between rounded-full border border-light-primary text-dark-primary hover:text-white  dark:text-white relative ${
          loading && "cursor-wait"
        } ${classes}`}
        disabled={loading}
        {...props}
      >
        <span className="font-bold uppercase px-5 text-nowrap z-[1]">
          {title}
        </span>

        <div className="h-12 w-12 flex justify-center items-center rounded-full bg-light-primary  text-white z-[1]">
          {loading ? (
            <span className="loading loading-ring loading-md"></span>
          ) : (
            <Icon size={24} />
          )}
        </div>
        <div className="h-full absolute top-0 right-0 w-12 group-hover:w-full transition-[width] duration-400 bg-light-primary  rounded-full"></div>
      </button>
    </div>
  );
}

export default Button;
