import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Blog } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const blog = await prisma.blog.findMany({});
  return NextResponse.json({ blog });
}

export async function POST(request: Request) {
  const body: Blog = await request.json();
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      categoryId: body.categoryId,
      userId: 1,
    },
  });

  return NextResponse.json(blog, { status: 201 });
}
