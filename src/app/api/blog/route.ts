// import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
// import { NextRequest, NextResponse } from "next/server";

// const blogs = [
//   {
//     id: 1,
//     title: "Belajar HTML Dasar",
//     image:
//       "https://www.indonesia.travel/content/dam/indtravelrevamp/user-generated-content/ugc-july-2020/gb-en/1.jpg",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae vestibulum nunc, sit amet consequat metus. Praesent placerat lacus a consequat auctor.",
//   },
//   {
//     id: 2,
//     title: "Belajar PHP Dasar",
//     image:
//       "https://www.indonesia.travel/content/dam/indtravelrevamp/user-generated-content/ugc-july-2020/gb-en/8.jpg",
//     description:
//       "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In a convallis felis. Nullam malesuada semper turpis, at ornare lorem imperdiet eget.",
//   },
//   {
//     id: 3,
//     title: "Belajar Javascript Dasar",
//     image:
//       "https://www.indonesia.travel/content/dam/indtravelrevamp/user-generated-content/ugc-july-2020/gb-en/2.jpg",
//     description:
//       "Maecenas ac risus id dui tincidunt tempus vel id erat. Mauris commodo cursus massa, ac vestibulum eros laoreet quis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
//   },
//   {
//     id: 4,
//     title: "Belajar Javascript Dasar",
//     image:
//       "https://www.indonesia.travel/content/dam/indtravelrevamp/user-generated-content/ugc-july-2020/gb-en/2.jpg",
//     description:
//       "Maecenas ac risus id dui tincidunt tempus vel id erat. Mauris commodo cursus massa, ac vestibulum eros laoreet quis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
//   },
//   {
//     id: 5,
//     title: "Belajar Javascript Dasar",
//     image:
//       "https://www.indonesia.travel/content/dam/indtravelrevamp/user-generated-content/ugc-july-2020/gb-en/2.jpg",
//     description:
//       "Maecenas ac risus id dui tincidunt tempus vel id erat. Mauris commodo cursus massa, ac vestibulum eros laoreet quis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
//   },
// ];

// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get("id");
//   if (id) {
//     const detailBlog = await retrieveDataById("blogs", id);
//     if (detailBlog) {
//       return NextResponse.json({
//         status: 200,
//         message: "Success",
//         data: detailBlog,
//       });
//     }
//     return NextResponse.json({
//       status: 404,
//       message: "Not Found",
//       data: {},
//     });
//   }
//   const blogs = await retrieveData("blogs");

//   return NextResponse.json({ status: 200, message: "Success", data: blogs });
// }

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const blogs = await prisma.blog.findMany({});
  return NextResponse.json({ blogs });
}
