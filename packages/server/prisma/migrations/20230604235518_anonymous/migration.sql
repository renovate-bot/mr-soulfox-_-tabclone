-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('DESKTOP', 'MOBILE');

-- CreateEnum
CREATE TYPE "UtmSource" AS ENUM ('SEARCH', 'SOCIAL', 'TABNEWS', 'GITHUB');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "is_anon" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anonymous" (
    "anon_id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "first_access" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "platform" "Platform" NOT NULL DEFAULT 'DESKTOP',
    "utm_source" "UtmSource" NOT NULL DEFAULT 'SEARCH',

    CONSTRAINT "Anonymous_pkey" PRIMARY KEY ("anon_id")
);

-- AddForeignKey
ALTER TABLE "Anonymous" ADD CONSTRAINT "Anonymous_anon_id_fkey" FOREIGN KEY ("anon_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
