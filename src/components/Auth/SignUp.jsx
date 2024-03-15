import React, { useContext, useEffect } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Store } from "../../Context/ContextApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { CreateUser, SignInwithGoogle } = useContext(Store);
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

  const SignInForm = (data) => {
    const { Email, Password } = data;
    CreateUser(Email, Password);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      // Navigate("/about");
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <button
        className="text-xl"
        onClick={() => document.getElementById("SIGNUP").showModal()}
      >
        SIGN IN
      </button>
      <dialog id="SIGNUP" className="modal font-Montserrat">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 Border top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-3xl text-center mb-5">SIGN UP</h3>
          <form onSubmit={handleSubmit(SignInForm)}>
            <div className="inputbox flex flex-col my-2 BorderClass ">
              <input
                className="h-14 text-xl outline-none bg-transparent border-b-2 border-Green px-5"
                type="text"
                placeholder="Email"
                {...register("Email", { Email: "Password is required" })}
              />
              <input
                className="h-14 text-xl outline-none bg-transparent border-b-2 border-Green px-5"
                type="password"
                placeholder="Password"
                {...register("Password", { required: "Password is required" })}
              />
            </div>
            <div className="w-full text-center my-5 space-y-3">
              <p className="text-[13px] my-2 text-justify">
                <span className="underline"> Forgot password</span>
              </p>
              <button
                type="submit"
                className="btn w-full bg-Green hover:bg-Green text-black text-xl mx-auto"
              >
                SIGN UP
              </button>
            </div>
          </form>
          <div className="divider text-[13px] mt-5 ">or</div>

          <div className="Media space-y-5">
            {/* <div className="facebook grid grid-cols-4 Border p-3 hover:bg-[#282c24]">
              <div className="col-span-1">
                <IoLogoFacebook className="text-[#3b9ffd] text-4xl" />
              </div>
              <div className="col-span-3 text-center text-[18px]">
                Continue with facebook.
              </div>
            </div> */}
            <button
              onClick={SignInwithGoogle}
              className="Google cursor-pointer grid grid-cols-4 Border w-full p-3 hover:bg-[#282c24]"
            >
              <div className="col-span-1">
                <FcGoogle className="text-[#3b9ffd] text-4xl" />
              </div>
              <div className="col-span-3 text-center text-[18px]">
                Continue with google.
              </div>
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default SignUp;
