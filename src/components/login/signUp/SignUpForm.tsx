import { authenticate } from "@/components/services/authenticate";
import Snipper from "@/components/snipper/Snipper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm/InputForm";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX =
  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
const PSW_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputUserError, setInputUserError] = useState({
    isError: false,
    message: "",
  });
  const [inputEmailError, setInputemailError] = useState({
    isError: false,
    message: "",
  });
  const [inputPasswordError, setInputPasswordError] = useState({
    isError: false,
    message: "",
  });
  const [createdUser, setCreatedUser] = useState();
  const [succes, setSucces] = useState({
    isSucces: false,
    message: "",
  });
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (values.username.length < 3 && values.username.length !== 0) {
      setInputUserError({
        isError: true,
        message: "usarnme it can be at least 3 characters",
      });
    } else {
      setInputUserError({ isError: false, message: "" });
    }
  }, [values.username]);

  useEffect(() => {
    const rex_email = EMAIL_REGEX.test(values.email);

    if (!rex_email && values.email.length > 0) {
      setInputemailError({
        isError: true,
        message: "Email type not valid",
      });
    } else {
      setInputemailError({ isError: false, message: "" });
    }
  }, [values.email]);

  useEffect(() => {
    const rext_password = PSW_REGEX.test(values.password);

    if (!rext_password && values.password.length > 0) {
      setInputPasswordError({
        isError: true,
        message: "Minimum eight characters, at least one letter and one number",
      });
    } else {
      setInputPasswordError({ isError: false, message: "" });
    }
  }, [values.password]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.password !== values.confirmPassword) {
      setInputPasswordError({
        isError: true,
        message: "Passwords aren't the same",
      });
    }

    authenticate
      .post("sign-up", values)
      .then((response) => {
        setIsloading(true);
        console.log(response);
        setCreatedUser(response.data);
        if (response.status === 202) {
          setTimeout(() => {
            setSucces({
              isSucces: true,
              message: response.data.message,
            });
          }, 500);
          setTimeout(() => {
            setValues({
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
          }, 1000);
          setTimeout(() => {
            navigate("/home");
          }, 1500);
        }
      })
      .catch((error) => {
        if (!error.response.data.message) {
          setSucces({ isSucces: false, message: "" });
          return;
        }
        setSucces({ isSucces: false, message: error.response.data.message });
      });
  };

  return (
    <form
      className="w-3/4 flex flex-col jsutify-center gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-center font-bold text-2xl">Register</h2>
      <InputForm
        value={values.username}
        name="username"
        onChange={onChange}
        placeholder="Name"
        required={true}
        type="text"
        key="username"
        error={inputUserError}
      />
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
      <InputForm
        value={values.confirmPassword}
        name="confirmPassword"
        onChange={onChange}
        placeholder="Confirm password"
        required={true}
        type="password"
        key="confirmPassword"
      />
      {isLoading ? (
        <Snipper />
      ) : (
        <input
          type="submit"
          value="Register"
          className="w-full bg-green-500 cursor-pointer rounded-full font-bold p-2 hover:bg-green-400"
        />
      )}

      <p>
        Have an account already?{" "}
        <Link to="/">
          <span className="text-green-500 font-bold">Login</span>
        </Link>
      </p>
      {succes.isSucces ? (
        <span className="bg-green-500 text-base text-white font-bold text-center p-1 rounded-sm">
          {succes.message}
        </span>
      ) : !succes.isSucces && succes.message ? (
        <span className="bg-red-500 text-base text-white font-bold text-center p-1 rounded-sm">
          {succes.message}
        </span>
      ) : (
        ""
      )}
    </form>
  );
};

export default SignUp;
