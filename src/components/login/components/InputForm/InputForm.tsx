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

const InputForm = ({
  onChange,
  error,
  placeholder,
  ...inputProps
}: InputProps) => {
  return (
    <div>
      <div
        className={`${
          error?.isError && "border-red-500"
        } relative   p-2 rounded-full form-div`}
      >
        <input
          className="w-full bg-transparent form-input"
          {...inputProps}
          onChange={onChange}
          placeholder=" "
        />
        <label className="form-label">{placeholder}</label>
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
