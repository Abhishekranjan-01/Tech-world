import { constants } from "../constants/constants";
import { Button } from "flowbite-react";
import blogData from "../blogsData.json";
import { Link } from "react-router-dom";

export function Main() {
  console.log(blogData);
  return (
    <main
      className={`bg-[url(${constants.homeBackgroundImage})] w-full h-full bg-no-repeat bg-cover py-10 flex items-center justify-center`}
    >
      <Link to={"/blogs"} className="bg-pink-500">
        Read Blogs
      </Link>
    </main>
  );
}
