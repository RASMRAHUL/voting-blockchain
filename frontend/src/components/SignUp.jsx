import { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    name:"",
    email: "",
    password: "",
    confirmpassword:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    // You can perform any other actions here, like sending the data to a server
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="items-center border border-blue-200 w-[400px] h-[300px] m-auto mt-[300px] rounded-xl ">
      <div className="font-bold text-2xl text-blue-500">Sign up</div>
      <div className="flex flex-col">
      <input
          name="name"
          value={data.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          className="border border-green-300 rounded-lg m-4 hover:border-green-500"
        ></input>
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="border border-green-300 rounded-lg m-4 hover:border-green-500"
        ></input>
        <input
          name="password"
          value={data.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="border border-green-300 rounded-lg m-4 hover:border-green-500"
        ></input>
        <input
          name="confirmpassword"
          value={data.confirmpassword}
          onChange={handleChange}
          type="password"
          placeholder="Confirm Password"
          className="border border-green-300 rounded-lg m-4 hover:border-green-500"
        ></input>
      </div>
      <button type="submit" className="bg-green-300 w-[200px] h-8 rounded-xl hover:bg-green-500">SIGN UP</button>
      </div>
    </form>
  );
};

export default SignUp;