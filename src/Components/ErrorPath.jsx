import { NavLink } from "react-router-dom";

function ErrorPath() {
  return (
    <div className="w-screen p-8 flex flex-col justify-center items-center min-h-screen bg-slate-100">
      <h1 className="errorMessage text-7xl font-extrabold">
        404 - PAGE NOT FOUND!!!
      </h1>
      <NavLink
        to={"/"}
        className="inline-block text-2xl lg:text-5xl text-white hover:text-white p-7 my-3 z-50 border-[3px] border-[tomato] rounded-full bg-slate-400 hover:bg-[tomato] duration-300"
      >
        Back to Home...
      </NavLink>
    </div>
  );
}
export default ErrorPath;
