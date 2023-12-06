import React, { useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import FroalaEditor from "react-froala-wysiwyg";

export default function CustomEditor() {
  return (
    <>
      <FroalaEditor config={{ placeholderText: "Start Writing" }} />
    </>
  );
}
