-- phpMyAdmin SQL Dump
-- version 6.0.0-dev+20251125.142c0cf3be
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 06, 2026 at 09:34 AM
-- Server version: 8.4.3
-- PHP Version: 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `salle_ms`
--

-- --------------------------------------------------------

--
-- Table structure for table `exercice`
--

CREATE TABLE `exercice` (
  `id` int NOT NULL,
  `nom` varchar(250) NOT NULL,
  `muscle` set('pectoraux','dos','epaules','biceps','triceps','avant_bras','quadriceps','ischio_jambiers','fessiers','mollets','abdominaux') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `machine` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `exercice`
--

INSERT INTO `exercice` (`id`, `nom`, `muscle`, `machine`) VALUES
(1, 'Développé couché', 'pectoraux,triceps', 1),
(2, 'Tractions pronation', 'dos,biceps', 0),
(3, 'Rowing barre', 'dos,biceps', 1),
(4, 'Élévations latérales', 'epaules', 1),
(5, 'Développé militaire', 'epaules,triceps', 1),
(6, 'Curl biceps barre', 'biceps', 0),
(7, 'Extension triceps à la poulie', 'triceps', 1),
(8, 'Dips', 'pectoraux,triceps', 0),
(9, 'Pull-over', 'pectoraux,dos', 1),
(10, 'Face pull', 'dos,epaules', 1),
(11, 'Pompes', 'pectoraux,triceps', 0),
(12, 'Tirage horizontal', 'dos,biceps', 1),
(13, 'Oiseau haltères', 'epaules', 0),
(14, 'Curl incliné', 'biceps', 0),
(15, 'Extension triceps barre', 'triceps', 1);

-- --------------------------------------------------------

--
-- Table structure for table `seance`
--

CREATE TABLE `seance` (
  `id` int NOT NULL,
  `nom` varchar(250) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `seance`
--

INSERT INTO `seance` (`id`, `nom`, `date`) VALUES
(1, 'Lefebvre', '2026-03-06 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `seance_exercice`
--

CREATE TABLE `seance_exercice` (
  `id` int NOT NULL,
  `seance_id` int NOT NULL,
  `exercice_id` int NOT NULL,
  `ordre` int DEFAULT '1',
  `nb_series` int DEFAULT '0',
  `nb_reps` int DEFAULT '0',
  `poids` decimal(5,2) DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `seance_exercice`
--

INSERT INTO `seance_exercice` (`id`, `seance_id`, `exercice_id`, `ordre`, `nb_series`, `nb_reps`, `poids`) VALUES
(1, 1, 3, 1, 4, 12, 30.00),
(2, 1, 1, 2, 4, 6, 32.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `exercice`
--
ALTER TABLE `exercice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seance`
--
ALTER TABLE `seance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seance_exercice`
--
ALTER TABLE `seance_exercice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seance_id` (`seance_id`),
  ADD KEY `exercice_id` (`exercice_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `exercice`
--
ALTER TABLE `exercice`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `seance`
--
ALTER TABLE `seance`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `seance_exercice`
--
ALTER TABLE `seance_exercice`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `seance_exercice`
--
ALTER TABLE `seance_exercice`
  ADD CONSTRAINT `seance_exercice_ibfk_1` FOREIGN KEY (`seance_id`) REFERENCES `seance` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `seance_exercice_ibfk_2` FOREIGN KEY (`exercice_id`) REFERENCES `exercice` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
