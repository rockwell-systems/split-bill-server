-- CreateTable
CREATE TABLE `user` (
    `user_id` VARCHAR(12) NOT NULL,
    `user_name` VARCHAR(100) NOT NULL,
    `user_email` VARCHAR(100) NOT NULL,
    `is_email_verified` ENUM('YES', 'NO') NOT NULL,
    `salt` VARCHAR(29) NOT NULL,
    `hash` VARCHAR(60) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_user_email_key`(`user_email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `one_time_password` (
    `otp_id` VARCHAR(12) NOT NULL,
    `user_id` VARCHAR(12) NOT NULL,
    `otp` VARCHAR(6) NOT NULL,
    `valid_to` TIMESTAMP NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `one_time_password_user_id_key`(`user_id`),
    PRIMARY KEY (`otp_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `debt` (
    `debt_id` VARCHAR(12) NOT NULL,
    `lender_user_id` VARCHAR(12) NOT NULL,
    `borrower_user_id` VARCHAR(12) NOT NULL,
    `debt_description` VARCHAR(250) NOT NULL,
    `debt_amount` INTEGER NOT NULL,
    `debt_status` ENUM('WAITING', 'ACCEPTED', 'DECLINED', 'CLEARED') NOT NULL,
    `lender_accepted_date` DATE NOT NULL,
    `lender_declined_date` DATE NOT NULL,
    `borrower_accepted_date` DATE NOT NULL,
    `borrower_declined_date` DATE NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`debt_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `one_time_password` ADD CONSTRAINT `one_time_password_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `debt` ADD CONSTRAINT `debt_lender_user_id_fkey` FOREIGN KEY (`lender_user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `debt` ADD CONSTRAINT `debt_borrower_user_id_fkey` FOREIGN KEY (`borrower_user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
