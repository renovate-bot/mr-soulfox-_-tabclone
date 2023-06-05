/*
  Warnings:

  - A unique constraint covering the columns `[anon_id]` on the table `Anonymous` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `Anonymous` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Anonymous_anon_id_key" ON "Anonymous"("anon_id");

-- CreateIndex
CREATE UNIQUE INDEX "Anonymous_token_key" ON "Anonymous"("token");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
