const inputsSignIn = [
  {
    id: 1,
    name: "email",
    type: "text",
    placeholder: "Email",
    required: true,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Password",
    // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
];

export { inputsSignIn };
