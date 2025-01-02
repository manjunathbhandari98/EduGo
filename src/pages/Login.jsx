/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from "../components/Buttons/Button";
import InputBox from "../components/InputBox";
import GoogleIcon from "../assets/Images/google_logo.svg";
import AppleIcon from "../assets/Images/apple_logo.svg";
import LinkedInIcon from "../assets/Images/linkedin_logo.svg";
import AuthButton from "../components/Buttons/AuthButton";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  // useForm for validations
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, isLoggedIn } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = (data) => {
    // Validate credentials (example logic)
    if (
      data.email === "manju@gmail.com" &&
      data.password === "admin1234"
    ) {
      login();
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mx-auto p-5 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full sm:w-96">
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
        {/* Email and Password Form */}
        <form onSubmit={handleSubmit(onLogin)}>
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:
                    "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
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
            </label>
            <InputBox
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message:
                    "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Login Button */}
          <Button
            buttonLabel="Login"
            type="submit"
          />
        </form>

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
