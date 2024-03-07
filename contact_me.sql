-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2024 at 04:59 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `personalweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_me`
--

CREATE TABLE `contact_me` (
  `Id` int(11) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `lot_block` varchar(200) NOT NULL,
  `street` varchar(200) NOT NULL,
  `place` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `baranggay` varchar(200) NOT NULL,
  `province` varchar(200) NOT NULL,
  `country` varchar(200) NOT NULL,
  `contact_number_country_code` int(11) NOT NULL,
  `contact_number` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_me`
--

INSERT INTO `contact_me` (`Id`, `last_name`, `first_name`, `lot_block`, `street`, `place`, `city`, `baranggay`, `province`, `country`, `contact_number_country_code`, `contact_number`, `email`, `password`) VALUES
(1, '', '', '', '', '', '', '', '', '', 0, 0, 'kap@gmail.com', 12345678),
(2, '', '', '', '', '', '', '', '', '', 0, 0, 'kap@gmail.com', 12345678),
(3, 'carcer', 'xy', '1 lot 69', 'Malipaka', 'BloomFields', 'Quezon City', 'kali', 'Maguindanao', 'Philippines', 63, 912345678, 'bobo@gmail.com', 12345678);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_me`
--
ALTER TABLE `contact_me`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_me`
--
ALTER TABLE `contact_me`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
