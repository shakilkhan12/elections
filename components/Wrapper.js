import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="px-4 relative">
      <div className="absolute left-0 right-0 -top-10">{children}</div>
    </div>
  );
};

export default Wrapper;
