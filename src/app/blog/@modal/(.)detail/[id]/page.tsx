import Modal from "@/components/core/Modal";
import { getData } from "@/services/blog";

export default async function DetailBlogPage(props: any) {
  const { params } = props;
  const blog = await getData("http://localhost:3000/api/blog/?id=" + params.id);
  return (
    <Modal>
      <img
        src={blog.data.image}
        alt=""
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>{blog.data.name}</h3>
      </div>
    </Modal>
  );
}
