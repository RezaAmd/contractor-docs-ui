import SignInForm from "@/components/Auth/SignInForm";
import ButtonLink from "@/components/Common/ButtonLink";
import { FaAngleRight } from "react-icons/fa6";

const SignInPage = () => {
  return (
    <div className="pt-12">
      <div className="w-[100%] max-w-[500px] mx-auto">
        <div className="p-5 rounded-xl">
          <div className="flex mb-12">
            <div className="flex-1">
              <div>
                <ButtonLink className="text-black hover:bg-gray-200" href="/">
                  <FaAngleRight />
                </ButtonLink>
              </div>
            </div>
            <div className="flex-1 text-center">
              <label className="text-2xl">خوش آمدید</label>
            </div>
            <div className="flex-1"></div>
          </div>

          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
