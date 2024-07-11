import { BlogCard } from "../ui";

export default function Blogs() {
  return (
    <main className="w-full h-full flex gap-4 flex-col p-10">
      <div className="flex justify-evenly gap-4 m-4 sm:flex-row flex-col ">
        <BlogCard />
        <BlogCard />
      </div>

      <div className="flex my-2 justify-evenly gap-4">
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  );
}
