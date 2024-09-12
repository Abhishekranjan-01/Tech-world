import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { constants } from "../constants/constants";
import { SubmitButton } from "../components/common/Button/Button";
export default function PublishBlog() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <main className="flex flex-col items-center gap-6 w-full">
      <div className="mt-20 mx-4 sm:mx-0  sm:w-3/4 border-2 border-gray-500 rounded-lg">
        <Editor
          apiKey={constants.EDITOR_API}
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: true,
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
      </div>

      <SubmitButton label={"Next"} onClick={log} className="w-fit mx-auto" />
    </main>
  );
}
