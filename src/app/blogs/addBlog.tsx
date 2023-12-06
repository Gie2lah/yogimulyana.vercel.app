"use client";
import { useState, SyntheticEvent, useRef, useEffect } from "react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import axios from "axios";
import FroalaEditor from "react-froala-wysiwyg";
import { Editor } from "@tinymce/tinymce-react";

interface Category {
  id: number;
  title: string;
}

type Blog = {
  id: number;
  title: string;
  content: string;
  categoryId: number;
};

interface AddBlogProps {
  categories: Category[];
}

export default function AddBlog({
  categories,
  blog,
}: {
  categories: Category[];
  blog: Blog;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/blogs", {
        title,
        content,
        categoryId: Number(category),
      });
      setTitle("");
      setContent("");
      setCategory("");
      setIsOpen(false);
    } catch (error) {
      // Handle error
      console.error("Error adding blog:", error);
    }
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleContentChange = (content: string) => {
    setContent(content);
  };

  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.getContent) {
      console.log(editorRef.current.getContent());
    }
  }, [editorRef]);

  const handleEditorChange = (newContent: string, editor: any) => {
    if (editor.getBody().dir === "rtl") {
      editor.getBody().dir = "ltr";
    }
    setContent(newContent);
  };

  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Add New
      </button>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Blog</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full">
                <label className="label font-bold">Blog Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="input input-bordered"
                  placeholder="Blog Title"
                />
              </div>
              <div className="form-control w-full">
                <label className="label font-bold">Content</label>
                <Editor
                  initialValue={content}
                  onEditorChange={handleContentChange}
                  apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  init={{
                    height: 500,
                    plugins: [
                      "directionaly",
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "preview",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help | ltr rtl",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; direction: ltr; }",
                    menubar:
                      "favs file edit view insert format tools table help",
                  }}
                />
              </div>
              <div className="form-control w-full">
                <label className="label font-bold">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select select-bordered"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  {categories.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal-action">
                <button type="button" className="btn" onClick={handleModal}>
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
