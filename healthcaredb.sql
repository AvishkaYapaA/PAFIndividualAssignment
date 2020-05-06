-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2020 at 03:29 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthcaredb`
--

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `DoctorId` int(11) NOT NULL,
  `Dname` varchar(255) NOT NULL,
  `DRegNo` varchar(55) NOT NULL,
  `Specialization` varchar(50) NOT NULL,
  `ContactNo` varchar(15) NOT NULL,
  `Address` varchar(300) NOT NULL,
  `Email` varchar(55) NOT NULL,
  `HospitalName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`DoctorId`, `Dname`, `DRegNo`, `Specialization`, `ContactNo`, `Address`, `Email`, `HospitalName`) VALUES
(2, 'Avishka Amarasekara', '1112224', 'Allergists', '0776345985', 'No 123 Colombo Road', 'avishka@gmail.com', 'Nawaloka'),
(6, 'Kalana', '11111', 'Cardiologists', '0987575894', 'Halawatha', 'kalana@gmail.com', 'Halawatha'),
(8, 'Bhagya Dilhara', '1234512345', 'Medicine Specialists', '0776547322', 'No 196, Pannipitiya Colombo', 'bhagya@gmail.com', 'Angoda');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`DoctorId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `DoctorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
