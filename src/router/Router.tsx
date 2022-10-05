import SignUp from "@/components/login/signUp/SignUpForm";
import SignIn from "@/components/login/singIn/SignInForm";
import LayoutLogin from "@/layout/LayoutLogin";
import Home from "@/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutLogin />}>
          <Route path="/register" element={<SignUp />} />
          <Route index element={<SignIn />} />
        </Route>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
