import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Blog } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body: Blog = await request.json();
  const blog = await prisma.blog.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title: body.title,
      content: body.content,
      categoryId: body.categoryId,
    },
  });
  return NextResponse.json(blog, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const blog = await prisma.blog.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(blog, { status: 200 });
}

// export const GET = async (
//   req: NextRequest,
//   context: { params: { id: string } }
// ) => {
//   const id = Number(context.params.id) || 0;

//   const blog = await prisma.blog.findFirst({
//     where: {
//       id: id,
//     },
//   });

//   return NextResponse.json({ blog });
// };

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const blog = await prisma.blog.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(blog, { status: 200 });
}
