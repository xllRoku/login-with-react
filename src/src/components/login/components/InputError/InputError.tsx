type Error = {
  isError: boolean | undefined;
  message: string | undefined;
};

const InputError = ({ isError, message }: Error) => {
  return (
    <>
      {isError && (
        <span className="text-red-500 font-bold text-sm rounded-sm">
          {message}
        </span>
      )}
    </>
  );
};

export default InputError;
