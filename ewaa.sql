-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2022 at 05:34 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ewaa`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertising_points_prices`
--

CREATE TABLE `advertising_points_prices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `place_id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_points` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `question_id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `question_id`, `ar_name`, `en_name`, `tu_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'اجابه اول', 'first answer', NULL, '2022-07-23 01:04:01', '2022-07-28 16:30:26'),
(4, 13, 'تيست', 'test', NULL, '2022-07-23 01:18:10', '2022-07-23 01:50:35'),
(13, 13, 'سؤال', 'qqq', NULL, '2022-07-23 01:45:44', '2022-07-23 01:50:35'),
(15, 2, 'dsa', 'dsassxxxx', NULL, '2022-07-23 01:51:26', '2022-07-23 01:52:41'),
(16, 2, 'zzzz', '[[[[[[[[[x', NULL, '2022-07-23 01:52:41', '2022-07-23 01:52:41'),
(17, 16, 'a', 'b', 'c', '2022-07-24 01:04:19', '2022-07-24 01:04:19'),
(19, 17, 'aaaa', 'ssssss', NULL, '2022-07-30 21:46:40', '2022-07-30 21:46:40');

-- --------------------------------------------------------

--
-- Table structure for table `areas`
--

CREATE TABLE `areas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `city_id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `areas`
--

INSERT INTO `areas` (`id`, `city_id`, `ar_name`, `en_name`, `tu_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'قصر القبة', 'dsad', NULL, NULL, NULL),
(2, 1, 'يشسي', 'يسشي', NULL, '2022-07-24 11:09:03', '2022-07-24 11:09:03');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ar_info` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_info` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_info` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.png',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `ar_name`, `en_name`, `tu_name`, `ar_info`, `en_info`, `tu_info`, `parent_id`, `image`, `created_at`, `updated_at`) VALUES
(9, 'عقارات', 'listings', NULL, 'قسم العقارات', 'listings category', NULL, NULL, 'default.png', '2022-07-22 20:49:45', '2022-07-22 20:49:45'),
(10, 'بيوت', 'homes', NULL, 'قسم المنازل', 'homes category', NULL, 9, 'default.png', '2022-07-22 20:49:45', '2022-07-22 20:49:45'),
(14, 'يشسي aa', 'يشسي', NULL, 'يشسي', 'يشسشي', 'يشسي', 9, '1658626321_user.png', '2022-07-23 23:32:01', '2022-07-28 16:40:17'),
(15, 'ملاجئ', 'ewaas', NULL, 'تيست', 'test info', NULL, NULL, '1659033687_user.png', '2022-07-28 16:41:27', '2022-07-28 16:41:27');

-- --------------------------------------------------------

--
-- Table structure for table `categories_questions`
--

CREATE TABLE `categories_questions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `question_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories_questions`
--

INSERT INTO `categories_questions` (`id`, `category_id`, `question_id`, `created_at`, `updated_at`) VALUES
(4, 14, 1, '2022-07-23 23:32:01', '2022-07-24 00:17:45'),
(9, 14, 2, '2022-07-24 00:17:45', '2022-07-24 00:17:45'),
(10, 14, 16, '2022-07-24 01:04:19', '2022-07-24 01:04:19'),
(11, 10, 2, '2022-07-28 16:33:50', '2022-07-28 16:33:50'),
(12, 10, 13, '2022-07-28 16:33:50', '2022-07-28 16:33:50');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `government_id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `government_id`, `ar_name`, `en_name`, `tu_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'التجمع الخامس', 'five meeting', NULL, NULL, NULL),
(2, 6, 'الحي السابع', 'dsad', NULL, '2022-07-24 11:03:50', '2022-07-24 11:03:50'),
(3, 4, 'dasd', 'aaaaaaa', NULL, '2022-07-28 15:34:15', '2022-07-28 15:34:25');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `ar_name`, `en_name`, `tu_name`, `created_at`, `updated_at`) VALUES
(1, 'مصر', 'Egypt', '', '2022-07-15 23:23:47', '2022-07-28 16:42:10'),
(2, 'السعودية', 'KSA', '', '2022-07-15 23:23:47', NULL),
(3, 'امريكا', 'usa', NULL, '2022-07-24 10:30:32', '2022-07-24 10:30:32'),
(4, 'ق', 'ر', NULL, '2022-07-24 10:34:50', '2022-07-24 10:34:50');

-- --------------------------------------------------------

--
-- Table structure for table `currencies`
--

CREATE TABLE `currencies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `currencies`
--

INSERT INTO `currencies` (`id`, `ar_name`, `en_name`, `tu_name`, `currency_code`, `country_code`, `created_at`, `updated_at`) VALUES
(1, 'ريال سعودي', 'Ryal', '', 'SR', 'KSA', '2022-07-30 17:10:45', NULL),
(2, 'جنيه مصري', 'Egypt Poun', '', 'L.E', 'EGP', '2022-07-30 17:10:45', '2022-07-30 22:59:50');

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
  `listing_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `governments`
--

CREATE TABLE `governments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country_id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `governments`
--

INSERT INTO `governments` (`id`, `country_id`, `ar_name`, `en_name`, `tu_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'القاهرة', 'cairo', '', '2022-07-20 12:18:57', NULL),
(4, 2, 'الرياض', 'ryad', NULL, '2022-07-24 10:59:32', '2022-07-24 10:59:32'),
(6, 2, 'مكه', 'maka', NULL, '2022-07-24 11:03:20', '2022-07-24 11:03:20');

-- --------------------------------------------------------

--
-- Table structure for table `listings_infos`
--

CREATE TABLE `listings_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `area_id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ar_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_info` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ar_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` float NOT NULL,
  `meters_number` float NOT NULL,
  `youtube_link` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `whatapp_status` tinyint(4) NOT NULL DEFAULT 0,
  `contact_email_status` tinyint(4) NOT NULL DEFAULT 0,
  `payment_status` tinyint(4) NOT NULL DEFAULT 0,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `listings_infos`
--

INSERT INTO `listings_infos` (`id`, `user_id`, `category_id`, `area_id`, `ar_name`, `en_name`, `tu_name`, `ar_info`, `en_info`, `tu_info`, `ar_address`, `en_address`, `tu_address`, `price`, `meters_number`, `youtube_link`, `whatapp_status`, `contact_email_status`, `payment_status`, `type`, `deleted_at`, `created_at`, `updated_at`) VALUES
(6, 10, 9, 1, 'بيش كبير', 'big home', NULL, 'معلومات عن البيت', 'info about home', NULL, 'القاهره', 'cairo', NULL, 5000, 600, '', 0, 0, 0, 'expired', NULL, '2022-07-22 01:07:47', '2022-08-01 20:45:25'),
(7, 5, 9, 2, 'بيت كبير 2', '2big home', NULL, 'معلومات عن البيت', 'info about home', NULL, 'القاهره', 'cairo', NULL, 5000, 120, '', 0, 0, 1, 'live', NULL, '2022-07-22 01:07:47', '2022-08-01 20:05:15'),
(8, 5, 9, 1, 'بيت كبير 2', '2big home', NULL, 'معلومات عن البيت', 'info about home', NULL, 'القاهره', 'cairo', NULL, 5000, 500, '', 0, 0, 0, 'deleted_at', NULL, '2022-07-22 01:07:47', '2022-08-01 19:28:23');

-- --------------------------------------------------------

--
-- Table structure for table `listings_notes`
--

CREATE TABLE `listings_notes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `listing_id` bigint(20) UNSIGNED NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `listing_photos`
--

CREATE TABLE `listing_photos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `listing_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `listing_questions_answers`
--

CREATE TABLE `listing_questions_answers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `listing_id` bigint(20) UNSIGNED NOT NULL,
  `question_id` bigint(20) UNSIGNED NOT NULL,
  `answer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `listing_statistics`
--

CREATE TABLE `listing_statistics` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `listing_id` bigint(20) UNSIGNED NOT NULL,
  `no_search` int(11) NOT NULL,
  `no_seen` int(11) NOT NULL,
  `no_contact_tried` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(47, '2013_07_14_203748_create_roles_table', 1),
(48, '2013_07_14_212529_create_countries_table', 1),
(49, '2013_07_14_212542_create_governments_table', 1),
(50, '2013_07_14_212550_create_cities_table', 1),
(51, '2013_07_14_212558_create_areas_table', 1),
(52, '2013_07_14_213209_create_categories_table', 1),
(53, '2014_10_12_000000_create_users_table', 1),
(54, '2014_10_12_100000_create_password_resets_table', 1),
(55, '2019_08_19_000000_create_failed_jobs_table', 1),
(56, '2022_07_14_203922_create_user_infos_table', 1),
(57, '2022_07_14_204554_create_user_company_infos_table', 1),
(58, '2022_07_14_212038_create_listings_infos_table', 1),
(59, '2022_07_14_213909_create_questions_table', 1),
(60, '2022_07_14_214038_create_answers_table', 1),
(61, '2022_07_14_214143_create_categories_questions_table', 1),
(62, '2022_07_15_002116_create_listing_questions_answers_table', 1),
(63, '2022_07_15_002252_create_listing_photos_table', 1),
(64, '2022_07_15_002424_create_listing_statistics_table', 1),
(65, '2022_07_15_010812_create_packages_table', 2),
(66, '2022_07_15_010940_create_packages_prices_places_table', 2),
(67, '2022_07_15_011253_create_supports_table', 2),
(68, '2022_07_16_155307_create_notifications_table', 2),
(69, '2022_07_16_155724_create_favourites_table', 3),
(70, '2022_07_21_164902_create_listings_notes_table', 4),
(71, '2022_07_21_215240_create_advertisng_points_prices_table', 5),
(72, '2022_07_14_185319_create_currencies_table', 6),
(73, '2022_08_06_004720_create_subscriptions_table', 7);

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

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `min_value` int(11) NOT NULL,
  `max_value` int(11) NOT NULL,
  `price` double(8,2) NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_visible` tinyint(4) NOT NULL DEFAULT 1,
  `currency_id` bigint(20) UNSIGNED NOT NULL,
  `expiration_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `ar_name`, `en_name`, `min_value`, `max_value`, `price`, `image`, `is_visible`, `currency_id`, `expiration_date`, `created_at`, `updated_at`) VALUES
(1, 'dasd', 'dsa', 1, 10, 2.00, 'default.png', 1, 1, '2024-01-01', '2022-07-30 17:21:10', '2022-08-06 11:50:37'),
(41, 'الذهبية', 'gold', 1, 100, 14.00, '1659222438_user.png', 1, 2, NULL, '2022-07-30 21:05:55', '2022-08-06 12:00:40');

-- --------------------------------------------------------

--
-- Table structure for table `packages_prices_places`
--

CREATE TABLE `packages_prices_places` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `package_id` bigint(20) UNSIGNED NOT NULL,
  `country_id` bigint(20) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `packages_prices_places`
--

INSERT INTO `packages_prices_places` (`id`, `package_id`, `country_id`, `price`, `created_at`, `updated_at`) VALUES
(5, 1, 3, 3.00, '2022-07-30 21:03:20', '2022-07-30 21:05:25'),
(6, 1, 4, 10.00, '2022-07-30 21:03:20', '2022-08-06 12:00:17'),
(7, 41, 2, 123.00, '2022-07-30 21:07:18', '2022-07-30 21:07:18'),
(8, 41, 3, 140.00, '2022-07-30 21:07:18', '2022-07-30 21:07:18');

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
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ar_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `required_status` tinyint(4) NOT NULL DEFAULT 0,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `ar_name`, `en_name`, `tu_name`, `required_status`, `type`, `created_at`, `updated_at`) VALUES
(1, 'السؤال  das', 'question one', NULL, 1, 'select', '2022-07-20 00:56:58', '2022-07-23 02:02:00'),
(2, 'السؤال الثاني', 'question two', NULL, 0, 'select', '2022-07-20 00:56:58', '2022-07-23 01:51:26'),
(13, 'يs', 'das', NULL, 1, 'select', '2022-07-23 01:18:10', '2022-07-23 01:25:07'),
(16, 'ييشسي', 'test ss', 'dsa', 1, 'select', '2022-07-24 01:04:19', '2022-07-24 01:04:19'),
(17, 'das', 'dsad', NULL, 1, 'select', '2022-07-28 15:33:28', '2022-07-30 21:46:40');

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
(1, 'private_owner', '2022-07-15 23:08:03', NULL),
(2, 'freelancer', '2022-07-15 23:08:03', NULL),
(3, 'coupounded_developer', '2022-07-15 23:08:03', NULL),
(4, 'brokerage_company', '2022-07-15 23:08:03', NULL),
(5, 'admin', '2022-07-15 23:08:03', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `package_id` bigint(20) UNSIGNED NOT NULL,
  `points_ordered` int(11) NOT NULL,
  `min_points` int(11) NOT NULL,
  `max_points` int(11) NOT NULL,
  `point_price` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `user_id`, `package_id`, `points_ordered`, `min_points`, `max_points`, `point_price`, `created_at`, `updated_at`) VALUES
(1, 5, 41, 5, 2, 10, 3.00, '2022-08-06 13:39:30', NULL);

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
  `country_id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `serial_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.png',
  `block` tinyint(4) NOT NULL DEFAULT 0,
  `auto_publish` tinyint(4) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `country_id`, `username`, `email`, `email_verified_at`, `serial_number`, `password`, `phone`, `address`, `image`, `block`, `auto_publish`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'dasdsa', 'mahmoud_elzanklony1234@yahoo.com', NULL, '1657932959', '1234567', '1090576399', 'قاهؤه', 'default.png', 0, 0, NULL, '2022-07-15 22:55:59', '2022-07-15 22:55:59'),
(3, 3, 1, 'adsa', 'alyaa@yahoo.com', NULL, '1657933400', '1234567', '1090576399', '', 'default.png', 0, 0, NULL, '2022-07-15 23:03:20', '2022-07-15 23:03:20'),
(4, 1, 1, 'dasaaaaaaaa', 'aaaaaaaaa@yahoo.com', NULL, '1657934348', '1234567', '0', '', 'default.png', 0, 0, NULL, '2022-07-15 23:19:08', '2022-07-15 23:19:08'),
(5, 2, 1, 'ahmed', 'ahmed@yahoo.com', NULL, '1657934962', '12345789', '123', '', 'default.png', 0, 0, NULL, '2022-07-15 23:29:22', '2022-07-15 23:29:22'),
(6, 2, 1, 'api user', 'ahmed_ali@yahoo.com', NULL, '1657986689', '$2y$10$l.8YJGqT9MGT9ENZ3fl9xeYVLQChQV.1FHlcUag3CENqPZXhWphOW', '0115229222', '', '1658163675_user.png', 0, 0, NULL, '2022-07-16 13:51:29', '2022-07-20 14:15:41'),
(7, 2, 1, 'ali', 'ali@yahoo.com', NULL, '1657996316', '$2y$10$/3F2fUEZYfFJ8SNi3laARuYkO7O9OxPs59aEGkXhb2wMJqDOkYthW', '01005663932', '', 'default.png', 0, 0, NULL, '2022-07-16 16:31:56', '2022-07-16 16:31:56'),
(8, 2, 1, 'ahmed', 'api_user@yahoo.com', NULL, '1658163459', '$2y$10$dT5BrViw6MarWWpZs7pzle0Ys2eTUDCtcm/eRd0ZJSfU1mGF9hZQq', '123567890', '', 'default.png', 0, 0, NULL, '2022-07-18 14:57:40', '2022-07-18 14:57:40'),
(9, 2, 1, 'das', 'dasd', NULL, '1658257519', '$2y$10$iW24n0WlziaRJMWKpoZFNufJvqizaaRRnrz/Jl325b0kXTu7wL5.y', '2131233213123', '', 'default.png', 0, 0, NULL, '2022-07-19 17:05:19', '2022-07-19 17:05:19'),
(10, 4, 1, 'احمد سعد', 'ahmed_saad@yahoo.com', NULL, '1658257862', '$2y$10$XpVouGnfeVi/570i4wiWLOBcD6GELJg/E5Jp7ydCdPMXeA4HwGKI6', '011522966411', '', '1658257973_user.png', 0, 1, NULL, '2022-07-19 17:11:02', '2022-07-20 09:17:47'),
(11, 2, 1, 'test', 'test@yahoo.com', NULL, '1659400700', '$2y$10$lWBGPQEncih3jHa6toVxle9fGx10rmx.Vbiu9MSCzuQebIwjdl0PW', '01041413123', '', 'default.png', 0, 0, NULL, '2022-08-01 22:38:20', '2022-08-01 22:38:20'),
(12, 2, 1, 'dsad', 'dsa@yahoo.com', NULL, '1659400744', '$2y$10$HduagOzUckkj1kY.Zy678e.cBo2j4kdfsPQoRwyV5U0me3JzfGPoO', '3123123', '', 'default.png', 0, 0, NULL, '2022-08-01 22:39:04', '2022-08-01 22:39:04'),
(13, 2, 4, 'ads', 'dasdasd@yahoo.com', NULL, '1659400995', '$2y$10$lyHKwY2b4nPxwxO8xRZsOecpSSksJyDOqBDj7z0pF3qiCRDSV9vEG', '3123123111', 'dasd', '1659402361_user.jpg', 0, 1, NULL, '2022-08-01 22:43:15', '2022-08-01 23:09:20');

-- --------------------------------------------------------

--
-- Table structure for table `user_company_infos`
--

CREATE TABLE `user_company_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_company_infos`
--

INSERT INTO `user_company_infos` (`id`, `user_id`, `bio`, `image`, `created_at`, `updated_at`) VALUES
(1, 6, '', '', '2022-07-16 16:31:56', '2022-07-16 16:31:56'),
(2, 8, '', '', '2022-07-18 14:57:40', '2022-07-18 14:57:40'),
(3, 9, '', '', '2022-07-19 17:05:19', '2022-07-19 17:05:19'),
(4, 10, 'dsakkkkk', '1658318405_user.png', '2022-07-19 17:11:02', '2022-07-20 10:00:05');

-- --------------------------------------------------------

--
-- Table structure for table `user_infos`
--

CREATE TABLE `user_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `full_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `whatapp_status` tinyint(4) NOT NULL DEFAULT 0,
  `age` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `marital_status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `education` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `industry` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_infos`
--

INSERT INTO `user_infos` (`id`, `user_id`, `full_name`, `whatapp_status`, `age`, `gender`, `marital_status`, `education`, `industry`, `position`, `created_at`, `updated_at`) VALUES
(1, 6, 'ahmed sameh api full', 0, 'abc', 'male', 'single', 'phd', 'abc', 'xyz', '2022-07-16 16:31:56', '2022-07-20 14:27:19'),
(2, 8, '', 0, '', '', '', '', '', '', '2022-07-18 14:57:40', '2022-07-18 14:57:40'),
(3, 9, '', 0, '', '', '', '', '', '', '2022-07-19 17:05:19', '2022-07-19 17:05:19'),
(4, 10, 'احمد كامل سعد', 1, '26:30', 'male', 'single', 'bachelors', 'هندسة', 'مهندس معماري', '2022-07-19 17:11:02', '2022-07-20 10:14:16'),
(5, 11, '', 0, '', '', '', '', '', '', '2022-08-01 22:38:20', '2022-08-01 22:38:20'),
(6, 12, '', 0, '', '', '', '', '', '', '2022-08-01 22:39:04', '2022-08-01 22:39:04'),
(7, 13, '', 0, '', '', '', '', '', '', '2022-08-01 22:43:15', '2022-08-01 22:43:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertising_points_prices`
--
ALTER TABLE `advertising_points_prices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `answers_question_id_foreign` (`question_id`);

--
-- Indexes for table `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `areas_city_id_foreign` (`city_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories_questions`
--
ALTER TABLE `categories_questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_questions_category_id_foreign` (`category_id`),
  ADD KEY `categories_questions_question_id_foreign` (`question_id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cities_government_id_foreign` (`government_id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `currencies`
--
ALTER TABLE `currencies`
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
  ADD KEY `favourites_listing_id_foreign` (`listing_id`);

--
-- Indexes for table `governments`
--
ALTER TABLE `governments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `governments_country_id_foreign` (`country_id`);

--
-- Indexes for table `listings_infos`
--
ALTER TABLE `listings_infos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `listings_infos_user_id_foreign` (`user_id`),
  ADD KEY `listings_infos_category_id_foreign` (`category_id`),
  ADD KEY `listings_infos_area_id_foreign` (`area_id`);

--
-- Indexes for table `listings_notes`
--
ALTER TABLE `listings_notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `listings_notes_user_id_foreign` (`user_id`),
  ADD KEY `listings_notes_listing_id_foreign` (`listing_id`);

--
-- Indexes for table `listing_photos`
--
ALTER TABLE `listing_photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `listing_photos_listing_id_foreign` (`listing_id`);

--
-- Indexes for table `listing_questions_answers`
--
ALTER TABLE `listing_questions_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `listing_questions_answers_listing_id_foreign` (`listing_id`),
  ADD KEY `listing_questions_answers_question_id_foreign` (`question_id`);

--
-- Indexes for table `listing_statistics`
--
ALTER TABLE `listing_statistics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `listing_statistics_listing_id_foreign` (`listing_id`);

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
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `currency_Id` (`currency_id`);

--
-- Indexes for table `packages_prices_places`
--
ALTER TABLE `packages_prices_places`
  ADD PRIMARY KEY (`id`),
  ADD KEY `packages_prices_places_package_id_foreign` (`package_id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscriptions_user_id_foreign` (`user_id`),
  ADD KEY `subscriptions_package_id_foreign` (`package_id`);

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
  ADD KEY `users_role_id_foreign` (`role_id`),
  ADD KEY `users_ibfk_1` (`country_id`);

--
-- Indexes for table `user_company_infos`
--
ALTER TABLE `user_company_infos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_company_infos_user_id_foreign` (`user_id`);

--
-- Indexes for table `user_infos`
--
ALTER TABLE `user_infos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_infos_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertising_points_prices`
--
ALTER TABLE `advertising_points_prices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `areas`
--
ALTER TABLE `areas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `categories_questions`
--
ALTER TABLE `categories_questions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `currencies`
--
ALTER TABLE `currencies`
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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `governments`
--
ALTER TABLE `governments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `listings_infos`
--
ALTER TABLE `listings_infos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `listings_notes`
--
ALTER TABLE `listings_notes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `listing_photos`
--
ALTER TABLE `listing_photos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `listing_questions_answers`
--
ALTER TABLE `listing_questions_answers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `listing_statistics`
--
ALTER TABLE `listing_statistics`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `packages_prices_places`
--
ALTER TABLE `packages_prices_places`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `supports`
--
ALTER TABLE `supports`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user_company_infos`
--
ALTER TABLE `user_company_infos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_infos`
--
ALTER TABLE `user_infos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `areas`
--
ALTER TABLE `areas`
  ADD CONSTRAINT `areas_city_id_foreign` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `categories_questions`
--
ALTER TABLE `categories_questions`
  ADD CONSTRAINT `categories_questions_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `categories_questions_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_government_id_foreign` FOREIGN KEY (`government_id`) REFERENCES `governments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `favourites_listing_id_foreign` FOREIGN KEY (`listing_id`) REFERENCES `listings_infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `governments`
--
ALTER TABLE `governments`
  ADD CONSTRAINT `governments_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `listings_infos`
--
ALTER TABLE `listings_infos`
  ADD CONSTRAINT `listings_infos_area_id_foreign` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `listings_infos_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `listings_infos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `listings_notes`
--
ALTER TABLE `listings_notes`
  ADD CONSTRAINT `listings_notes_listing_id_foreign` FOREIGN KEY (`listing_id`) REFERENCES `listings_infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `listings_notes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `listing_photos`
--
ALTER TABLE `listing_photos`
  ADD CONSTRAINT `listing_photos_listing_id_foreign` FOREIGN KEY (`listing_id`) REFERENCES `listings_infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `listing_questions_answers`
--
ALTER TABLE `listing_questions_answers`
  ADD CONSTRAINT `listing_questions_answers_listing_id_foreign` FOREIGN KEY (`listing_id`) REFERENCES `listings_infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `listing_questions_answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `listing_statistics`
--
ALTER TABLE `listing_statistics`
  ADD CONSTRAINT `listing_statistics_listing_id_foreign` FOREIGN KEY (`listing_id`) REFERENCES `listings_infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_receiver_id_foreign` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notifications_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `packages`
--
ALTER TABLE `packages`
  ADD CONSTRAINT `packages_ibfk_1` FOREIGN KEY (`currency_Id`) REFERENCES `currencies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `packages_prices_places`
--
ALTER TABLE `packages_prices_places`
  ADD CONSTRAINT `packages_prices_places_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `packages_prices_places_package_id_foreign` FOREIGN KEY (`package_id`) REFERENCES `packages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD CONSTRAINT `subscriptions_package_id_foreign` FOREIGN KEY (`package_id`) REFERENCES `packages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `subscriptions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_company_infos`
--
ALTER TABLE `user_company_infos`
  ADD CONSTRAINT `user_company_infos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_infos`
--
ALTER TABLE `user_infos`
  ADD CONSTRAINT `user_infos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
