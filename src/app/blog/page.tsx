import { getData } from "@/services/blog";
import Link from "next/link";

type BlogPageProps = { params: { slug: string } };

export default async function BlogPage(props: BlogPageProps) {
  const { params } = props;
  const blogs = await getData((process.env.BASE_URL = "/api/blog"));

  return (
    <>
      <div className="h-screen py-[120px] px-[7%]">
        <h1 className="text-3xl font-bold">
          {params.slug ? "Detail Blog Page" : "Blog Page"}
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {blogs.data.length > 0 &&
            blogs.data.map((blogs: any) => (
              <Link
                href={`/blog/detail/${blogs.id}`}
                key={blogs.id}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={blogs.image}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blogs.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {blogs.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>
        {params.slug && <h2>{params.slug}</h2>}
      </div>
    </>
  );
}
