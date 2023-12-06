/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Blog = {
  id: number;
  title: string;
  content: string;
  categoryId: number;
};

export default function DeleteBlog({ blog }: { blog: Blog }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleDelete = async (blogId: number) => {
    await axios.delete(`/api/blogs/${blogId}`);
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleModal}>
        Delete
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure this {blog.title}?</h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleModal}>
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleDelete(blog.id)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
