import { getData } from "@/services/blog";

export default async function DetailBlogPage(props: any) {
  const { params } = props;
  const blog = await getData("http://localhost:3000/api/blog/?id=" + params.id);
  return (
    <div className="container mx-auto py-[120px]">
      <div className="w-1/2 mx-auto border border-gray-700">
        <img
          src={blog.data.image}
          alt=""
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6">
          <h3>{blog.data.name}</h3>
        </div>
      </div>
    </div>
  );
}
