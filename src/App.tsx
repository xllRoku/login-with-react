import { useState } from "react";
import Form from "./components/form/Form";

function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="bg-white flex rounded-3xl p-10">
        <div className="w-[50%] bg-slate-200 rounded-full p-16">
          <img
            src="https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png"
            alt=""
          />
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <Form />
        </div>
      </div>
    </main>
  );
}

export default App;
