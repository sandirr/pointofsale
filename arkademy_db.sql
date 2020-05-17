-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2020 at 04:40 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arkademy_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `writer` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `publisher` varchar(100) NOT NULL,
  `year` int(4) NOT NULL,
  `stock` int(11) NOT NULL,
  `genre` int(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `name`, `writer`, `description`, `publisher`, `year`, `stock`, `genre`, `created_at`, `updated_at`) VALUES
(2, 'Programming', 'Sandi', 'lorem', 'buku pojok', 2020, 2, 1, '2020-02-14 06:43:20', '2020-02-14 04:31:15'),
(3, 'flutter', 'aku', 'lorem ipsum', 'Erlangga', 2020, 5, 2, '2020-02-14 08:56:30', '2020-02-14 08:56:30'),
(4, 'Flutter Fundamental', 'Mabro', 'dolor', 'Jayabook', 2018, 20, 1, '2020-02-14 06:43:27', '2020-02-14 06:38:02'),
(5, 'Basic SQL adn Python', 'Bill Gates', 'amet', 'Ark Publisher', 2020, 21, 1, '2020-02-14 06:43:31', '2020-02-14 06:38:53'),
(6, 'Sejarah komputer', 'Kilat', 'komputer ituuuu', 'Ark Publisher', 2019, 23, 2, '2020-02-14 06:43:34', '2020-02-14 06:39:55'),
(7, 'Seni Rupa', 'Halilintar', 'seni itu sama dengan indah', 'Ark Publisher', 2019, 4, 3, '2020-02-14 06:43:37', '2020-02-14 06:40:29'),
(8, 'Matematic', 'Halili', 'headache', 'Ark Publisher', 2019, 17, 4, '2020-02-14 06:43:40', '2020-02-14 06:42:04'),
(9, 'Learn React js', 'Ha', 'fun', 'Ark Publisher', 2020, 5, 1, '2020-02-14 06:42:44', '2020-02-14 06:42:44'),
(10, 'Learn React Native', 'siapa', 'native', 'Ark Publisher', 2020, 7, 1, '2020-02-14 06:43:11', '2020-02-14 06:43:11'),
(11, 'gasgajsg', 'siapajhxjhs', 'nativebhxs', 'Ark Publisheruy', 2020, 7, 1, '2020-02-14 08:50:34', '2020-02-14 08:50:34');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `category` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `category`, `price`, `stock`, `date_added`, `date_updated`) VALUES
(1, 'Milk Shake', NULL, 'images/odgcb8cgk6yxb7il.jpg', 2, 22000, 153, '2020-02-23 11:02:56', '2020-05-05 03:03:24'),
(2, 'Latte', 'null', 'images/odgcbbi8k6zvazxo.jpg', 2, 20000, 9, '2020-02-24 02:54:33', '2020-05-05 03:03:24'),
(3, 'Cireng', 'Mantap', 'images/odgcbai8k7bgtp1f.jpg', 1, 18000, 995, '2020-03-03 05:42:25', '2020-04-01 08:09:43'),
(4, 'Fruit Tea', 'mantap', 'images/odgcbadck7bgy1py.jpg', 2, 32000, 194, '2020-03-03 05:45:48', '2020-04-01 08:09:55'),
(5, 'Macchiato', 'Segar', 'images/odgcbadck7bgzo8u.jpg', 2, 21000, 190, '2020-03-03 05:47:04', '2020-04-01 08:10:07'),
(6, 'Fried Bananas', 'Besar dan Panjang', 'images/odgcbadck7bizdiq.jpg', 1, 35000, 998, '2020-03-03 06:42:49', '2020-05-05 03:03:24'),
(7, 'Ice Blend', 'Segar', 'images/odgcbadck7bj29k8.jpg', 2, 18000, 999, '2020-03-03 06:45:04', '2020-04-01 08:10:26'),
(8, 'Martabak', '123wer', 'images/odgcbcb8k7owaiqj.jpeg', 1, 12000, 35, '2020-03-12 15:16:25', '2020-04-01 08:10:32'),
(9, 'Stiker', 'Keren loh', 'images/odgcbba8k89h3hop.jpg', 3, 3000, 199, '2020-03-27 00:54:12', '2020-05-05 03:03:24');

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `idBuyer` varchar(255) NOT NULL,
  `totalPayment` int(11) NOT NULL,
  `date_added` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`idBuyer`, `totalPayment`, `date_added`) VALUES
('odgcb3swk7ob98eu', 84000, '2020-03-12'),
('odgcb3swk7obdhs0', 60000, '2020-03-12'),
('odgcb3swk7obktj7', 18000, '2020-03-12'),
('odgcb3swk7oblzk3', 100000, '2020-03-12'),
('odgcb7q0k7t9xl31', 248000, '2020-03-15'),
('odgcb7q0k7tapzs9', 248000, '2020-03-16'),
('odgcb9n4k8h4i4uk', 55000, '2020-04-01'),
('odgcbckwk9tbvuq9', 80000, '2020-05-05'),
('odgcbo8k89wevzq', 176000, '2020-03-27');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_detail`
--

CREATE TABLE `purchase_detail` (
  `id` int(11) NOT NULL,
  `idBuyer` varchar(255) NOT NULL,
  `productId` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase_detail`
--

INSERT INTO `purchase_detail` (`id`, `idBuyer`, `productId`, `stock`, `price`) VALUES
(62, 'odgcb3swk7ob98eu', 1, 2, 40000),
(63, 'odgcb3swk7ob98eu', 2, 2, 44000),
(64, 'odgcb3swk7obdhs0', 3, 3, 60000),
(65, 'odgcb3swk7obktj7', 4, 1, 18000),
(66, 'odgcb3swk7oblzk3', 1, 5, 100000),
(67, 'odgcb7q0k7t9xl31', 1, 4, 80000),
(68, 'odgcb7q0k7t9xl31', 2, 4, 88000),
(69, 'odgcb7q0k7t9xl31', 3, 4, 80000),
(70, 'odgcb7q0k7tapzs9', 1, 4, 80000),
(71, 'odgcb7q0k7tapzs9', 2, 4, 88000),
(72, 'odgcb7q0k7tapzs9', 3, 4, 80000),
(73, 'odgcbo8k89wevzq', 2, 8, 176000),
(74, 'odgcb9n4k8h4i4uk', 7, 1, 35000),
(75, 'odgcb9n4k8h4i4uk', 3, 1, 20000),
(76, 'odgcbckwk9tbvuq9', 2, 1, 22000),
(77, 'odgcbckwk9tbvuq9', 3, 1, 20000),
(78, 'odgcbckwk9tbvuq9', 7, 1, 35000),
(79, 'odgcbckwk9tbvuq9', 10, 1, 3000);

-- --------------------------------------------------------

--
-- Table structure for table `tabel_category`
--

CREATE TABLE `tabel_category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tabel_category`
--

INSERT INTO `tabel_category` (`id`, `name`) VALUES
(1, 'Food'),
(2, 'Drink'),
(3, 'Merchandise');

-- --------------------------------------------------------

--
-- Table structure for table `tabel_product`
--

CREATE TABLE `tabel_product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` varchar(12) NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_cashier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tabel_product`
--

INSERT INTO `tabel_product` (`id`, `name`, `price`, `id_category`, `id_cashier`) VALUES
(1, 'Latte', '10000', 2, 1),
(2, 'Cake', '20000', 1, 2),
(3, 'Ice Tea', '12000', 2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `table_cashier`
--

CREATE TABLE `table_cashier` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `table_cashier`
--

INSERT INTO `table_cashier` (`id`, `name`) VALUES
(1, 'Pevita Pearce'),
(2, 'Raisa Andriana'),
(3, 'Andi Irsandi'),
(4, 'Joko Purwadhy');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` enum('admin','cashier','super_admin','waiting') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `salt`, `password`, `created_at`, `updated_at`, `status`) VALUES
(1, 'Andi Irsandi', 'andi.irsandi765@gmail.com', '913bfc4b60443e092b', '3ea2322f24fb7307bcc1d608cf9c5c2c27ff988e32a8e4201d0e5eba5590a94103a1700dfbc06b96bf8374275f52b027eb6b506363cea4e2db84a5771f228d8d', '2020-03-09 00:41:02', '2020-03-09 00:41:02', 'super_admin'),
(2, 'Daeng Uki', 'daeng123@gmail.co', '9bbdd513b584b560c0', '0e4da30006d4cc38eb40a9a9de770995e4bebe6f147dde60f698c5da1ef63d5626d7ab9e1bb94feb2960a15b2a39cd88696824973433f0a12aa3fc160096213a', '2020-03-03 16:30:27', '2020-03-03 16:30:27', 'cashier'),
(3, 'bagas', 'bagas@mail.co', '3ac86b4bce18a731a3', '0431d459b46b0818622b5ee10435d5542a1fb8e5d7ec8221a8f4489db09342a9dfe1d15bd67a194c8ff69511ee9995a0feced60c583a2cfe0c362b1779908a51', '2020-03-04 00:49:06', '2020-03-04 00:49:06', 'admin'),
(4, 'andi irsandi', 'sandi@mail.id', '49ed463b25bcbc6a4b', '5af6f3c29709773692f6be6eb690f0b626e34e82792ba3dbdbdc649bb1b6f2bff2f7536c9cca8a03c66c87f39f3ca32011ebdc7f0ddc08d3cf3e5d760f53c778', '2020-02-26 12:50:10', '2020-02-26 12:50:10', 'admin'),
(5, 'user baru', 'baru@mail.id', '8eada2612d8ba3d738', '50a1a33d065f81139137bc4f545df1171e39bb455091810c7aac43a97a0066996fb50a20c91e4ea83e80bdfaaf6cedc496df1ce77c375fd30f0570d9e2e168fd', '2020-04-28 08:29:08', '2020-04-28 08:29:08', 'cashier');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`idBuyer`);

--
-- Indexes for table `purchase_detail`
--
ALTER TABLE `purchase_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchase_id` (`idBuyer`),
  ADD KEY `producId` (`productId`);

--
-- Indexes for table `tabel_category`
--
ALTER TABLE `tabel_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tabel_product`
--
ALTER TABLE `tabel_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`),
  ADD KEY `id_cashier` (`id_cashier`);

--
-- Indexes for table `table_cashier`
--
ALTER TABLE `table_cashier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `purchase_detail`
--
ALTER TABLE `purchase_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `tabel_category`
--
ALTER TABLE `tabel_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tabel_product`
--
ALTER TABLE `tabel_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `table_cashier`
--
ALTER TABLE `table_cashier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category`) REFERENCES `tabel_category` (`id`);

--
-- Constraints for table `purchase_detail`
--
ALTER TABLE `purchase_detail`
  ADD CONSTRAINT `purchase_detail_ibfk_1` FOREIGN KEY (`idBuyer`) REFERENCES `purchase` (`idBuyer`);

--
-- Constraints for table `tabel_product`
--
ALTER TABLE `tabel_product`
  ADD CONSTRAINT `tabel_product_ibfk_1` FOREIGN KEY (`id_cashier`) REFERENCES `table_cashier` (`id`),
  ADD CONSTRAINT `tabel_product_ibfk_2` FOREIGN KEY (`id_category`) REFERENCES `tabel_category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
