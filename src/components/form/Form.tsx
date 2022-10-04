import { inputsSignIn } from "@/data/inputsSignIn";
import { useEffect, useState } from "react";
import axios from "axios";

type InputProps = {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  pattern?: string;
  required: boolean;
  value: any;
  inputError: {
    error: boolean;
    message: string;
    name: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputErrorProps = {
  inputError: {
    error: boolean;
    message: string;
    name: string;
  };
};

const EMAIL_REGEX =
  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

const PSW_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Form = () => {
  const authenticate = axios.create({
    baseURL: "https://ctk-server.herokuapp.com/",
  });

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [inputError, setInputError] = useState({
    error: false,
    message: "",
    name: "",
  });
  const [error, setError] = useState("");
  const [user, setUser] = useState();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const rex_email = EMAIL_REGEX.test(values.email);

    if (!rex_email && values.email.length > 0) {
      setInputError({
        error: true,
        message: "Email type not valid",
        name: "email",
      });
    } else {
      setInputError({ error: false, message: "", name: "email" });
    }
  }, [values.email]);

  useEffect(() => {
    const rex_email = PSW_REGEX.test(values.email);

    if (!rex_email && values.email.length > 0) {
      setInputError({
        error: true,
        message: "Minimum eight characters, at least one letter and one number",
        name: "password",
      });
    } else {
      setInputError({ error: false, message: "", name: "password" });
    }
  }, [values.password]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    authenticate
      .post("api/v1/user/account/sign-in", values)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        if (!error.response.data.message) return setError("");
        setError(error.response.data.message);
      });

    if (user) {
      setValues({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <form
        className="w-3/4 flex flex-col jsutify-center gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-center font-bold text-2xl">Member Login</h2>
        {inputsSignIn.map((input) => (
          <InputForm
            key={input.id}
            {...input}
            onChange={onChange}
            value={values[input.name]}
            inputError={inputError}
          />
        ))}
        <input
          type="submit"
          value="Login"
          className="w-full bg-green-500 cursor-pointer rounded-full font-bold p-2 hover:bg-green-400"
        />
        <p className="font-bold">
          Forgot <span className="text-green-500 cursor-pointer">Username</span>
          <span className="text-green-500"> / </span>
          <span className="text-green-500 cursor-pointer">Password</span>
        </p>
        <span className="text-green-500 font-bold cursor-pointer ">
          Create your account
        </span>
        {error && !user && (
          <span className="bg-red-500 text-2xl text-white font-bold text-center p-1 rounded-sm">
            {error}
          </span>
        )}
      </form>
    </>
  );
};

const InputForm = ({
  id,
  onChange,
  value,
  inputError,
  ...inputProps
}: InputProps) => {
  return (
    <>
      <div className="border-2 bg-slate-200 p-2 rounded-full">
        <input
          {...inputProps}
          value={value}
          className="w-full bg-transparent"
          onChange={onChange}
        />
      </div>
      {inputProps.name === inputError.name && (
        <InputError inputError={inputError} />
      )}
    </>
  );
};

const InputError = ({ inputError }: InputErrorProps) => {
  return (
    <div className="w-full">
      {inputError.error && (
        <span className="block w-full bg-red-500  text-white font-bold text-center p-1 rounded-sm">
          {inputError.message}
        </span>
      )}
    </div>
  );
};

export default Form;
