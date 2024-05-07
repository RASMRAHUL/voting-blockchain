import { useState } from "react";
//import signinbg from '../assets/signinbg.jpg'
const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    // You can perform any other actions here, like sending the data to a server
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="items-center border border-blue-200 w-[400px] h-[200px] m-auto mt-[300px] rounded-xl ">
      <div className="font-bold text-2xl text-blue-500">Sign in</div>
      <div className="flex flex-col">
        <input
          name="email"
          value={loginData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="border border-green-300 rounded-lg m-4 hover:border-green-500"
        ></input>
        <input
          name="password"
          value={loginData.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="border border-green-300 rounded-lg m-4 hover:border-green-500"
        ></input>
      </div>
      <button type="submit" className="bg-green-300 w-[200px] h-8 rounded-xl hover:bg-green-500">LOGIN</button>
      </div>
    </form>
  );
};

export default SignIn;

