/*
  Warnings:

  - You are about to drop the column `debt_status` on the `debt` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `debt` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `debt` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `valid_to` on the `one_time_password` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_at` on the `one_time_password` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `one_time_password` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Added the required column `phase1_status` to the `debt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phase2_status` to the `debt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `debt` DROP COLUMN `debt_status`,
    ADD COLUMN `phase1_status` ENUM('UNKNOWN', 'PENDING', 'ACCEPTED', 'DECLINED') NOT NULL,
    ADD COLUMN `phase2_status` ENUM('UNKNOWN', 'PENDING', 'ACCEPTED', 'DECLINED') NOT NULL,
    MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `one_time_password` MODIFY `valid_to` TIMESTAMP NOT NULL,
    MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `user` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
