import InputError from "../InputError/InputError";

type Error = {
  isError: boolean | undefined;
  message: string | undefined;
};

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  value: string;
  error?: Error;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputForm = ({ onChange, error, ...inputProps }: InputProps) => {
  return (
    <div>
      <div
        className={`${
          error?.isError && "border-red-500"
        } border-2 bg-slate-200 p-2 rounded-full`}
      >
        <input
          className="w-full bg-transparent"
          {...inputProps}
          onChange={onChange}
        />
      </div>
      <InputError
        isError={error?.isError}
        message={error?.message}
        key={inputProps.name}
      />
    </div>
  );
};

export default InputForm;
