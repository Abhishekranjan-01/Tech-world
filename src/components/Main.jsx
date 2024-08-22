import { constants } from "../constants/constants";
import { Button } from "flowbite-react";
import blogData from "../blogsData.json";
import { Link } from "react-router-dom";
import { Alert } from "./common";
import { useState } from "react";
import { invokeNotify } from "./common/alert/Alert";

export function Main() {
  console.log(blogData);
  const [alert, setAlert] = useState(false);
  const notify = (label) => toast(label);
  return (
    <main
      className={`bg-[url(${constants.homeBackgroundImage})] w-full h-full bg-no-repeat bg-cover py-10 flex items-center justify-center`}
    >
      <Link to={"/blogs"} className="bg-pink-500">
        Read Blogs
      </Link>
      <button type="button" onClick={() => setAlert(true)}>
        Set Alert
      </button>
      <p className={"text-2xl font-semibold text-white"}>{String(alert)}</p>
    </main>
  );
}
