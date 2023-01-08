-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2022 at 02:32 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wholesale`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `ar_name`, `en_name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'تويتا', 'Toyta', '16655014333405319188419_image.png', '2022-10-08 20:05:45', '2022-10-11 13:17:13'),
(2, 'مرسيدس', 'marceds', 'default.png', '2022-10-08 20:05:45', NULL),
(3, 'مازدا', 'mazda', '16655015184685666778098_image.png', '2022-10-11 13:18:38', '2022-10-11 13:18:38');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

CREATE TABLE `favourites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `items_infos`
--

CREATE TABLE `items_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `part_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `quotation_order_id` bigint(20) UNSIGNED NOT NULL,
  `ar_part_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_part_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ar_part_description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_part_description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `offered_stock` int(11) NOT NULL,
  `min_quantity_per_transaction` int(11) NOT NULL,
  `max_quantity_per_transaction` int(11) NOT NULL,
  `unit_of_packing` int(11) NOT NULL,
  `quantity_per_pallet` int(11) NOT NULL,
  `width` int(11) NOT NULL,
  `length` int(11) NOT NULL,
  `thickness` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `items_infos`
--

INSERT INTO `items_infos` (`id`, `part_number`, `brand_id`, `quotation_order_id`, `ar_part_name`, `en_part_name`, `ar_part_description`, `en_part_description`, `offered_stock`, `min_quantity_per_transaction`, `max_quantity_per_transaction`, `unit_of_packing`, `quantity_per_pallet`, `width`, `length`, `thickness`, `created_at`, `updated_at`) VALUES
(1, '200', 1, 1, 'تيست', 'test', 'وصف', 'info', 10, 2, 8, 20, 10, 20, 30, 50, NULL, NULL),
(5, '30', 1, 2, 'قطعه', 'part', 'وصف', 'info', 2000, 100, 2000, 10, 50, 100, 200, 300, '2022-12-13 14:07:35', '2022-12-13 14:07:35'),
(14, '11-22-33-44', 1, 34, 'قطعه', 'part', 'وصف', 'info', 2000, 100, 2000, 10, 50, 100, 200, 300, '2022-12-22 21:01:17', '2022-12-22 21:01:17'),
(15, '44-11-aa-gg-33', 1, 34, 'قطعه', 'part', 'وصف', 'info', 2000, 100, 2000, 10, 50, 100, 200, 300, '2022-12-22 21:01:17', '2022-12-22 21:01:17'),
(16, '11-22-33-44', 1, 35, 'قطعه', 'part', 'وصف', 'info', 2000, 10, 2000, 10, 50, 100, 200, 300, '2022-12-22 21:39:41', '2022-12-22 21:39:41'),
(17, '44-11-aa-gg-33', 1, 35, 'قطعه', 'part', 'وصف', 'info', 2000, 10, 2000, 10, 50, 100, 200, 300, '2022-12-22 21:39:41', '2022-12-22 21:39:41');

-- --------------------------------------------------------

--
-- Table structure for table `items_infos_prices`
--

CREATE TABLE `items_infos_prices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `min_quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `items_infos_prices`
--

INSERT INTO `items_infos_prices` (`id`, `item_id`, `min_quantity`, `price`, `created_at`, `updated_at`) VALUES
(1, 1, 100, 1000, NULL, NULL),
(2, 1, 1000, 10000, '2022-12-14 01:55:20', NULL),
(9, 5, 10, 100, '2022-12-13 14:07:35', '2022-12-13 14:07:35'),
(10, 5, 50, 80, '2022-12-13 14:07:35', '2022-12-13 14:07:35'),
(27, 14, 10, 100, '2022-12-22 21:01:17', '2022-12-22 21:01:17'),
(28, 14, 50, 80, '2022-12-22 21:01:17', '2022-12-22 21:01:17'),
(29, 15, 10, 100, '2022-12-22 21:01:17', '2022-12-22 21:01:17'),
(30, 15, 50, 80, '2022-12-22 21:01:17', '2022-12-22 21:01:17'),
(31, 16, 10, 100, '2022-12-22 21:39:41', '2022-12-22 21:39:41'),
(32, 16, 50, 80, '2022-12-22 21:39:41', '2022-12-22 21:39:41'),
(33, 17, 10, 100, '2022-12-22 21:39:41', '2022-12-22 21:39:41'),
(34, 17, 50, 80, '2022-12-22 21:39:41', '2022-12-22 21:39:41');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2013_07_14_203748_create_roles_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2015_10_03_154516_create_brands_table', 1),
(5, '2019_08_19_000000_create_failed_jobs_table', 1),
(6, '2022_07_15_011253_create_supports_table', 1),
(7, '2022_07_16_155307_create_notifications_table', 1),
(8, '2022_08_22_014125_create_users_brands_table', 1),
(9, '2022_08_22_014530_create_items_infos_table', 1),
(10, '2022_08_22_015106_create_quotations_table', 1),
(11, '2022_08_23_155724_create_favourites_table', 1),
(12, '2022_10_03_153437_create_users_banks_table', 1),
(13, '2022_10_03_160317_create_orders_table', 1),
(14, '2022_10_03_184326_create_items_infos_prices_table', 1),
(15, '2022_10_03_184500_create_orders_time_frames_table', 1),
(16, '2022_10_25_172800_create_quotation_orders_table', 2),
(17, '2022_12_08_175530_create_quotations_drafts_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sender_id` bigint(20) UNSIGNED NOT NULL,
  `receiver_id` bigint(20) UNSIGNED NOT NULL,
  `ar_info` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_info` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_info` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seen` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `sender_id`, `receiver_id`, `ar_info`, `en_info`, `tu_info`, `seen`, `created_at`, `updated_at`) VALUES
(1, 4, 3, 'تم الرد علي الطلب الذي رقمه 2 من قبل الادارة ', 'Admin reply to request number 2 please check this ', '', 0, '2022-12-13 14:07:35', '2022-12-13 14:07:35'),
(2, 4, 7, 'تم تغيير حاله طلب رقم {\"id\":1,\"user_id\":7,\"is_completed\":null,\"created_at\":\"2022-10-25T17:38:51.000000Z\",\"updated_at\":\"2022-12-14T16:22:27.000000Z\"} بنجاح ', 'request number {\"id\":1,\"user_id\":7,\"is_completed\":null,\"created_at\":\"2022-10-25T17:38:51.000000Z\",\"updated_at\":\"2022-12-14T16:22:27.000000Z\"} status has been updated successfully', '', 1, '2022-12-14 14:22:27', '2022-12-22 19:23:49'),
(3, 4, 7, 'تم تغيير حاله طلب رقم {\"id\":1,\"user_id\":7,\"is_completed\":3,\"created_at\":\"2022-10-25T17:38:51.000000Z\",\"updated_at\":\"2022-12-14T16:23:33.000000Z\"} بنجاح ', 'request number {\"id\":1,\"user_id\":7,\"is_completed\":3,\"created_at\":\"2022-10-25T17:38:51.000000Z\",\"updated_at\":\"2022-12-14T16:23:33.000000Z\"} status has been updated successfully', '', 1, '2022-12-14 14:23:33', '2022-12-22 19:23:49'),
(4, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 21:45:19'),
(5, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 21:45:19'),
(6, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 21:45:19'),
(7, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 21:45:19'),
(8, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 21:45:19'),
(9, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 21:45:19'),
(10, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 21:45:19'),
(11, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 21:45:19'),
(12, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 21:45:19'),
(13, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 21:45:19'),
(14, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 20:34:17'),
(15, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:25'),
(16, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:25'),
(17, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:25'),
(18, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:25'),
(19, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(20, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(21, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(22, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(23, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(24, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(25, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(26, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(27, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(28, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(29, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(30, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(31, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(32, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(33, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(34, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(35, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2022-12-22 19:20:26'),
(36, 7, 2, 'تم تعديل الطلب الذي رقمه 34 تعديل رقم القطعه : 11-22-33-44', 'order request has been updated 34 with part number : 11-22-33-44', '', 1, '2022-12-22 20:33:41', '2022-12-22 21:45:19'),
(37, 4, 7, 'تم الرد علي الطلب الذي رقمه 34 من قبل الادارة ', 'Admin reply to request number 34 please check this ', '', 0, '2022-12-22 20:54:34', '2022-12-22 20:54:34'),
(38, 4, 7, 'تم الرد علي الطلب الذي رقمه 34 من قبل الادارة ', 'Admin reply to request number 34 please check this ', '', 0, '2022-12-22 20:57:37', '2022-12-22 20:57:37'),
(39, 4, 7, 'تم الرد علي الطلب الذي رقمه 34 من قبل الادارة ', 'Admin reply to request number 34 please check this ', '', 0, '2022-12-22 20:58:42', '2022-12-22 20:58:42'),
(40, 4, 7, 'تم الرد علي الطلب الذي رقمه 34 من قبل الادارة ', 'Admin reply to request number 34 please check this ', '', 0, '2022-12-22 21:00:48', '2022-12-22 21:00:48'),
(41, 4, 7, 'تم الرد علي الطلب الذي رقمه 34 من قبل الادارة ', 'Admin reply to request number 34 please check this ', '', 0, '2022-12-22 21:01:17', '2022-12-22 21:01:17'),
(42, 4, 7, 'تم تغيير حاله طلب رقم 34 بنجاح ', 'request number 34 status has been updated successfully', '', 0, '2022-12-22 21:06:04', '2022-12-22 21:06:04'),
(43, 7, 2, 'تم تعديل الطلب الذي رقمه 35 تعديل رقم القطعه : 11-22-33-44', 'order request has been updated 35 with part number : 11-22-33-44', '', 1, '2022-12-22 21:37:11', '2022-12-22 21:45:19'),
(44, 4, 7, 'تم الرد علي الطلب الذي رقمه 35 من قبل الادارة ', 'Admin reply to request number 35 please check this ', '', 0, '2022-12-22 21:39:41', '2022-12-22 21:39:41'),
(45, 4, 7, 'تم تغيير حاله طلب رقم 35 بنجاح ', 'request number 35 status has been updated successfully', '', 0, '2022-12-22 21:42:52', '2022-12-22 21:42:52');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `remarks` int(11) NOT NULL,
  `time_frame_to_respond` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `is_approved` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders_time_frames`
--

CREATE TABLE `orders_time_frames` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `max_time` time NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quotations`
--

CREATE TABLE `quotations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `quotation_order_id` bigint(20) UNSIGNED NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `part_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quotations`
--

INSERT INTO `quotations` (`id`, `quotation_order_id`, `brand_id`, `part_number`, `quantity`, `deleted_at`, `created_at`, `updated_at`) VALUES
(19, 1, 1, '4', 100, NULL, '2022-10-25 15:38:51', '2022-10-25 15:38:51'),
(20, 1, 2, '200', 400, NULL, '2022-10-25 15:38:51', '2022-10-25 15:38:51'),
(21, 2, 1, '12', 10, NULL, '2022-10-25 15:44:46', '2022-10-25 15:44:46'),
(28, 16, 1, '12', 10, NULL, '2022-10-25 16:33:53', '2022-10-25 16:33:53'),
(30, 17, 1, '20', 400, NULL, '2022-10-25 21:31:19', '2022-10-25 21:31:19'),
(32, 17, 3, '60', 100, NULL, '2022-10-25 21:31:19', '2022-10-25 21:31:19'),
(33, 19, 1, '12', 10, NULL, '2022-10-25 21:35:38', '2022-10-25 21:35:38'),
(34, 19, 1, '5', 50, NULL, '2022-10-25 21:35:38', '2022-10-25 21:35:38'),
(35, 20, 1, '12', 10, NULL, '2022-11-05 18:22:08', '2022-11-05 18:22:08'),
(36, 20, 1, '5', 50, NULL, '2022-11-05 18:22:08', '2022-11-05 18:22:08'),
(38, 23, 1, '12', 10, NULL, '2022-12-05 14:00:24', '2022-12-05 14:00:24'),
(39, 23, 1, '5', 50, NULL, '2022-12-05 14:00:24', '2022-12-05 14:00:24'),
(40, 24, 1, '10', 5, NULL, '2022-12-05 23:50:43', '2022-12-05 23:50:43'),
(41, 24, 2, '10', 200, NULL, '2022-12-05 23:50:43', '2022-12-05 23:50:43'),
(42, 25, 1, '12', 10, NULL, '2022-12-05 23:51:27', '2022-12-05 23:51:27'),
(43, 25, 1, '5', 50, NULL, '2022-12-05 23:51:27', '2022-12-05 23:51:27'),
(47, 30, 1, '12', 10, NULL, '2022-12-14 14:45:03', '2022-12-14 14:45:03'),
(48, 30, 1, '5', 20, NULL, '2022-12-14 14:45:03', '2022-12-14 14:45:03'),
(49, 33, 1, '4', 10, NULL, '2022-12-21 16:18:54', '2022-12-21 16:18:54'),
(50, 33, 1, '10', 40, NULL, '2022-12-21 16:18:54', '2022-12-21 16:18:54'),
(51, 34, 1, '11-22-33-44', 10, NULL, '2022-12-22 20:31:09', '2022-12-22 20:31:09'),
(52, 34, 1, '44-11-aa-gg-33', 20, NULL, '2022-12-22 20:31:09', '2022-12-22 20:31:09'),
(53, 35, 1, '11-22-33-44', 10, NULL, '2022-12-22 21:34:42', '2022-12-22 21:34:42'),
(54, 35, 1, '44-11-aa-gg-33', 20, NULL, '2022-12-22 21:34:42', '2022-12-22 21:34:42');

-- --------------------------------------------------------

--
-- Table structure for table `quotations_drafts`
--

CREATE TABLE `quotations_drafts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `quotation_id` bigint(20) UNSIGNED NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `part_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quotations_drafts`
--

INSERT INTO `quotations_drafts` (`id`, `quotation_id`, `brand_id`, `part_number`, `quantity`, `deleted_at`, `created_at`, `updated_at`) VALUES
(3, 19, 1, '4-2', 100, NULL, '2022-12-08 17:06:33', '2022-12-08 17:06:33'),
(4, 19, 1, '4-2', 90, NULL, '2022-12-08 17:06:33', '2022-12-08 17:06:33'),
(5, 19, 1, '4-2', 92, NULL, '2022-12-11 14:40:33', '2022-12-11 14:40:33'),
(6, 19, 1, '4-2', 93, NULL, '2022-12-11 14:42:32', '2022-12-11 14:42:32'),
(7, 19, 1, '4-2', 95, NULL, '2022-12-11 14:46:38', '2022-12-11 14:46:38'),
(8, 20, 2, '200', 398, NULL, '2022-12-11 15:01:53', '2022-12-11 15:01:53'),
(9, 19, 1, '4-2', 95, '2022-12-11 15:02:29', '2022-12-11 15:02:29', '2022-12-11 15:02:29'),
(10, 20, 2, '200', 397, NULL, '2022-12-11 15:11:29', '2022-12-11 15:11:29'),
(11, 51, 1, '11-22-33-44', 50, NULL, '2022-12-22 20:33:41', '2022-12-22 20:33:41'),
(12, 53, 1, '11-22-33-44', 40, NULL, '2022-12-22 21:37:11', '2022-12-22 21:37:11');

-- --------------------------------------------------------

--
-- Table structure for table `quotation_orders`
--

CREATE TABLE `quotation_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `is_completed` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quotation_orders`
--

INSERT INTO `quotation_orders` (`id`, `user_id`, `is_completed`, `created_at`, `updated_at`) VALUES
(1, 7, 1, '2022-10-25 15:38:51', '2022-12-14 14:23:33'),
(2, 3, 1, '2022-10-25 15:44:46', '2022-12-13 14:07:35'),
(16, 3, 0, '2022-10-25 16:33:53', '2022-10-25 16:33:53'),
(17, 3, 0, '2022-10-25 21:31:19', '2022-10-25 21:31:19'),
(19, 3, 0, '2022-10-25 21:35:38', '2022-10-25 21:35:38'),
(20, 5, 0, '2022-11-05 18:22:07', '2022-11-05 18:22:07'),
(23, 6, 0, '2022-12-05 14:00:24', '2022-12-05 14:00:24'),
(24, 6, 0, '2022-12-05 23:50:43', '2022-12-05 23:50:43'),
(25, 6, 0, '2022-12-05 23:51:26', '2022-12-05 23:51:26'),
(30, 7, 0, '2022-12-14 14:45:03', '2022-12-14 14:45:03'),
(33, 7, 0, '2022-12-21 16:18:54', '2022-12-21 16:18:54'),
(34, 7, 3, '2022-12-22 20:31:08', '2022-12-22 21:06:04'),
(35, 7, 3, '2022-12-22 21:34:42', '2022-12-22 21:42:52');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2022-10-08 18:45:02', NULL),
(2, 'seller', '2022-10-08 18:45:02', NULL),
(3, 'buyer', '2022-10-08 18:45:17', NULL),
(4, 'buyer_seller', '2022-10-08 18:45:17', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `supports`
--

CREATE TABLE `supports` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `reply` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `serial_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.png',
  `approved` tinyint(4) NOT NULL DEFAULT 0,
  `wallet` int(11) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `username`, `email`, `email_verified_at`, `serial_number`, `password`, `phone`, `image`, `approved`, `wallet`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 1, 'احمد حسن', 'alyaa@yahoo.com', NULL, '', '$2y$10$TZPgw.sBqDwjydK5t07h7ucEqHCtkg3DCQX0mmwCPZQOVVp8CgCtW', '3123123111', 'default.png', 0, 0, NULL, '2022-10-08 17:54:59', '2022-10-08 17:54:59'),
(3, 2, 'ابراهيم مصطفي', 'ibrahim@yahoo.com', NULL, '', '$2y$10$UMhuogVb8pYciodY3tRI3OPGapowchh3GUaMh3qUXjzZXsNNFs/pm', '1231231234', 'default.png', 0, 0, NULL, '2022-10-11 17:07:18', '2022-10-11 17:07:18'),
(4, 1, 'محمود عبد الله', 'mahmoud_elzanklony@yahoo.com', NULL, '', '$2y$10$DF2n.b0J1LQ8FTWdmTfVVu1gl1gz3maB19dXLYpLazcL5Dzo7TJXS', '01005663932', 'default.png', 0, 0, NULL, '2022-10-24 20:29:16', '2022-10-24 20:29:16'),
(5, 3, 'اسماء علي', 'asmaa@yahoo.com', NULL, '', '$2y$10$l4IWerbQVSbSVt5g75JmTuXpnYaE9Px9gjOyHPlygCWXDoPpCdVfG', '01005663932', 'default.png', 0, 0, NULL, '2022-11-05 18:21:30', '2022-11-05 18:21:30'),
(6, 3, 'reem yehia', 'reem@yahoo.com', NULL, '', '$2y$10$w0bqAZZZcN/2W/sDA5vtC.Vc4.LVV5FM3749/uLQg20KQ7ClCsTKS', '01005663932', 'default.png', 0, 0, NULL, '2022-12-03 15:37:39', '2022-12-03 15:37:39'),
(7, 3, NULL, 'nada@yahoo.com', NULL, '', '$2y$10$d4icemQk6HepVJLP8KjJsOykqMcepMGqDaJYHFDYXZiWFbDKyrPAe', '0100123123', 'default.png', 0, 0, NULL, '2022-12-06 20:05:12', '2022-12-06 20:10:07');

-- --------------------------------------------------------

--
-- Table structure for table `users_banks`
--

CREATE TABLE `users_banks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `account_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iban` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `swift_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_licence` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trade_licence` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users_banks`
--

INSERT INTO `users_banks` (`id`, `user_id`, `account_number`, `iban`, `swift_code`, `bank_licence`, `trade_licence`, `created_at`, `updated_at`) VALUES
(1, 3, '3123123', '3123123', '3123', '16655151476745138688321_image.png', '', '2022-10-11 17:07:18', '2022-10-11 17:07:18');

-- --------------------------------------------------------

--
-- Table structure for table `users_brands`
--

CREATE TABLE `users_brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users_brands`
--

INSERT INTO `users_brands` (`id`, `user_id`, `brand_id`, `created_at`, `updated_at`) VALUES
(1, 3, 1, '2022-10-11 17:07:18', '2022-10-11 17:07:18'),
(2, 3, 3, '2022-10-11 17:07:18', '2022-10-11 17:07:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `favourites_user_id_foreign` (`user_id`),
  ADD KEY `favourites_item_id_foreign` (`item_id`);

--
-- Indexes for table `items_infos`
--
ALTER TABLE `items_infos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `items_infos_brand_id_foreign` (`brand_id`),
  ADD KEY `quotation_order_id` (`quotation_order_id`);

--
-- Indexes for table `items_infos_prices`
--
ALTER TABLE `items_infos_prices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `items_infos_prices_item_id_foreign` (`item_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_sender_id_foreign` (`sender_id`),
  ADD KEY `notifications_receiver_id_foreign` (`receiver_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`),
  ADD KEY `orders_item_id_foreign` (`item_id`);

--
-- Indexes for table `orders_time_frames`
--
ALTER TABLE `orders_time_frames`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `quotations`
--
ALTER TABLE `quotations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quotations_brand_id_foreign` (`brand_id`),
  ADD KEY `quotations_user_id_foreign` (`quotation_order_id`);

--
-- Indexes for table `quotations_drafts`
--
ALTER TABLE `quotations_drafts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quotations_drafts_quotation_id_foreign` (`quotation_id`),
  ADD KEY `quotations_drafts_brand_id_foreign` (`brand_id`);

--
-- Indexes for table `quotation_orders`
--
ALTER TABLE `quotation_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quotation_orders_user_id_foreign` (`user_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supports`
--
ALTER TABLE `supports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- Indexes for table `users_banks`
--
ALTER TABLE `users_banks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_banks_user_id_foreign` (`user_id`);

--
-- Indexes for table `users_brands`
--
ALTER TABLE `users_brands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_brands_user_id_foreign` (`user_id`),
  ADD KEY `users_brands_brand_id_foreign` (`brand_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favourites`
--
ALTER TABLE `favourites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items_infos`
--
ALTER TABLE `items_infos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `items_infos_prices`
--
ALTER TABLE `items_infos_prices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders_time_frames`
--
ALTER TABLE `orders_time_frames`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quotations`
--
ALTER TABLE `quotations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `quotations_drafts`
--
ALTER TABLE `quotations_drafts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `quotation_orders`
--
ALTER TABLE `quotation_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `supports`
--
ALTER TABLE `supports`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users_banks`
--
ALTER TABLE `users_banks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users_brands`
--
ALTER TABLE `users_brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `favourites_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `items_infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `items_infos`
--
ALTER TABLE `items_infos`
  ADD CONSTRAINT `items_infos_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `items_infos_ibfk_1` FOREIGN KEY (`quotation_order_id`) REFERENCES `quotation_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `items_infos_prices`
--
ALTER TABLE `items_infos_prices`
  ADD CONSTRAINT `items_infos_prices_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `items_infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_receiver_id_foreign` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notifications_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `items_infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quotations`
--
ALTER TABLE `quotations`
  ADD CONSTRAINT `quotations_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quotations_user_id_foreign` FOREIGN KEY (`quotation_order_id`) REFERENCES `quotation_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quotations_drafts`
--
ALTER TABLE `quotations_drafts`
  ADD CONSTRAINT `quotations_drafts_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quotations_drafts_quotation_id_foreign` FOREIGN KEY (`quotation_id`) REFERENCES `quotations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quotation_orders`
--
ALTER TABLE `quotation_orders`
  ADD CONSTRAINT `quotation_orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users_banks`
--
ALTER TABLE `users_banks`
  ADD CONSTRAINT `users_banks_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users_brands`
--
ALTER TABLE `users_brands`
  ADD CONSTRAINT `users_brands_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_brands_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
