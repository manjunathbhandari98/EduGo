import Button from "../components/Button";
import InputBox from "../components/InputBox";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center border">
      <label htmlFor="">Email</label>
      <InputBox type="email" />
      <br />
      <label htmlFor="">Password</label>
      <InputBox type="password" />
      <br />
      <Button buttonLabel="Login" />
    </div>
  );
};

export default Login;
