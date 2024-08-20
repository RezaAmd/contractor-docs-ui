"use client";
import { useRouter } from "next/navigation";
import Button from "../Common/Button";
import Input from "../Common/Input";
import Link from "next/link";

const SignInForm = () => {
  const router = useRouter();
  
  const signInClickHandle = () => {
    alert("log'e che ini?! :|");
    router.push("/admin");
  };
  return (
    <div>
      <div>
        <label className="mb-2" htmlFor="username">
          نام کاربری / شماره همراه
        </label>
        <Input
          name="username"
          type="text"
          className="text-left placeholder:text-right"
          placeholder="نام کاربری خود را وارد کنید"
          id="username"
          dir="ltr"
        />
      </div>
      <div className="mt-3">
        <label className="mb-2" htmlFor="password">
          رمز عبور
        </label>
        <Input
          name="username"
          type="password"
          className="text-left placeholder:text-right"
          placeholder="رمز عبور را وارد کنید"
          id="password"
          dir="ltr"
        />
      </div>
      <div className="mt-9 grid">
        <Button className="bg-blue-600 text-white" type="submit" onClick={signInClickHandle}>
          ورود
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
