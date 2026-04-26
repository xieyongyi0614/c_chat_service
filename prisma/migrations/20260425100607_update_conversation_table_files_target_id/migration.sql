/*
  Warnings:

  - You are about to drop the column `group_id` on the `conversation` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Conversation_type_group_id_idx` ON `conversation`;

-- AlterTable
ALTER TABLE `conversation` DROP COLUMN `group_id`,
    ADD COLUMN `target_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `Conversation_type_target_id_idx` ON `Conversation`(`type`, `target_id`);
