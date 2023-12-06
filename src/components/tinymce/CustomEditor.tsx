import React, { useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function CustomEditor() {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.getContent) {
      console.log(editorRef.current.getContent());
    }
  }, [editorRef]);

  return (
    <>
      <Editor
        apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 500,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }",
          menubar: "favs file edit view insert format tools table help",
        }}
      />
    </>
  );
}
