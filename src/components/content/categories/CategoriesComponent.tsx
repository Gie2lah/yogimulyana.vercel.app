/* eslint-disable @next/next/no-img-element */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getCategories = async () => {
  const res = await prisma.category.findMany();
  return res;
};

export default async function CategoriesComponent() {
  const [categories] = await Promise.all([getCategories()]);
  return (
    <>
      <div className="flex space-x-4">
        {categories.map((category, index) => (
          <>
            <div className="" key={category.id}>
              <p className="border text-xs px-2 py-1 rounded-md font-bold">
                {category.title}
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
