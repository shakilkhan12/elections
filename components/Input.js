import React from "react";

const Input = ({ Icon, name, placeholder, type }) => {
  return (
    <div className="relative flex px-3 items-center border border-[#E0E5ED] h-[58px] rounded-[12px]">
      <Icon size={24} className="text-[#96A0B5]" />
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full outline-none pl-3 pr-4"
      />
    </div>
  );
};

export default Input;
