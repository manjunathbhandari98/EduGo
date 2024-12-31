import Button from "../components/Buttons/Button";
import InputBox from "../components/InputBox";
import GoogleIcon from "../assets/Images/google_logo.svg";
import AppleIcon from "../assets/Images/apple_logo.svg";
import LinkedInIcon from "../assets/Images/linkedin_logo.svg";
import AuthButton from "../components/Buttons/AuthButton";
import { Link } from "react-router-dom";

const Signup = () => {
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
        <div className="mb-4 space-y-2">
          <label
            htmlFor="full-name"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <InputBox
            type="text"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4 space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <InputBox
            type="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6 space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <InputBox
            type="password"
            placeholder="Enter your password"
          />
        </div>

        {/* Checkbox - Agree to Terms */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="agree"
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

        {/* Sign Up Button */}
        <Button buttonLabel="Sign Up" />

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
