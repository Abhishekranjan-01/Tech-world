import { constants } from "../constants/constants";
import { Button } from "flowbite-react";
import blogData from "../blogsData.json";
import { Link } from "react-router-dom";
import { Alert } from "./common";
import { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export function Main() {
  const [alert, setAlert] = useState(false);
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
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
      <button onClick={() => {}}>Write blogs</button>
      <Editor
        apiKey={constants.EDITOR_API}
        tinymceScriptSrc="/tinymce/tinymce.min.js"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
      <p className={"text-2xl font-semibold text-white"}>{String(alert)}</p>
    </main>
  );
}
