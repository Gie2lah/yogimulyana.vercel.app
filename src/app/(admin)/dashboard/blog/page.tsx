// jika kita ingin menampilkan routes di layoutnya tanpa ada file page.tsx maka dia akan jadi not found, jika kita ingin  tetap menampilkan maka gunakan file dengan nama default.tsx contohnya seperti ini
// export default function Default() {
// return null;
import { PrismaClient } from "@prisma/client";
import DeleteBlog from "@/app/blogs/deleteBlog";
import UpdateBlog from "@/app/blogs/updateBlog";
import AddBlog from "@/app/blogs/addBlog";

const prisma = new PrismaClient();

const getCategories = async () => {
  const res = await prisma.category.findMany();
  return res;
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
      <div className="px-[10%] min-h-screen">
        <div className="mb-2">
          <AddBlog categories={categories} />
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Blog Name</th>
              <th>Category</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <>
                <tr key={blog.id}>
                  <td>{index + 1}</td>
                  <td>{blog.title}</td>
                  <td>{blog.category.title}</td>
                  <td className="flex space-x-1 justify-center">
                    <DeleteBlog blog={blog} />
                    <UpdateBlog categories={categories} blog={blog} />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
