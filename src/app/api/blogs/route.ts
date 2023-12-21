import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Blog } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Cloudinary } from "@cloudinary/url-gen";

const prisma = new PrismaClient();

const cloudinary = new Cloudinary();

export async function GET(req: NextRequest) {
  const blog = await prisma.blog.findMany({});
  return NextResponse.json({ blog });
}

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.CLOUD_NAME,
    apiSecret: process.env.API_SECRET_CLOUDINARY,
  },
});
export async function POST(request: Request) {
  const body: Blog = await request.json();
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      categoryId: body.categoryId,
      userId: 1,
      desc: body.desc,
      imageUrl: body.imageUrl,
    },
  });

  return NextResponse.json(blog, { status: 201 });
}
