import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="mx-auto my-10 flex w-full flex-col gap-7 rounded-xl p-5 shadow-l md:h-[95vh] xl:w-2/4">
        <div className="flex items-center justify-center gap-2">
          <img className="h-16 w-16" src={logo} alt="logo" />
          <h2 className="hidden text-3xl font-bold tracking-wider text-slate-600 md:block">
            ShoeSphere
          </h2>
        </div>
        <h1 className="text-2xl font-medium text-slate-800">Register</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-80 lg:w-[30rem] xl:w-72 2xl:w-[37rem]"
                placeholder="First name"
                id="firstName"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-80 lg:w-[30rem] xl:w-72 2xl:w-[37rem]"
                placeholder="Last name"
                id="lastName"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-80 lg:w-[30rem] xl:w-72 2xl:w-[37rem]"
                placeholder="Email address"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-80 lg:w-[30rem] xl:w-72 2xl:w-[37rem]"
                placeholder="Phone number"
                id="phone"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              id="password"
            />
          </div>
          <button
            type="submit"
            className="mt-6 h-10 rounded-full bg-green-500 text-white"
          >
            Register
          </button>
          <p className="text-center">
            Already have an account?
            <Link to="/login" className="text-green-600">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
