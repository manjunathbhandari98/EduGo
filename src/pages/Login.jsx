import Button from "../components/Buttons/Button";
import InputBox from "../components/InputBox";
import GoogleIcon from "../assets/Images/google_logo.svg";
import AppleIcon from "../assets/Images/apple_logo.svg";
import LinkedInIcon from "../assets/Images/linkedin_logo.svg";
import AuthButton from "../components/Buttons/AuthButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto p-5 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full sm:w-96 ">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Welcome back! Let’s get started.
        </h2>

        {/* Login with Google Button */}
        <div className="flex gap-5 justify-center items-center mx-auto">
          <AuthButton icon={GoogleIcon} />
          <AuthButton icon={AppleIcon} />
          <AuthButton icon={LinkedInIcon} />
        </div>
        <div className="flex items-center my-4">
          <hr className="border-t border-gray-300 flex-1" />
          <span className="mx-4 text-sm text-gray-500">
            or login with your email
          </span>
          <hr className="border-t border-gray-300 flex-1" />
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

        {/* Login Button */}
        <Button buttonLabel="Login" />

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <a
            href="/forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot your password?
          </a>
        </div>

        {/* Signup Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {` Don't have an account? `}
            <Link
              to="/signup"
              className="text-blue-500 hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
