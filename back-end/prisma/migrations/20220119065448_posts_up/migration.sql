/*
  Warnings:

  - You are about to drop the column `decription` on the `Post` table. All the data in the column will be lost.
  - Added the required column `description` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `decription`,
    ADD COLUMN `description` VARCHAR(700) NOT NULL;
