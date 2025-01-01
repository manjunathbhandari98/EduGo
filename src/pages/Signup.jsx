import Button from "../components/Buttons/Button";
import InputBox from "../components/InputBox";
import GoogleIcon from "../assets/Images/google_logo.svg";
import AppleIcon from "../assets/Images/apple_logo.svg";
import LinkedInIcon from "../assets/Images/linkedin_logo.svg";
import AuthButton from "../components/Buttons/AuthButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const agree = watch("agree"); // Track the value of the checkbox

  const onSignUp = (data) => {
    console.log(data);
  };

  const isFormValid =
    Object.keys(errors).length === 0 && agree;

  return (
    <div className="container mx-auto p-5 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full sm:w-96">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Sign up and start your journey!
        </h2>

        {/* Signup with Social Buttons */}
        <div className="flex gap-5 justify-center items-center mx-auto">
          <AuthButton icon={GoogleIcon} />
          <AuthButton icon={AppleIcon} />
          <AuthButton icon={LinkedInIcon} />
        </div>

        {/* Text between Horizontal Lines */}
        <div className="flex items-center my-4">
          <hr className="border-t border-gray-300 flex-1" />
          <span className="mx-4 text-sm text-gray-500">
            or sign up with your email
          </span>
          <hr className="border-t border-gray-300 flex-1" />
        </div>

        {/* Full Name Input */}
        <form onSubmit={handleSubmit(onSignUp)}>
          <div className="mb-4 space-y-2">
            <label
              htmlFor="full-name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name{" "}
              <sup className="text-red-700">
                *
              </sup>
            </label>
            <InputBox
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", {
                required:
                  "Please Enter your full name",
                pattern: {
                  value:
                    /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
                  message:
                    "Please Enter Valid Name",
                },
              })}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500 mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-4 space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
              <sup className="text-red-700">
                *
              </sup>
            </label>
            <InputBox
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required:
                  "Please Enter Your Email",
                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:
                    "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-700 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-6 space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
              <sup className="text-red-700">
                *
              </sup>
            </label>
            <InputBox
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Please Enter Password",
                minLength: {
                  value: 6,
                  message:
                    "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-700 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Checkbox - Agree to Terms */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="agree"
              {...register("agree", {
                required:
                  "You must agree to the terms",
              })}
              className="h-4 w-4 text-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="agree"
              className="ml-2 text-sm text-gray-600"
            >
              I agree to the{" "}
              <a
                href="/terms"
                className="text-blue-500 hover:underline"
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-blue-500 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>
          {errors.agree && (
            <p className="text-sm text-red-700 my-1">
              {errors.agree.message}
            </p>
          )}
          {/* Sign Up Button */}
          <Button
            buttonLabel="Sign Up"
            disabled={!isFormValid} // Disable button if form is invalid or checkbox not selected
          />
        </form>

        {/* Already have an account? Login Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {` Already have an account? `}
            <Link
              to="/login"
              className="text-blue-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
