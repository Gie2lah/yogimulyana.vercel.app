/* eslint-disable @next/next/no-img-element */
import { PrismaClient } from "@prisma/client";
import DeleteBlog from "@/app/blogs/deleteBlog";
import UpdateBlog from "@/app/blogs/updateBlog";
import AddBlog from "@/app/blogs/addBlog";

const prisma = new PrismaClient();

const getCategories = async () => {
  const res = await prisma.category.findMany();
  return res;
};

const stripHtmlTags = (htmlString: string): string => {
  return htmlString.replace(/<[^>]+>/g, "");
};

const getBlogs = async () => {
  const res = await prisma.blog.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      categoryId: true,
      category: true,
    },
  });
  return res;
};

export default async function DashboardBlogPage() {
  const [blogs, categories] = await Promise.all([getBlogs(), getCategories()]);
  return (
    <>
      <div className="px-[10%] py-[120px] min-h-screen">
        {blogs.map((blog, index) => (
          <>
            <div
              className="card card-compact w-96 bg-base-100 shadow-xl"
              key={blog.id}
            >
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p className="truncate">{stripHtmlTags(blog.content)}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
