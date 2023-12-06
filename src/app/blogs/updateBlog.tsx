/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState, SyntheticEvent, useRef, useEffect } from "react";
import type { Category } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";
import CustomEditor from "@/components/tinymce/CustomEditor";
import { Editor } from "@tinymce/tinymce-react";

type Blog = {
  id: number;
  title: string;
  content: string;
  categoryId: number;
};

export default function UpdateBlog({
  categories,
  blog,
}: {
  categories: Category[];
  blog: Blog;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [category, setCategory] = useState(blog.categoryId);
  const [content, setContent] = useState(blog.content);

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.patch(`/api/blogs/${blog.id}`, {
      title: title,
      content: content,
      categoryId: Number(category),
    });

    router.refresh();
    setIsOpen(false);
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

  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleModal}>
        Edit
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update {blog.title}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full">
              <label className="label font-bold">Blog Title</label>
              <input
                value={blog.title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="input input-bordered"
                placeholder="Blog Title"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Description Blog</label>
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
                  menubar: "favs file edit view insert format tools table help",
                }}
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Category Blog</label>
              <select
                value={blog.categoryId}
                onChange={(e) => setCategory(Number(e.target.value))}
                className="select select-bordered"
              >
                {categories.map((category) => (
                  <>
                    <option value={category.id} key={category.id}>
                      {category.title}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
