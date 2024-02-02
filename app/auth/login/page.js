import Input from "@/components/Input";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { IoLockOpenOutline } from "react-icons/io5";
import GoogleButton from "@/components/GoogleButton";

const page = () => {
  return (
    <div className="bg-white h-screen">
      <div className="max-w-screen-xl mx-auto w-full px-4">
        <Link
          href="/"
          className="text-[#31B099] pt-8 block text-lg font-semibold hover:text-black focus:text-black"
        >
          E Result
        </Link>
        <div className="h-[80vh] w-full flex items-center justify-center">
          <form className="w-full lg:w-5/12">
            <h1 className="text-[292C38] text-[24px] font-bold text-center">
              Create Account to Get Started
            </h1>
            <span className="block mt-2 text-sm text-[#73778B] text-center font-medium">
              Sign up and get started
            </span>
            <div className="mt-5">
              <Input
                Icon={MdOutlineMail}
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="mt-4">
                <Input
                  Icon={IoLockOpenOutline}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="mt-4 flex justify-center items-center space-x-3">
                <input type="checkbox" />
                <span className="text-[#73778B] text-base font-medium">
                  I agree to the Terms & Conditions
                </span>
              </div>
              <div className="mt-6">
                <input
                  type="submit"
                  value="signup"
                  className="block w-full bg-[#31B099] h-[58px] px-4 rounded-[12px] cursor-pointer outline-none text-white text-base font-medium capitalize"
                />
              </div>
              <div className="mt-6 text-center text-[#73778B] text-sm font-medium">
                Or sign up with
              </div>
              <div className="mt-6">
                <GoogleButton />
              </div>
              <div className="mt-8 flex justify-center items-center space-x-3">
                <span className="text-[#73778B] text-sm font-medium">
                  Don’t Have an Account?
                </span>
                <Link
                  href="/"
                  className="text-[#31B099] hover:text-[#31B099] focus:text-[#31B099]text-base font-bold capitalize"
                >
                  signup
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
