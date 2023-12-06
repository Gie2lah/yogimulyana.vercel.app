/*
  Warnings:

  - A unique constraint covering the columns `[categoryId]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Blog_categoryId_key" ON "Blog"("categoryId");
