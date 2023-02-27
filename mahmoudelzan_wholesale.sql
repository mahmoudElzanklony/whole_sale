-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 162.210.100.250:3306
-- Generation Time: Feb 14, 2023 at 02:00 PM
-- Server version: 5.7.17
-- PHP Version: 7.0.33-0+deb9u12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mahmoudelzan_wholesale`
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
(1, 'تويويتا', 'Toyota', '16746365422029989781626_image.png', '2022-10-08 20:05:45', '2023-01-26 13:10:35'),
(2, 'مرسي', 'marceds', 'default.png', '2022-10-08 20:05:45', '2023-01-26 13:18:08'),
(3, 'مازدا', 'mazda', '16655015184685666778098_image.png', '2022-10-11 13:18:38', '2022-10-11 13:18:38'),
(4, 'أي سي دلكو', 'ACDelco', '16747135512683926908145_image.png', '2023-01-26 06:12:31', '2023-01-26 06:12:31');

-- --------------------------------------------------------

--
-- Table structure for table `common_questions`
--

CREATE TABLE `common_questions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ar_question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ar_answer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_answer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `common_questions`
--

INSERT INTO `common_questions` (`id`, `ar_question`, `en_question`, `ar_answer`, `en_answer`, `created_at`, `updated_at`) VALUES
(1, 'سؤال', 'question', 'answerd asd as', 'das das d', '2023-02-03 15:42:50', '2023-02-03 15:42:50'),
(2, 'dasd', 'dsadasd', 'dsaddsaddsaddsaddsaddsad', 'dsaddsaddsaddsad', '2023-02-03 15:43:01', '2023-02-03 15:43:01');

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
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
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
(21, '11-22-33-44', 1, 42, 'قطعه', 'part', 'وصف', 'info', 2000, 10, 2000, 10, 50, 100, 200, 300, '2022-12-27 15:15:14', '2022-12-27 15:15:14'),
(22, '44-11-aa-gg-33', 1, 42, 'قطعه', 'part', 'وصف', 'info', 2000, 10, 2000, 10, 50, 100, 200, 300, '2022-12-27 15:15:14', '2022-12-27 15:15:14'),
(23, '11-22-33-44', 1, 49, 'قطعه', 'part', 'وصف', 'info', 2000, 10, 2000, 10, 50, 100, 200, 300, '2023-01-11 15:57:34', '2023-01-11 15:57:34'),
(24, '44-11-aa-gg-33', 1, 49, 'قطعه', 'part', 'وصف', 'info', 2000, 10, 2000, 10, 50, 100, 200, 300, '2023-01-11 15:57:34', '2023-01-11 15:57:34'),
(25, '11-22-33-44', 1, 50, 'قطعه', 'part', 'وصف', 'info', 2000, 10, 2000, 10, 50, 100, 200, 300, '2023-01-11 16:21:26', '2023-01-11 16:21:26'),
(26, '44-11-aa-gg-33', 1, 50, 'قطعه', 'part', 'وصف', 'info', 2000, 10, 2000, 10, 50, 100, 200, 300, '2023-01-11 16:21:26', '2023-01-11 16:21:26'),
(27, '11-22-33-44', 1, 54, 'قطعه', 'part', 'وصف', 'info', 2000, 10, 2000, 10, 50, 100, 200, 300, '2023-01-18 19:46:52', '2023-01-18 19:46:52'),
(28, '44-11-aa-gg-33', 1, 54, 'قطعه', 'part', 'وصف', 'info', 2000, 10, 2000, 10, 50, 100, 200, 300, '2023-01-18 19:46:52', '2023-01-18 19:46:52');

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
(41, 21, 10, 100, '2022-12-27 15:15:14', '2022-12-27 15:15:14'),
(42, 21, 50, 80, '2022-12-27 15:15:14', '2022-12-27 15:15:14'),
(43, 22, 10, 100, '2022-12-27 15:15:14', '2022-12-27 15:15:14'),
(44, 22, 50, 80, '2022-12-27 15:15:14', '2022-12-27 15:15:14'),
(45, 23, 10, 100, '2023-01-11 15:57:34', '2023-01-11 15:57:34'),
(46, 23, 50, 80, '2023-01-11 15:57:34', '2023-01-11 15:57:34'),
(47, 24, 10, 100, '2023-01-11 15:57:34', '2023-01-11 15:57:34'),
(48, 24, 50, 80, '2023-01-11 15:57:34', '2023-01-11 15:57:34'),
(49, 25, 10, 100, '2023-01-11 16:21:26', '2023-01-11 16:21:26'),
(50, 25, 50, 80, '2023-01-11 16:21:26', '2023-01-11 16:21:26'),
(51, 26, 10, 100, '2023-01-11 16:21:26', '2023-01-11 16:21:26'),
(52, 26, 50, 80, '2023-01-11 16:21:26', '2023-01-11 16:21:26'),
(53, 27, 10, 100, '2023-01-18 19:46:52', '2023-01-18 19:46:52'),
(54, 27, 50, 80, '2023-01-18 19:46:52', '2023-01-18 19:46:52'),
(55, 28, 10, 100, '2023-01-18 19:46:52', '2023-01-18 19:46:52'),
(56, 28, 50, 80, '2023-01-18 19:46:52', '2023-01-18 19:46:52');

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
(17, '2022_12_08_175530_create_quotations_drafts_table', 3),
(18, '2023_01_05_161505_create_tax_moneys_table', 4),
(19, '2023_01_07_172815_create_receipt_quotations_table', 5),
(20, '2023_01_08_030214_create_quotations_upload_moneys_table', 6),
(21, '2023_01_30_201704_create_privillages_table', 7),
(22, '2023_01_30_203538_create_users_privillages_table', 7),
(23, '2023_02_01_005115_create_common_questions_table', 7);

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
  `seen` tinyint(4) NOT NULL DEFAULT '0',
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
(4, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:04'),
(5, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:04'),
(6, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:04'),
(7, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:04'),
(8, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:04'),
(9, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:04'),
(10, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:04'),
(11, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:04'),
(12, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:04'),
(13, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(14, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(15, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(16, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(17, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(18, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(19, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(20, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(21, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(22, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(23, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(24, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:10'),
(25, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:08'),
(26, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:08'),
(27, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:08'),
(28, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:08'),
(29, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:08'),
(30, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:08'),
(31, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:08'),
(32, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:08'),
(33, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:08'),
(34, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:08'),
(35, 3, 4, 'test', 'test', '', 1, '2022-12-22 18:05:12', '2023-01-26 13:53:08'),
(37, 4, 7, 'تم الرد علي الطلب الذي رقمه 34 من قبل الادارة ', 'Admin reply to request number 34 please check this ', '', 1, '2022-12-22 20:54:34', '2023-01-26 13:53:08'),
(38, 4, 7, 'تم الرد علي الطلب الذي رقمه 34 من قبل الادارة ', 'Admin reply to request number 34 please check this ', '', 0, '2022-12-22 20:57:37', '2022-12-22 20:57:37'),
(39, 4, 7, 'تم الرد علي الطلب الذي رقمه 34 من قبل الادارة ', 'Admin reply to request number 34 please check this ', '', 0, '2022-12-22 20:58:42', '2022-12-22 20:58:42'),
(40, 4, 7, 'تم الرد علي الطلب الذي رقمه 34 من قبل الادارة ', 'Admin reply to request number 34 please check this ', '', 0, '2022-12-22 21:00:48', '2022-12-22 21:00:48'),
(41, 4, 7, 'تم الرد علي الطلب الذي رقمه 34 من قبل الادارة ', 'Admin reply to request number 34 please check this ', '', 0, '2022-12-22 21:01:17', '2022-12-22 21:01:17'),
(42, 4, 7, 'تم تغيير حاله طلب رقم 34 بنجاح ', 'request number 34 status has been updated successfully', '', 0, '2022-12-22 21:06:04', '2022-12-22 21:06:04'),
(44, 4, 7, 'تم الرد علي الطلب الذي رقمه 35 من قبل الادارة ', 'Admin reply to request number 35 please check this ', '', 0, '2022-12-22 21:39:41', '2022-12-22 21:39:41'),
(45, 4, 7, 'تم تغيير حاله طلب رقم 35 بنجاح ', 'request number 35 status has been updated successfully', '', 0, '2022-12-22 21:42:52', '2022-12-22 21:42:52'),
(47, 4, 7, 'تم الرد علي الطلب الذي رقمه 42 من قبل الادارة ', 'Admin reply to request number 42 please check this ', '', 0, '2022-12-27 15:15:14', '2022-12-27 15:15:14'),
(48, 4, 7, 'تم تغيير حاله طلب رقم 42 بنجاح ', 'request number 42 status has been updated successfully', '', 0, '2022-12-27 15:27:01', '2022-12-27 15:27:01'),
(49, 4, 7, 'تم الرد علي الطلب الذي رقمه 49 من قبل الادارة ', 'Admin reply to request number 49 please check this ', '', 0, '2023-01-11 15:57:34', '2023-01-11 15:57:34'),
(50, 4, 7, 'تم تغيير حاله طلب رقم 49 بنجاح ', 'request number 49 status has been updated successfully', '', 0, '2023-01-11 16:06:52', '2023-01-11 16:06:52'),
(51, 4, 7, 'تم الرد علي الطلب الذي رقمه 50 من قبل الادارة ', 'Admin reply to request number 50 please check this ', '', 0, '2023-01-11 16:21:26', '2023-01-11 16:21:26'),
(52, 4, 7, 'تم تغيير حاله طلب رقم 50 بنجاح ', 'request number 50 status has been updated successfully', '', 0, '2023-01-11 16:34:15', '2023-01-11 16:34:15'),
(53, 4, 13, 'تم الرد علي الطلب الذي رقمه 54 من قبل الادارة ', 'Admin reply to request number 54 please check this ', '', 0, '2023-01-18 19:46:52', '2023-01-18 19:46:52'),
(54, 13, 3, 'تم تعديل الطلب الذي رقمه 54 تعديل رقم القطعه : 11-22-33-44', 'order request has been updated 54 with part number : 11-22-33-44', '', 0, '2023-01-18 19:53:31', '2023-01-18 19:53:31');

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
-- Table structure for table `privillages`
--

CREATE TABLE `privillages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `privillages`
--

INSERT INTO `privillages` (`id`, `ar_name`, `en_name`, `icon`, `created_at`, `updated_at`) VALUES
(1, 'الرئيسية', 'home', 'ri-home-2-line', '2023-01-30 20:42:32', NULL),
(2, 'الاعدادت', 'settings', 'ri-settings-line', '2023-01-30 20:42:37', NULL),
(3, 'بياناتي الشخصية', 'personal-info', 'ri-user-line', '2023-01-30 20:42:46', NULL),
(4, 'المستخدمين', 'users', 'ri-group-line', '2023-01-30 20:46:32', NULL),
(5, 'الانواع', 'brands', 'ri-roadster-line', '2023-01-30 20:46:32', NULL),
(6, 'طلبات  التسعير', 'pricing requests', 'ri-send-plane-line', '2023-01-30 20:46:32', NULL),
(7, 'المشرفين', 'supervisors', 'ri-shield-user-line', '2023-01-30 20:51:24', NULL),
(8, 'الاسئلة الشائعه', 'common questions', 'ri-question-mark', '2023-01-30 20:53:50', NULL);

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
(54, 35, 1, '44-11-aa-gg-33', 20, NULL, '2022-12-22 21:34:42', '2022-12-22 21:34:42'),
(55, 41, 1, '11-22-33-44', 10, NULL, '2022-12-27 14:56:55', '2022-12-27 14:56:55'),
(56, 41, 1, '44-11-aa-gg-33', 20, NULL, '2022-12-27 14:56:55', '2022-12-27 14:56:55'),
(57, 42, 1, '11-22-33-44', 10, NULL, '2022-12-27 14:57:39', '2022-12-27 14:57:39'),
(58, 42, 1, '44-11-aa-gg-33', 20, NULL, '2022-12-27 14:57:39', '2022-12-27 14:57:39'),
(69, 48, 1, '11-22-33-44', 10, NULL, '2023-01-01 22:55:41', '2023-01-01 22:55:41'),
(70, 48, 1, '44-11-aa-gg-33', 20, NULL, '2023-01-01 22:55:41', '2023-01-01 22:55:41'),
(71, 49, 1, '11-22-33-44', 10, NULL, '2023-01-11 15:54:00', '2023-01-11 15:54:00'),
(72, 49, 1, '44-11-aa-gg-33', 20, NULL, '2023-01-11 15:54:00', '2023-01-11 15:54:00'),
(73, 50, 1, '11-22-33-44', 10, NULL, '2023-01-11 16:16:41', '2023-01-11 16:16:41'),
(74, 50, 1, '44-11-aa-gg-33', 20, NULL, '2023-01-11 16:16:41', '2023-01-11 16:16:41'),
(75, 51, 1, '11-22-33-44', 10, NULL, '2023-01-18 15:24:32', '2023-01-18 15:24:32'),
(76, 51, 1, '44-11-aa-gg-33', 20, NULL, '2023-01-18 15:24:32', '2023-01-18 15:24:32'),
(81, 54, 1, '11-22-33-44', 10, NULL, '2023-01-18 19:38:40', '2023-01-18 19:38:40'),
(82, 54, 1, '44-11-aa-gg-33', 20, NULL, '2023-01-18 19:38:40', '2023-01-18 19:38:40'),
(86, 57, 1, '123123', 100, NULL, '2023-01-26 05:19:49', '2023-01-26 05:19:49'),
(87, 57, 1, '111111', 50, NULL, '2023-01-26 05:19:49', '2023-01-26 05:19:49'),
(88, 57, 1, '123123', 50, NULL, '2023-01-26 05:19:49', '2023-01-26 05:19:49'),
(89, 59, 1, '11-22-33-44', 100, NULL, '2023-01-26 05:39:30', '2023-01-26 05:39:30'),
(90, 59, 3, '44-11-aa-gg-33', 50, NULL, '2023-01-26 05:39:30', '2023-01-26 05:39:30'),
(91, 59, 1, '44-11-aa-gg-33', 100, NULL, '2023-01-26 05:39:30', '2023-01-26 05:39:30'),
(92, 59, 1, '11-22-33-44', 50, NULL, '2023-01-26 05:39:30', '2023-01-26 05:39:30'),
(93, 61, 1, '11-22-33-44', 10, NULL, '2023-01-26 13:44:00', '2023-01-26 13:44:00'),
(94, 61, 1, '44-11-aa-gg-33', 20, NULL, '2023-01-26 13:44:00', '2023-01-26 13:44:00'),
(95, 62, 1, '312ddsa', 312, NULL, '2023-01-26 14:03:59', '2023-01-26 14:03:59'),
(96, 64, 1, '11-22-33-44', 10, NULL, '2023-02-02 01:47:48', '2023-02-02 01:47:48'),
(97, 64, 1, '44-11-aa-gg-33', 20, NULL, '2023-02-02 01:47:48', '2023-02-02 01:47:48'),
(98, 65, 1, '11-22-33-44', 10, NULL, '2023-02-03 14:51:38', '2023-02-03 14:51:38'),
(99, 65, 1, '44-11-aa-gg-33', 20, NULL, '2023-02-03 14:51:38', '2023-02-03 14:51:38'),
(100, 66, 1, '11-22-33-44', 10, NULL, '2023-02-03 15:06:14', '2023-02-03 15:06:14'),
(101, 66, 1, '44-11-aa-gg-33', 20, NULL, '2023-02-03 15:06:14', '2023-02-03 15:06:14'),
(102, 67, 1, '11-22-33-44', 10, NULL, '2023-02-03 15:37:43', '2023-02-03 15:37:43'),
(103, 67, 1, '44-11-aa-gg-33', 20, NULL, '2023-02-03 15:37:43', '2023-02-03 15:37:43');

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
(12, 53, 1, '11-22-33-44', 40, NULL, '2022-12-22 21:37:11', '2022-12-22 21:37:11'),
(13, 57, 1, '11-22-33-44', 145, NULL, '2022-12-27 15:00:57', '2022-12-27 15:00:57'),
(14, 51, 1, '11-22-33-44', 51, NULL, '2022-12-22 20:33:41', '2022-12-22 20:33:41'),
(15, 81, 1, '11-22-33-44', 15, NULL, '2023-01-18 19:53:31', '2023-01-18 19:53:31');

-- --------------------------------------------------------

--
-- Table structure for table `quotations_upload_moneys`
--

CREATE TABLE `quotations_upload_moneys` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `quotation_id` bigint(20) UNSIGNED NOT NULL,
  `file` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quotations_upload_moneys`
--

INSERT INTO `quotations_upload_moneys` (`id`, `quotation_id`, `file`, `created_at`, `updated_at`) VALUES
(2, 49, '16734604039557065258949_image.pdf', '2023-01-11 16:06:43', '2023-01-11 16:06:43'),
(3, 50, '16734620335154310651820_image.pdf', '2023-01-11 16:33:53', '2023-01-11 16:33:53');

-- --------------------------------------------------------

--
-- Table structure for table `quotation_orders`
--

CREATE TABLE `quotation_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `is_completed` tinyint(4) NOT NULL DEFAULT '0',
  `tax` float NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quotation_orders`
--

INSERT INTO `quotation_orders` (`id`, `user_id`, `is_completed`, `tax`, `created_at`, `updated_at`) VALUES
(1, 7, 1, 5, '2022-10-25 15:38:51', '2022-12-14 14:23:33'),
(2, 3, 1, 50, '2022-10-25 15:44:46', '2022-12-13 14:07:35'),
(16, 3, 0, 0, '2022-10-25 16:33:53', '2022-10-25 16:33:53'),
(17, 3, 0, 0, '2022-10-25 21:31:19', '2022-10-25 21:31:19'),
(19, 3, 0, 0, '2022-10-25 21:35:38', '2022-10-25 21:35:38'),
(20, 5, 0, 0, '2022-11-05 18:22:07', '2022-11-05 18:22:07'),
(23, 6, 0, 0, '2022-12-05 14:00:24', '2022-12-05 14:00:24'),
(24, 6, 0, 0, '2022-12-05 23:50:43', '2022-12-05 23:50:43'),
(25, 6, 0, 0, '2022-12-05 23:51:26', '2022-12-05 23:51:26'),
(30, 7, 0, 0, '2022-12-14 14:45:03', '2022-12-14 14:45:03'),
(33, 7, 0, 0, '2022-12-21 16:18:54', '2022-12-21 16:18:54'),
(34, 7, 3, 0, '2022-12-22 20:31:08', '2022-12-22 21:06:04'),
(35, 7, 3, 0, '2022-12-22 21:34:42', '2022-12-22 21:42:52'),
(41, 7, 0, 0, '2022-12-27 14:56:54', '2022-12-27 14:56:54'),
(42, 7, 3, 50, '2022-12-27 14:57:39', '2022-12-27 15:27:01'),
(48, 7, 0, 0, '2023-01-01 22:55:41', '2023-01-01 22:55:41'),
(49, 7, 3, 10.5, '2023-01-11 15:53:58', '2023-01-11 16:06:52'),
(50, 7, 3, 50, '2023-01-11 16:16:41', '2023-01-11 16:34:15'),
(51, 7, 0, 20, '2023-01-18 15:24:31', '2023-01-18 15:24:31'),
(54, 13, 2, 20, '2023-01-18 19:38:40', '2023-01-18 19:54:26'),
(57, 15, 0, 20.5, '2023-01-26 05:19:49', '2023-01-26 05:19:49'),
(59, 15, 0, 20.5, '2023-01-26 05:39:30', '2023-01-26 05:39:30'),
(61, 7, 0, 15, '2023-01-26 13:44:00', '2023-01-26 13:44:00'),
(62, 7, 0, 15, '2023-01-26 14:03:59', '2023-01-26 14:03:59'),
(64, 7, 0, 15, '2023-02-02 01:47:48', '2023-02-02 01:47:48'),
(65, 7, 0, 15, '2023-02-03 14:51:38', '2023-02-03 14:51:38'),
(66, 7, 0, 15, '2023-02-03 15:06:14', '2023-02-03 15:06:14'),
(67, 7, 0, 15, '2023-02-03 15:37:43', '2023-02-03 15:37:43');

-- --------------------------------------------------------

--
-- Table structure for table `receipt_quotations`
--

CREATE TABLE `receipt_quotations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `quotation_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `receipt_quotations`
--

INSERT INTO `receipt_quotations` (`id`, `quotation_id`, `image`, `created_at`, `updated_at`) VALUES
(1, 34, '16731397612414296873757_image.jpg', '2023-01-07 17:35:51', '2023-01-07 23:02:41'),
(2, 42, '16731461702580902196999_image.png', '2023-01-07 23:00:02', '2023-01-08 00:49:30'),
(3, 35, '16731399456621359542929_image.jpg', '2023-01-07 23:05:45', '2023-01-07 23:05:45'),
(4, 49, '16734603516227585299595_image.jpg', '2023-01-11 16:01:36', '2023-01-11 16:05:51'),
(5, 50, '16740005434364056329929_pdf.pdf', '2023-01-11 16:24:55', '2023-01-17 22:09:03'),
(6, 54, '16740728605828194011190_image.jpg', '2023-01-18 19:54:26', '2023-01-18 20:14:20');

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
(4, 'buyer_seller', '2022-10-08 18:45:17', NULL),
(5, 'supervisor', '2023-02-02 00:00:00', NULL);

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
-- Table structure for table `tax_moneys`
--

CREATE TABLE `tax_moneys` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tax` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tax_moneys`
--

INSERT INTO `tax_moneys` (`id`, `tax`, `created_at`, `updated_at`) VALUES
(1, 15.00, '2023-01-05 15:08:33', '2023-01-26 05:49:30');

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
  `approved` tinyint(4) NOT NULL DEFAULT '0',
  `wallet` int(11) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `username`, `email`, `email_verified_at`, `serial_number`, `password`, `phone`, `image`, `approved`, `wallet`, `remember_token`, `created_at`, `updated_at`) VALUES
(3, 2, 'ابراهيم مصطفي', 'ibrahim@yahoo.com', NULL, '', '$2y$10$UMhuogVb8pYciodY3tRI3OPGapowchh3GUaMh3qUXjzZXsNNFs/pm', '1231231234', 'default.png', 0, 0, NULL, '2022-10-11 17:07:18', '2022-10-11 17:07:18'),
(4, 1, 'محمود عبد الله', 'mahmoud_elzanklony@yahoo.com', NULL, '', '$2y$10$DF2n.b0J1LQ8FTWdmTfVVu1gl1gz3maB19dXLYpLazcL5Dzo7TJXS', '01005663932', 'default.png', 1, 0, NULL, '2022-10-24 20:29:16', '2023-02-05 20:24:09'),
(5, 3, 'اسماء علي', 'asmaa@yahoo.com', NULL, '', '$2y$10$l4IWerbQVSbSVt5g75JmTuXpnYaE9Px9gjOyHPlygCWXDoPpCdVfG', '01005663932', 'default.png', 0, 0, NULL, '2022-11-05 18:21:30', '2022-11-05 18:21:30'),
(6, 3, 'reem yehia', 'reem@yahoo.com', NULL, '', '$2y$10$uPrn54aTQ51R3c9XnSWCGOc4T7f5jTMhaArhDDmdNR08ZZ1WNZXYO', '01005663932', 'default.png', 0, 0, NULL, '2022-12-03 15:37:39', '2023-01-01 19:43:20'),
(7, 3, NULL, 'nada@yahoo.com', NULL, '', '$2y$10$d4icemQk6HepVJLP8KjJsOykqMcepMGqDaJYHFDYXZiWFbDKyrPAe', '0100123123', 'default.png', 1, 0, NULL, '2022-12-06 20:05:12', '2022-12-06 20:10:07'),
(13, 3, 'Khaled Algarawy', 'khaledme_2000@yahoo.com', NULL, '', '$2y$10$mDOru8GJLf/m5vSMmkk6MuKyIyngOj8aFxurG8cuA/DM6yu/lzfj.', '010032133123123', 'default.png', 0, 0, NULL, '2023-01-18 19:08:35', '2023-02-01 16:49:34'),
(14, 3, NULL, 'hoda19972016@gmail.com', NULL, '', '$2y$10$txYOeA5SJgapeiad3en5JOiIN2ZfKRhx4/ETJu1mfcru9RWG9yPfC', '010032133123123', 'default.png', 1, 0, NULL, '2023-01-19 18:27:27', '2023-01-19 18:31:07'),
(15, 3, NULL, 'hazemhussein@hotmail.com', NULL, '', '$2y$10$3gsO6HfMJvgFvYrfpVsLHO7TChq91A2G0kEXEcvxA.SzSPZIabZxO', '00971555346969', '16747076135098318395449_image.png', 1, 0, NULL, '2023-01-26 04:30:21', '2023-01-26 04:33:33'),
(16, 3, 'حسن علي', 'engineerzanklony@gmail.com', NULL, '', '$2y$10$gMsvYntDLnH4vmQuUfm.rOtyFuS3h9zrGqURZPLf6BtqlxL0mcypa', '010032133123123', '1674739953366069978912_image.jpg', 1, 0, NULL, '2023-01-26 13:22:11', '2023-01-26 13:32:33'),
(17, 5, 'سعد علي', 'saad_ali@yahoo.com', NULL, '', '$2y$10$VbNVUZ8cuvIRE93XfO9HPekbCYK..lkqo/WzYldPEENCmwXWZ1m4m', '01152296641', 'default.png', 0, 0, NULL, '2023-02-03 14:13:40', '2023-02-03 15:21:50'),
(18, 5, 'ibrahim', 'ibrahim_ali@yahoo.com', NULL, '', '$2y$10$5aPJO6O8tzoLQtvmW3yV4uTDbT.vh9qjzET76QhK45FygxQKhID02', '010032133123123', 'default.png', 0, 0, NULL, '2023-02-03 15:31:53', '2023-02-03 15:33:48');

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

-- --------------------------------------------------------

--
-- Table structure for table `users_privillages`
--

CREATE TABLE `users_privillages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `privillage_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users_privillages`
--

INSERT INTO `users_privillages` (`id`, `user_id`, `privillage_id`, `created_at`, `updated_at`) VALUES
(1, 4, 1, NULL, NULL),
(2, 4, 2, NULL, NULL),
(3, 4, 3, NULL, NULL),
(4, 4, 4, NULL, NULL),
(5, 4, 5, NULL, NULL),
(6, 4, 6, NULL, NULL),
(7, 4, 7, NULL, NULL),
(8, 4, 8, NULL, NULL),
(33, 17, 2, '2023-02-03 15:21:50', '2023-02-03 15:21:50'),
(34, 17, 6, '2023-02-03 15:21:50', '2023-02-03 15:21:50'),
(38, 18, 2, '2023-02-03 15:33:48', '2023-02-03 15:33:48'),
(39, 18, 4, '2023-02-03 15:33:48', '2023-02-03 15:33:48'),
(40, 18, 5, '2023-02-03 15:33:48', '2023-02-03 15:33:48'),
(41, 18, 6, '2023-02-03 15:33:48', '2023-02-03 15:33:48'),
(42, 18, 7, '2023-02-03 15:33:48', '2023-02-03 15:33:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `common_questions`
--
ALTER TABLE `common_questions`
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
-- Indexes for table `privillages`
--
ALTER TABLE `privillages`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `quotations_upload_moneys`
--
ALTER TABLE `quotations_upload_moneys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quotations_upload_moneys_quotation_id_foreign` (`quotation_id`);

--
-- Indexes for table `quotation_orders`
--
ALTER TABLE `quotation_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quotation_orders_user_id_foreign` (`user_id`);

--
-- Indexes for table `receipt_quotations`
--
ALTER TABLE `receipt_quotations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `receipt_quotations_quotation_id_foreign` (`quotation_id`);

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
-- Indexes for table `tax_moneys`
--
ALTER TABLE `tax_moneys`
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
-- Indexes for table `users_privillages`
--
ALTER TABLE `users_privillages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `privillage_id` (`privillage_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `common_questions`
--
ALTER TABLE `common_questions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `items_infos_prices`
--
ALTER TABLE `items_infos_prices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

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
-- AUTO_INCREMENT for table `privillages`
--
ALTER TABLE `privillages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `quotations`
--
ALTER TABLE `quotations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `quotations_drafts`
--
ALTER TABLE `quotations_drafts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `quotations_upload_moneys`
--
ALTER TABLE `quotations_upload_moneys`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `quotation_orders`
--
ALTER TABLE `quotation_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `receipt_quotations`
--
ALTER TABLE `receipt_quotations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `supports`
--
ALTER TABLE `supports`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tax_moneys`
--
ALTER TABLE `tax_moneys`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
-- AUTO_INCREMENT for table `users_privillages`
--
ALTER TABLE `users_privillages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

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
-- Constraints for table `quotations_upload_moneys`
--
ALTER TABLE `quotations_upload_moneys`
  ADD CONSTRAINT `quotations_upload_moneys_quotation_id_foreign` FOREIGN KEY (`quotation_id`) REFERENCES `quotation_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quotation_orders`
--
ALTER TABLE `quotation_orders`
  ADD CONSTRAINT `quotation_orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `receipt_quotations`
--
ALTER TABLE `receipt_quotations`
  ADD CONSTRAINT `receipt_quotations_quotation_id_foreign` FOREIGN KEY (`quotation_id`) REFERENCES `quotation_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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

--
-- Constraints for table `users_privillages`
--
ALTER TABLE `users_privillages`
  ADD CONSTRAINT `users_privillages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_privillages_ibfk_2` FOREIGN KEY (`privillage_id`) REFERENCES `privillages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
