/*
  Warnings:

  - You are about to drop the column `is_borrower_accepted` on the `debt` table. All the data in the column will be lost.
  - You are about to drop the column `is_lender_accepted` on the `debt` table. All the data in the column will be lost.
  - You are about to drop the column `phase1_status` on the `debt` table. All the data in the column will be lost.
  - You are about to drop the column `phase2_status` on the `debt` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `debt` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `debt` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `valid_to` on the `one_time_password` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_at` on the `one_time_password` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `one_time_password` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `debt` DROP COLUMN `is_borrower_accepted`,
    DROP COLUMN `is_lender_accepted`,
    DROP COLUMN `phase1_status`,
    DROP COLUMN `phase2_status`,
    ADD COLUMN `phase1_borrower_accepted_date` DATETIME(3) NULL,
    ADD COLUMN `phase1_lender_accepted_date` DATETIME(3) NULL,
    ADD COLUMN `phase2_borrower_accepted_date` DATETIME(3) NULL,
    ADD COLUMN `phase2_lender_accepted_date` DATETIME(3) NULL,
    MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `one_time_password` MODIFY `valid_to` TIMESTAMP NOT NULL,
    MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `user` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
