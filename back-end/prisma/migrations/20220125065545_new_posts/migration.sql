/*
  Warnings:

  - Added the required column `firstName` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `firstName` VARCHAR(88) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(88) NOT NULL;
