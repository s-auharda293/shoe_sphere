import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="mx-auto my-10 flex h-[85vh] w-full md:w-2/4 flex-col gap-7 rounded-xl p-5 shadow-l">
        <div className="flex items-center justify-center gap-2">
          <img className="h-16 w-16" src={logo} alt="logo" />
          <h2 className="hidden md:block text-3xl font-bold tracking-wider text-slate-600">
            ShoeSphere
          </h2>
        </div>
        <h1 className="text-xl md:text-2xl font-medium text-slate-800">Login</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs md:text-sm">
              Email Address
            </label>
            <input
              type="email"
              className="w-full rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-xs md:placeholder:text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Email address"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs md:text-sm" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-xs md:placeholder:text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              id="password"
            />
          </div>
          <button
            type="submit"
            className="h-10 rounded-full bg-green-500 text-white"
          >
            Login
          </button>
          <p className="text-center">
            Don&apos;t have an account?
            <Link to="/register" className="text-red-600">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
