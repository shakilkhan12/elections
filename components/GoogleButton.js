import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <Link
      href="/"
      className="flex justify-center items-center space-x-4 border border-[#E0E5ED] h-[58px] px-4 rounded-[12px] hover:text-black focus:text-black"
    >
      <FcGoogle size={24} />
      <span className="text-base font-medium text-black">
        Sign Up with Google
      </span>
    </Link>
  );
};

export default GoogleButton;
