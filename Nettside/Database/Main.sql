CREATE DATABASE IF NOT EXISTS `ksu3d`;

USE `ksu3d`;

-- Table for customers
CREATE TABLE IF NOT EXISTS `customers` (
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
);

-- Table for 3D models
CREATE TABLE IF NOT EXISTS `models` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `file_path` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (`id`)
);

-- Table for orders
CREATE TABLE IF NOT EXISTS `orders` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `customer_id` INT(11) NOT NULL,
    `model_id` INT(11) NOT NULL,
    `quantity` INT(11) NOT NULL,
    `total_price` DECIMAL(10, 2) NOT NULL,
    `order_date` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`model_id`) REFERENCES `models`(`id`)
);
