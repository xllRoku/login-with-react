import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm/InputForm";
import { authenticate } from "@/components/services/authenticate";
import Snipper from "@/components/snipper/Snipper";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [inputEmailError, setInputemailError] = useState({
    isError: false,
    message: "",
  });
  const [inputPasswordError, setInputPasswordError] = useState({
    isError: false,
    message: "",
  });
  const [error, setError] = useState("");
  const [user, setUser] = useState();
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.email.length === 0 && values.password.length === 0) {
      setInputemailError({ isError: true, message: "it can't be empty" });
      setInputPasswordError({ isError: true, message: "it can't be empty" });
      return;
    }

    authenticate
      .post("sign-in", values)
      .then((response) => {
        setIsloading(true);
        setUser(response.data);
        setTimeout(() => {
          if (response.data.ok === "ok") {
            setValues({ email: "", password: "" });
          }
        }, 250);
        setTimeout(() => {
          navigate("/home");
        }, 800);
        // setIsloading(false);
      })
      .catch((error) => {
        setIsloading(true);
        if (!error.response.data.message) {
          setError("");
          return;
        }
        setTimeout(() => {
          setError(error.response.data.message);
        }, 500);
        setTimeout(() => {
          setIsloading(false);
        }, 700);
      });
  };

  return (
    <>
      <form
        className="w-3/4 flex flex-col jsutify-center gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-center font-bold text-2xl">Member Login</h2>
        <InputForm
          value={values.email}
          name="email"
          onChange={onChange}
          placeholder="Email"
          required={true}
          type="text"
          key="email"
          error={inputEmailError}
        />
        <InputForm
          value={values.password}
          name="password"
          onChange={onChange}
          placeholder="Password"
          required={true}
          type="password"
          key="password"
          error={inputPasswordError}
        />
        {isLoading ? (
          <Snipper />
        ) : (
          <input
            type="submit"
            value="Login"
            className="w-full bg-green-500 cursor-pointer rounded-full font-bold p-2 hover:bg-green-400"
          />
        )}
        <p className="font-bold">
          Forgot <span className="text-green-500 ">Username</span>
          <span className="text-green-500"> / </span>
          <span className="text-green-500 cursor-pointer">Password</span>
        </p>
        <Link to="/register">
          <span className="text-green-500 font-bold">Create your account</span>
        </Link>
        {error && !user && (
          <span className="bg-red-500 text-base text-white font-bold text-center p-1 rounded-sm">
            {error}
          </span>
        )}
      </form>
    </>
  );
};

export default SignIn;
