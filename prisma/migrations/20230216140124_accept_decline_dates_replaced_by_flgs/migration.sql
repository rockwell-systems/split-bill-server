/*
  Warnings:

  - You are about to drop the column `borrower_accepted_date` on the `debt` table. All the data in the column will be lost.
  - You are about to drop the column `borrower_declined_date` on the `debt` table. All the data in the column will be lost.
  - You are about to drop the column `lender_accepted_date` on the `debt` table. All the data in the column will be lost.
  - You are about to drop the column `lender_declined_date` on the `debt` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `debt` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `debt` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `valid_to` on the `one_time_password` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_at` on the `one_time_password` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `one_time_password` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `debt` DROP COLUMN `borrower_accepted_date`,
    DROP COLUMN `borrower_declined_date`,
    DROP COLUMN `lender_accepted_date`,
    DROP COLUMN `lender_declined_date`,
    ADD COLUMN `is_borrower_accepted` ENUM('YES', 'NO') NULL,
    ADD COLUMN `is_lender_accepted` ENUM('YES', 'NO') NULL,
    MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `one_time_password` MODIFY `valid_to` TIMESTAMP NOT NULL,
    MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `user` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
