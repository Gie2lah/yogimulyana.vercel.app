/* eslint-disable @next/next/no-img-element */
import { PrismaClient } from "@prisma/client";
import DeleteBlog from "@/app/blogs/deleteBlog";
import UpdateBlog from "@/app/blogs/updateBlog";
import AddBlog from "@/app/blogs/addBlog";
import Link from "next/link";
import CategoriesComponent from "@/components/content/categories/CategoriesComponent";
// import CategoriesComponent from "@/components/content/categories/CategoriesComponent";

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
        <div className="space-y-4">
          <h1>Blogs</h1>
          <p>
            Not only does it contain tutorials, but it also provides highly
            valuable knowledge.
          </p>
        </div>
        <div className="form-control w-full mt-4 mb-1">
          <input
            type="text"
            className="input input-bordered"
            placeholder="Search..."
          />
        </div>
        <div className="mb-6 space-x-4 flex items-center">
          <h5 className="font-bold">Choose topic:</h5>
          <CategoriesComponent />
        </div>
        <div className="flex items-center justify-center flex-wrap gap-4">
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
                  <Link href={`/blogs/${blog.id}`}>
                    <h2 className="card-title">{blog.title}</h2>
                  </Link>
                  <p className="truncate">{stripHtmlTags(blog.content)}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
