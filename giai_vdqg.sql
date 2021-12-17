-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2021 at 04:02 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `giai_vdqg2`
--

DELIMITER $$
--
-- Procedures
--
DROP PROCEDURE IF EXISTS `insert_update_BXH_CT`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_update_BXH_CT` ()  begin
	declare i int default 1;
    declare n int;
    declare id int;
    declare MG int;
    declare SoBan int;
    
    select count(*) into n from ghiban;
    select max(idMG) into MG from muagiai;
    
    while i <= n do
		select idCT into id from ghiban where idGB = i;
        select count(*) into SoBan from ghiban where idCT = id;
        
        if ((select count(*) from bxh_ct where idCT = id) > 0) then
			update bxh_ct
            set SoBanThang = SoBan
            where idCT = id;
		else
			insert into bxh_ct values(MG, id, SoBan);
		end if;
        
        set i = i+1;
    end while;
end$$

DROP PROCEDURE IF EXISTS `update_BXH_CLB`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_BXH_CLB` (IN `ID_CLB` INT)  begin
    declare DiemThang1 int default 0;
    declare DiemHoa1 int default 0;
    declare DiemThua1 int default 0; 
    declare TongThang int default 0;
    declare TongHoa int default 0;
    declare TongThua int default 0;
    declare Diem int default 0;
    declare i int default 1;
    declare n int default 0;
    
    select count(*) into n from trandau;
    
    select DiemThang into DiemThang1 from quydinhdiemso;
    select DiemHoa into  DiemHoa1 from quydinhdiemso;
    select DiemThua into DiemThua1 from quydinhdiemso;
    
    select count(*) into TongThang 
    from trandau as td inner join ketqua as kq on td.idTD = kq.idKQ
    where ((td.Doi1 = ID_CLB) and ( kq.BTDoi1 > kq.BTDoi2 ))
		or ((td.Doi2 = ID_CLB) and ( kq.BTDoi2 > kq.BTDoi1 ));
        
	select count(*) into TongHoa
    from trandau as td inner join ketqua as kq on td.idTD = kq.idKQ
    where ((td.Doi1 = ID_CLB) and ( kq.BTDoi1 = kq.BTDoi2 ))
		or ((td.Doi2 = ID_CLB) and ( kq.BTDoi2 = kq.BTDoi1 ));
        
	select count(*) into TongThua
    from trandau as td inner join ketqua as kq on td.idTD = kq.idKQ
    where ((td.Doi1 = ID_CLB) and ( kq.BTDoi1 < kq.BTDoi2 ))
		or ((td.Doi2 = ID_CLB) and ( kq.BTDoi2 < kq.BTDoi1 ));
    
    update bxh_clb
    set Thang = TongThang, Hoa = TongHoa, Thua = TongThua,
		SoTran = TongThang + TongHoa + TongThua,
        Diem = TongThang*DiemThang1 + TongHoa*DiemHoa1 + TongThua*DiemThua1
    where idCLB = ID_CLB;
    
end$$

DROP PROCEDURE IF EXISTS `update_BXH_CT_TEST`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_BXH_CT_TEST` (IN `ID_CLB` INT)  begin
    select count(*) from trandau;
end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `bxh_clb`
--

DROP TABLE IF EXISTS `bxh_clb`;
CREATE TABLE `bxh_clb` (
  `idMG` int(10) UNSIGNED NOT NULL,
  `idCLB` int(10) UNSIGNED NOT NULL,
  `Thang` int(11) NOT NULL,
  `Hoa` int(11) NOT NULL,
  `Thua` int(11) NOT NULL,
  `SoTran` int(11) NOT NULL,
  `Diem` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bxh_clb`
--

INSERT INTO `bxh_clb` (`idMG`, `idCLB`, `Thang`, `Hoa`, `Thua`, `SoTran`, `Diem`, `created_at`, `updated_at`) VALUES
(1, 2, 6, 3, 2, 11, 21, NULL, NULL),
(1, 3, 2, 4, 5, 11, 10, NULL, NULL),
(1, 4, 4, 4, 4, 12, 16, NULL, NULL),
(1, 5, 2, 6, 4, 12, 12, NULL, NULL),
(1, 6, 4, 7, 1, 12, 19, NULL, NULL),
(1, 7, 4, 5, 3, 12, 17, NULL, NULL),
(1, 8, 3, 3, 6, 12, 12, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bxh_ct`
--

DROP TABLE IF EXISTS `bxh_ct`;
CREATE TABLE `bxh_ct` (
  `idMG` int(10) UNSIGNED NOT NULL,
  `idCT` int(10) UNSIGNED NOT NULL,
  `SoBanThang` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bxh_ct`
--

INSERT INTO `bxh_ct` (`idMG`, `idCT`, `SoBanThang`, `created_at`, `updated_at`) VALUES
(1, 17, 1, NULL, NULL),
(1, 19, 1, NULL, NULL),
(1, 20, 1, NULL, NULL),
(1, 22, 1, NULL, NULL),
(1, 24, 3, NULL, NULL),
(1, 25, 1, NULL, NULL),
(1, 34, 2, NULL, NULL),
(1, 35, 3, NULL, NULL),
(1, 52, 2, NULL, NULL),
(1, 53, 2, NULL, NULL),
(1, 54, 3, NULL, NULL),
(1, 62, 1, NULL, NULL),
(1, 64, 1, NULL, NULL),
(1, 67, 1, NULL, NULL),
(1, 68, 2, NULL, NULL),
(1, 69, 1, NULL, NULL),
(1, 75, 1, NULL, NULL),
(1, 85, 2, NULL, NULL),
(1, 90, 8, NULL, NULL),
(1, 92, 1, NULL, NULL),
(1, 95, 4, NULL, NULL),
(1, 98, 1, NULL, NULL),
(1, 99, 1, NULL, NULL),
(1, 102, 4, NULL, NULL),
(1, 109, 1, NULL, NULL),
(1, 114, 2, NULL, NULL),
(1, 116, 1, NULL, NULL),
(1, 118, 2, NULL, NULL),
(1, 120, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cauthu`
--

DROP TABLE IF EXISTS `cauthu`;
CREATE TABLE `cauthu` (
  `idCT` int(10) UNSIGNED NOT NULL,
  `idCLB` int(10) UNSIGNED NOT NULL,
  `TenCT` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `ViTri` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SoAo` int(11) NOT NULL,
  `ChieuCao` int(11) NOT NULL,
  `LoaiCauThu` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `AnhDaiDien` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cauthu`
--

INSERT INTO `cauthu` (`idCT`, `idCLB`, `TenCT`, `NgaySinh`, `ViTri`, `SoAo`, `ChieuCao`, `LoaiCauThu`, `AnhDaiDien`, `created_at`, `updated_at`) VALUES
(16, 2, 'Ngô Xuân Sơn', '1997-01-17', 'Thủ môn', 1, 177, 'trong nước', 'Anh_VTFC_NgoXuanSon', NULL, NULL),
(17, 2, 'Quế Ngọc Hải', '1993-05-15', 'Hậu vệ', 3, 179, 'trong nước', 'Anh_VTFC_QueNgocHai', NULL, NULL),
(18, 2, 'Vũ Minh Tuấn', '1990-09-19', 'Tiền vệ', 6, 168, 'trong nước', 'Anh_VTFC_VuMinhTuan', NULL, NULL),
(19, 2, 'Nguyễn Trọng Hoàng', '1989-04-14', 'Tiền vệ', 8, 169, 'trong nước', 'Anh_VTFC_NguyenTrongHoang', NULL, NULL),
(20, 2, 'Trần Ngọc Sơn', '1996-10-29', 'Tiền vệ', 9, 168, 'trong nước', 'Anh_VTFC_TranNgocSon', NULL, NULL),
(21, 2, 'Abdumuminov Jakhongir', '1990-01-01', 'Tiền vệ', 11, 185, 'ngoài nước', 'Anh_VTFC_AbdumuminovJakhongir', NULL, NULL),
(22, 2, 'Bùi Quang Khải', '1993-05-19', 'Tiền vệ', 14, 170, 'trong nước', 'Anh_VTFC_BuiQuangKhai', NULL, NULL),
(23, 2, 'Bruno Oliveira De Matos', '1990-06-16', 'Tiền đạo', 18, 182, 'ngoài nước', 'Anh_VTFC_BrunoOliveiraDeMatos', NULL, NULL),
(24, 2, 'Nguyễn Đức Chiến', '1998-08-24', 'Tiền đạo', 21, 180, 'trong nước', 'uploads/cauthu/Anh_VTFC_NguyenDucChien.jpg', NULL, NULL),
(25, 2, 'Nguyễn Hữu Thắng', '2000-05-19', 'Tiền vệ', 22, 168, 'trong nước', 'Anh_VTFC_NguyenHuuThang', NULL, NULL),
(26, 2, 'Trần Nguyên Mạnh', '1991-12-20', 'Thủ môn', 26, 178, 'trong nước', 'Anh_VTFC_TranNguyenManh', NULL, NULL),
(27, 2, 'Trương Tiến Anh', '1999-04-25', 'Hậu vệ', 29, 168, 'trong nước', 'Anh_VTFC_TruongTienAnh', NULL, NULL),
(28, 2, 'Dương Văn Hào', '1997-02-15', 'Tiền đạo', 33, 177, 'trong nước', 'Anh_VTFC_DuongVanHao', NULL, NULL),
(29, 2, 'Nguyễn Việt Phong', '1993-03-23', 'Tiền đạo', 68, 178, 'trong nước', 'Anh_VTFC_NguyenVietPhong', NULL, NULL),
(30, 2, 'Nguyễn Đức Hoàng Minh', '1998-02-20', 'Tiền vệ', 92, 166, 'trong nước', 'Anh_VTFC_NguyenDucHoangMinh', NULL, NULL),
(31, 3, 'Trương Văn Huy', '1999-06-17', 'Thủ môn', 1, 175, 'trong nước', 'Anh_TQN_TruogVanHuy', NULL, NULL),
(32, 3, 'Dương Văn Khoa', '1995-05-06', 'Hậu vệ', 2, 172, 'trong nước', 'Anh_TQG_DuongVanKhoa', NULL, NULL),
(33, 3, 'Đào Duy Khánh', '1994-01-30', 'Trung vệ', 3, 183, 'trong nước', 'Anh_TQN_DaoDuyKhanh', NULL, NULL),
(34, 3, 'Mạc Hồng Quân', '1992-01-01', 'Tiền đạo', 8, 180, 'trong nước', 'uploads/cauthu/Anh_TQN_MacHongQuan.jpg', NULL, NULL),
(35, 3, 'Pereira Diogo Junior', '1990-01-01', 'Tiền đạo', 10, 184, 'ngoài nước', 'uploads/cauthu/Anh_TQN_PereiraDiogoJunior.jpg', NULL, NULL),
(36, 3, 'Hồ Hùng Cường', '1995-04-13', 'Tiền vệ', 11, 170, 'trong nước', 'ANh_TQN_HoHungCuong', NULL, NULL),
(37, 3, 'Trịnh Hoa Hùng', '1991-01-08', 'Tiền vệ', 12, 173, 'trong nước', 'Anh_TQN_TrinhHoaHung', NULL, NULL),
(38, 3, 'Nguyễn Hoài Anh', '1990-03-10', 'Thủ môn', 13, 180, 'trong nước', 'Anh_TQN_NguyenHoaiAnh', NULL, NULL),
(39, 3, 'Nguyễn Hải Huy', '1991-06-18', 'Tiền vệ', 14, 172, 'trong nước', 'Anh_TQN_NguyenHaiHuy', NULL, NULL),
(40, 3, 'Nguyễn Thanh Hiền', '1993-04-16', 'Hậu vệ', 15, 174, 'trong nước', 'Anh_TQN_NguyenThanhHien', NULL, NULL),
(41, 3, 'Nguyễn Văn Điều', '1997-09-03', 'Tiền vệ', 16, 175, 'trong nước', 'Anh_TQn_NguyenVanDieu', NULL, NULL),
(42, 3, 'Phạm Trung Hiếu', '1998-09-02', 'Tiền vệ', 17, 169, 'trong nước', 'Anh_TQN_PhamTrungHieu', NULL, NULL),
(43, 3, 'Phùng Kim Trường', '1996-05-23', 'Tiền vệ', 18, 170, 'trong nước', 'Anh_TQN_PhungKimTruong', NULL, NULL),
(44, 3, 'Bùi Ngọc Long', '2001-10-06', 'Tiền vệ', 19, 166, 'trong nước', 'Anh_TQn_BuiNgocLong', NULL, NULL),
(45, 3, 'Vũ Hồng Quân', '1999-01-01', 'Tiền vệ', 20, 170, 'trong nước', 'Anh_TQN_VuHongQuan', NULL, NULL),
(46, 4, 'Vũ Hoàng Trà', '2002-06-03', 'Hậu vệ', 3, 168, 'trong nước', 'Anh_NDFC_VuHoangTra', NULL, NULL),
(47, 4, 'Trần Đăng Đức Anh', '2001-06-15', 'Hậu vệ', 4, 173, 'trong nước', 'Anh_NDFC_TranDangDucAnh', NULL, NULL),
(48, 4, 'Lâm Anh Quang', '1991-04-24', 'Hậu vệ', 5, 180, 'trong nước', 'Anh_NDFC_LamAnhQuang', NULL, NULL),
(49, 4, 'Phương Hoài Trung Hiến', '1996-12-28', 'Hậu vệ', 6, 183, 'trong nước', 'Anh_NDFC_PhuongHoaiTrungHien', NULL, NULL),
(50, 4, 'Võ Lý', '1993-12-10', 'Tiền vệ', 7, 175, 'trong nước', 'Anh_NDFC_VoLy', NULL, NULL),
(51, 4, 'Nguyễn Đình Sơn', '2001-03-03', 'Tiền vệ', 8, 174, 'trong nước', 'Anh_NDFC_NguyenDinhSon', NULL, NULL),
(52, 4, 'Hoàng Xuân Tân', '2001-02-22', 'Tiền vệ', 9, 174, 'trong nước', 'uploads/cauthu/Anh_NDFC_HoangXuanTan.jpg', NULL, NULL),
(53, 4, 'Trần Mạnh Hùng', '1997-03-17', 'Tiền vệ', 10, 165, 'trong nước', 'uploads/cauthu/Anh_NDFC_TranManhHung.jpg', NULL, NULL),
(54, 4, 'Rodrigo Da Silva Dias', '1994-01-26', 'Tiền đạo', 11, 190, 'trong nước', 'uploads/cauthu/Anh_NDFC_RodrigoDaSilvaDias.jpg', NULL, NULL),
(55, 4, 'Đinh Văn Trường', '1995-10-22', 'Hậu vệ', 12, 165, 'trong nước', 'Anh_NDFC_DinhVanTruong', NULL, NULL),
(56, 4, 'Phùng Văn Nhiên', '1982-11-25', 'Hậu vệ', 15, 169, 'trong nước', 'Anh_NDFC_PhungVanNhien', NULL, NULL),
(57, 4, 'Nguyễn Hạ Long', '1994-03-09', 'Hậu vệ', 16, 170, 'trong nước', 'Anh_NDFC_NguyenHaLong', NULL, NULL),
(58, 4, 'Phan Thế Hưng', '2002-10-21', 'Trung vệ', 17, 178, 'trong nước', 'Anh_NDFC_PhanTheHung', NULL, NULL),
(59, 4, 'Đoàn Thanh Trường', '2000-11-03', 'Trung vệ', 20, 175, 'trong nước', 'Anh_NDFC_DoanThanhTruong', NULL, NULL),
(60, 4, 'Lê Văn Phú', '2000-06-13', 'Thủ môn', 26, 185, 'trong nước', 'Anh_NDFC_LeVanPhu', NULL, NULL),
(61, 5, 'Lương Bá Sơn', '1992-10-10', 'Thủ môn', 1, 179, 'trong nước', 'Anh_THFC_LuongBaSon', NULL, NULL),
(62, 5, 'Hoàng Đình Tùng', '1998-08-24', 'Tiền vệ', 2, 168, 'trong nước', 'Anh_THFC_HoangDinhTung', NULL, NULL),
(63, 5, 'Vũ Xuân Cường', '1992-08-06', 'Hậu vệ', 3, 169, 'trong nước', 'Anh_THFC_VuXuanCuong', NULL, NULL),
(64, 5, 'Trịnh Đình Hùng', '1995-09-03', 'Hậu vệ', 4, 175, 'trong nước', 'Anh_THFC_TrinhDinhHung', NULL, NULL),
(65, 5, 'Nguyễn Minh Tùng', '1992-09-08', 'Trung vệ', 5, 184, 'trong nước', 'Anh_THFC_NguyenMinhTung', NULL, NULL),
(66, 5, 'Nguyễn Hữu Dũng', '1995-08-09', 'Tiền vệ', 7, 170, 'trong nước', 'Anh_THFC_NguyenHuuDung', NULL, NULL),
(67, 5, 'Lê Xuân Hùng', '1991-11-14', 'Tiền vệ', 9, 169, 'trong nước', 'Anh_THFC_LeXuanHung', NULL, NULL),
(68, 5, 'Lê Văn Thắng', '1990-02-08', 'Tiền vệ', 10, 176, 'trong nước', 'Anh_THFC_LeVanThang', NULL, NULL),
(69, 5, 'Lê Phạm Thành Long', '1996-06-05', 'Tiền vệ', 11, 166, 'trong nước', 'Anh_THFC_LePhamThanhLong', NULL, NULL),
(70, 5, 'Trịnh Văn Lợi', '1995-05-26', 'Trung vệ', 15, 179, 'trong nước', 'Anh_THFC_TrinhVanLoi', NULL, NULL),
(71, 5, 'Hoàng Anh Tuấn', '1996-10-08', 'Tiền vệ', 16, 170, 'trong nước', 'Anh_THFC_HoangAnhTuan', NULL, NULL),
(72, 5, 'Hoàng Thái Bình', '1998-01-22', 'Hậu vệ', 17, 173, 'trong nước', 'Anh_THFC_HoangThaiBinh', NULL, NULL),
(73, 5, 'Lê Quốc Phương', '1991-05-19', 'Tiền vệ', 19, 165, 'trong nước', 'Anh_THFC_LeQuocPhuong', NULL, NULL),
(74, 5, 'Nguyễn Trọng Hùng', '1997-10-03', 'Tiền vệ', 20, 172, 'trong nước', 'Anh_THFC_NguyenTrongHung', NULL, NULL),
(75, 5, 'Nguyễn Văn Vinh', '2000-02-22', 'Tiền đạo', 22, 176, 'trong nước', 'Anh_THFC_NguyenVanVinh', NULL, NULL),
(76, 6, 'Nguyễn Sơn Hải', '1994-05-06', 'Thủ môn', 1, 186, 'trong nước', 'Anh_BFC_NguyenSonHai', NULL, NULL),
(77, 6, 'Nguyễn Hùng Thiện Đức', '1999-12-08', 'Hậu vệ', 2, 169, 'trong nước', 'Anh_BFC_NguyenHungThienDuc', NULL, NULL),
(78, 6, 'Nguyễn Thanh Thảo', '1995-05-14', 'Tiền vệ', 3, 178, 'trong nước', 'Anh_BFC_NguyenThanhThao', NULL, NULL),
(79, 6, 'Lê Văn Sơn', '1996-12-20', 'Hậu vệ', 4, 169, 'trong nước', 'Anh_BFC_LeVanSon', NULL, NULL),
(80, 6, 'Nguyễn Văn Quý', '1977-05-15', 'Hậu vệ', 5, 172, 'trong nước', 'Anh_BFC_NguyenVanQuy', NULL, NULL),
(81, 6, 'Nguyễn Trọng Huy', '1996-11-12', 'Tiền vệ', 6, 179, 'trong nước', 'uploads/cauthu/Anh_THFC_LuongBaSon.jpg', NULL, '2021-12-12 12:29:10'),
(82, 6, 'Nguyễn Thanh Long', '1993-11-12', 'Tiền vệ', 7, 182, 'trong nước', 'uploads/cauthu/Anh_THFC_NguyenHuuDung.jpg', NULL, '2021-12-12 12:29:35'),
(83, 6, 'Nguyễn Anh Tài', '1993-10-12', 'Hậu vệ', 8, 168, 'trong nước', 'uploads/cauthu/Anh_THFC_LeXuanHung.jpg', NULL, '2021-12-12 12:30:17'),
(84, 6, 'Đoàn Tuấn Cảnh', '1995-05-12', 'Tiền vệ', 9, 175, 'trong nước', 'uploads/cauthu/Anh_THFC_VuXuanCuong.jpg', NULL, '2021-12-12 12:30:46'),
(85, 6, 'Mansaray Victor Nabay', '1999-07-12', 'Tiền vệ', 10, 180, 'ngoài nước', 'uploads/cauthu/Anh_THFC_NguyenTrongHung.jpg', NULL, '2021-12-12 12:28:46'),
(86, 6, 'Nguyễn Đoàn Trung Nhân', '1993-11-16', 'Tiền vệ', 11, 170, 'trong nước', 'uploads/cauthu/Anh_THFC_LeQuocPhuong.jpg', NULL, '2021-12-12 12:28:23'),
(87, 6, 'Trần Duy Khánh', '1993-11-12', 'Tiền vệ', 12, 171, 'trong nước', 'uploads/cauthu/Anh_THFC_LePhamThanhLong.jpg', NULL, '2021-12-12 12:27:51'),
(88, 6, 'Nguyễn Huỳnh Văn Bin', '1994-11-24', 'Thủ môn', 13, 178, 'trong nước', 'uploads/cauthu/Anh_THFC_HoangThaiBinh.jpg', NULL, '2021-12-12 12:27:21'),
(89, 6, 'Trần Hoàng Phương', '1994-08-12', 'Tiền đạo', 14, 177, 'trong nước', 'uploads/cauthu/Anh_THFC_HoangDinhTung.jpg', NULL, '2021-12-12 12:26:50'),
(90, 6, 'Nguyễn Tiến Linh', '1993-07-08', 'Tiền đạo', 22, 178, 'trong nước', 'uploads/cauthu/Anh_THFC_HoangAnhTuan.jpg', NULL, '2021-12-12 12:26:23'),
(91, 7, 'Bùi Tấn Trường', '1993-07-15', 'Thủ môn', 1, 188, 'trong nước', 'uploads/cauthu/Anh_HNFC_BuiTanTruong.jpg', NULL, '2021-12-12 12:23:37'),
(92, 7, 'Đoàn Văn Hậu', '1992-08-12', 'Hậu vệ', 5, 186, 'trong nước', 'uploads/cauthu/Anh_HNFC_DoanVanHau.jpg', NULL, '2021-12-12 12:24:31'),
(93, 7, 'Đậu Văn Toàn', '1993-10-03', 'Tiền vệ', 6, 170, 'trong nước', 'uploads/cauthu/Anh_HNFC_DauVanToan.jpg', NULL, '2021-12-12 12:25:02'),
(94, 7, 'Moses Oloya', '1996-11-12', 'Tiền vệ', 8, 188, 'ngoài nước', 'uploads/cauthu/Anh_HNFC_Moses.jpg', NULL, '2021-12-12 12:22:11'),
(95, 7, 'Nguyễn Văn Quyết', '1993-08-12', 'Tiền đạo', 10, 172, 'trong nước', 'uploads/cauthu/Anh_HNFC_NguyenVanQuyet.jpg', NULL, '2021-12-12 12:21:40'),
(96, 7, 'Phạm Thành Lương', '1998-08-12', 'Tiền vệ', 11, 166, 'trong nước', 'uploads/cauthu/Anh_HNFC_PhamThanhLuong.jpg', NULL, '2021-12-12 12:21:09'),
(97, 7, 'Trần Văn Kiên', '1995-07-12', 'Hậu vệ', 13, 168, 'trong nước', 'uploads/cauthu/Anh_HNFC_TranVanKien.jpg', NULL, '2021-12-12 12:20:31'),
(98, 7, 'Lê Tấn Tài', '1996-07-16', 'Tiền vệ', 14, 165, 'trong nước', 'uploads/cauthu/Anh_HNFC_LeTanTai.jpg', NULL, '2021-12-12 12:19:48'),
(99, 7, 'Phạm Đức Huy', '1993-07-12', 'Tiền vệ', 15, 172, 'trong nước', 'uploads/cauthu/Anh_HNFC_PhamDucHuy.jpg', NULL, '2021-12-12 12:19:09'),
(100, 7, 'Nguyễn Thành Chung', '1995-06-12', 'Hậu vệ', 16, 180, 'trong nước', 'uploads/cauthu/Anh_HNFC_NguyenThanhChung.jpg', NULL, '2021-12-12 11:15:13'),
(101, 7, 'Đặng Văn Tới', '1995-08-12', 'Hậu vệ', 17, 178, 'trong nước', 'uploads/cauthu/Anh_HNFC_DangVanToi.jpg', NULL, '2021-12-12 11:14:46'),
(102, 7, 'Nguyễn Quang Hải', '1992-06-12', 'Tiền vệ', 19, 168, 'trong nước', 'uploads/cauthu/Anh_HNFC_NguyenQuangHai.jpg', NULL, '2021-12-12 11:14:20'),
(103, 7, 'Trần Đình Trọng', '1992-06-12', 'Hậu vệ', 21, 173, 'trong nước', 'uploads/cauthu/Anh_BFC_NguyenTienLinh.jpg', NULL, '2021-12-12 11:13:28'),
(104, 8, 'Nguyễn Quốc Long', '1995-11-10', 'Hậu vệ', 22, 170, 'trong nước', 'uploads/cauthu/Anh_BFC_NguyenThanhThao.jpg', NULL, '2021-12-12 11:10:55'),
(105, 8, 'Đỗ Duy Mạnh', '1993-07-12', 'Hậu vệ', 28, 180, 'trong nước', 'uploads/cauthu/Anh_BFC_NguyenThanhLong.jpg', NULL, '2021-12-12 11:10:25'),
(106, 8, 'Võ Doãn Thục Kha', '1994-11-10', 'Thủ môn', 1, 175, 'trong nước', 'uploads/cauthu/Anh_BFC_NguyenSonHai.jpg', NULL, '2021-12-12 11:09:55'),
(107, 8, 'Đàm Tiến Dũng', '1993-07-12', 'Hậu vệ', 2, 182, 'trong nước', 'uploads/cauthu/Anh_BFC_NguyenHuynhVanBin.jpg', NULL, '2021-12-12 11:09:01'),
(108, 8, 'Dương Thanh Hào', '1994-06-12', 'Hậu vệ', 3, 178, 'trong nước', 'uploads/cauthu/Anh_BFC_NguyenHungThienDuc.jpg', NULL, '2021-12-12 11:08:32'),
(109, 8, 'Hồ Tấn Tài', '1993-06-12', 'Hậu vệ', 4, 179, 'trong nước', 'uploads/cauthu/Anh_BFC_MansarayVictorNabay.jpg', NULL, '2021-12-12 11:07:45'),
(110, 8, 'Vũ Hữu Quý', '1992-11-12', 'Hậu vệ', 5, 177, 'trong nước', 'uploads/cauthu/Anh_BFC_NguyenAnhTai.jpg', NULL, '2021-12-12 11:08:10'),
(111, 6, 'Bùi Văn Hiếu', '1994-12-12', 'Tiền vệ', 42, 172, 'trong nước', 'uploads/cauthu/Anh_BFC_DoanTuanCanh.jpg', NULL, '2021-12-12 11:06:47'),
(112, 8, 'Đinh Tiến Thành', '1994-07-12', 'Hậu vệ', 7, 185, 'trong nước', 'uploads/cauthu/Anh_BDFC_TranVanTrung.jpg', NULL, '2021-12-12 11:04:33'),
(113, 8, 'Trần Đình Kha', '1994-10-12', 'Tiền đạo', 8, 175, 'trong nước', 'uploads/cauthu/Anh_BDFC_NguyenTanTai.jpg', NULL, '2021-12-12 11:03:37'),
(114, 8, 'Rimario Allando Gordon', '1997-06-12', 'Tiền vệ', 9, 180, 'Ngoài nước', 'uploads/cauthu/Anh_BDFC_NguyenXuanKien.jpg', NULL, '2021-12-12 11:00:53'),
(115, 8, 'Hendrio Araujo Dasilva', '1996-06-12', 'Tiền vệ', 10, 181, 'Trong nước', 'uploads/cauthu/Anh_BDFC_HendrioArsujoDasilva.jpg', NULL, '2021-12-12 10:57:32'),
(116, 8, 'Lê Tiến Anh', '1996-01-12', 'Tiền vệ', 11, 168, 'Trong nước', 'uploads/cauthu/Anh_BDFC_LeTuanAnh.jpg', NULL, '2021-12-12 10:29:21'),
(117, 8, 'Trần Văn Trung', '1996-10-12', 'Tiền vệ', 12, 167, 'Trong nước', 'uploads/cauthu/Anh_BDFC_LeTienAnh.jpg', NULL, '2021-12-12 10:28:47'),
(118, 8, 'Lê Tuấn Anh', '1995-06-12', 'Hậu vệ', 14, 182, 'Trong nước', 'uploads/cauthu/Anh_BDFC_DuongThanhHao.jpg', NULL, '2021-12-12 10:28:12'),
(119, 8, 'Nguyễn Xuân Kiên', '1995-01-03', 'Hậu vệ', 15, 171, 'Trong nước', 'uploads/cauthu/Anh_BDFC_HoTanTai.jpg', NULL, '2021-12-12 10:06:11'),
(120, 8, 'Nguyễn Tấn Tài', '1995-06-12', 'Trung vệ', 17, 169, 'Trong nước', 'uploads/cauthu/Anh_BDFC_BuiVanHieu.jpg', NULL, '2021-12-12 10:27:28');

--
-- Triggers `cauthu`
--
DROP TRIGGER IF EXISTS `cauthu_BEFORE_INSERT_TUOI_CT`;
DELIMITER $$
CREATE TRIGGER `cauthu_BEFORE_INSERT_TUOI_CT` BEFORE INSERT ON `cauthu` FOR EACH ROW BEGIN
	declare TuoiTT int;
    declare TuoiTD int;
    declare SLTT int;
    declare SLTD int;
    declare SLNNTD int;
    declare QDHT int;
    
	DECLARE TUOI INT;
    DECLARE SL INT;
    declare SLNN int;
    
    select max(idQDCT) into QDHT from quydinhcauthu;
    
    select TuoiToiThieu, TuoiToiDa, SLToiThieu, SLToiDa, SLNuocNgoai  into TuoiTT, TuoiTD, SLTT, SLTD, SLNNTD from quydinhcauthu
    where idQDCT = QDHT;
    
    SET TUOI = YEAR(now()) - year(NEW.NgaySinh);
    IF (TUOI < TuoiTT OR TUOI > TuoiTD) THEN
    -- đặt id bằng null để ngắt insert
    SET NEW.idCT = NULL;
	END IF;
    
    SELECT COUNT(*) into SL FROM cauthu;
    if(SL > SLTD) then
    set NEW.idCT = NULL;
    end if;
    
    select count(*) into SLnn from cauthu where LoaiCauThu = 'ngoài nước' and idCLB = new.idCLB;
    IF (SLNN >= SLNNTD) THEN
    -- đặt id bằng null để ngắt insert
    SET NEW.idCT = NULL;
	END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `clb`
--

DROP TABLE IF EXISTS `clb`;
CREATE TABLE `clb` (
  `idCLB` int(10) UNSIGNED NOT NULL,
  `VietTat` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TenCLB` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SanNha` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TruSo` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Logo` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clb`
--

INSERT INTO `clb` (`idCLB`, `VietTat`, `TenCLB`, `SanNha`, `TruSo`, `Logo`, `created_at`, `updated_at`) VALUES
(2, 'VTFC', 'Viettel', 'SVĐ Hàng Đẫy', 'Hà Nội', 'uploads/clb/Logo_VTFC.jpg', NULL, NULL),
(3, 'TQN', 'Than Quảng Ninh', 'SVĐ Cẩm Phả', 'Quảng Ninh', 'uploads/clb/Logo_TQN.jpg', NULL, NULL),
(4, 'NDFC', 'Nam Định', 'SVĐ Thiên Trường', 'Nam Định', 'uploads/clb/Logo_NDFC.jpg', NULL, NULL),
(5, 'THFC', 'Đông Á Thanh Hóa', 'SVĐ Thanh Hóa', 'Thanh Hóa', 'uploads/clb/Logo_THFC.png', NULL, NULL),
(6, 'BFC', 'Becamex Bình Dương', 'SVĐ Bình Dương', 'Bình Dương', 'uploads/clb/Logo_BFC.png', NULL, NULL),
(7, 'HNFC', 'Hà Nội', 'SVĐ Hàng Đẫy', 'Hà Nội', 'uploads/clb/Logo_HNFC.png', NULL, NULL),
(8, 'BDFC', 'Topenland Bình Định', 'SVĐ Quy Nhơn', 'Bình Đinh', 'uploads/clb/Logo_BDFC.png', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ghiban`
--

DROP TABLE IF EXISTS `ghiban`;
CREATE TABLE `ghiban` (
  `idGB` int(11) NOT NULL,
  `idKQ` int(10) UNSIGNED NOT NULL,
  `idCT` int(10) UNSIGNED NOT NULL,
  `LoaiBT` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ThoiDiem` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ghiban`
--

INSERT INTO `ghiban` (`idGB`, `idKQ`, `idCT`, `LoaiBT`, `ThoiDiem`, `created_at`, `updated_at`) VALUES
(11, 8, 19, 'B', 51, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(12, 9, 52, 'A', 26, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(13, 10, 20, 'B', 47, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(14, 10, 25, 'C', 87, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(15, 11, 90, 'C', 73, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(16, 12, 17, 'A', 15, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(17, 12, 22, 'C', 84, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(18, 13, 24, 'A', 28, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(19, 14, 35, 'A', 24, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(20, 14, 35, 'B', 57, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(21, 14, 54, 'C', 72, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(22, 16, 90, 'C', 74, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(23, 17, 35, 'C', 68, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(24, 18, 118, 'B', 40, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(25, 20, 90, 'A', 11, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(26, 20, 90, 'B', 55, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(27, 21, 52, 'A', 19, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(28, 21, 95, 'C', 66, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(29, 22, 53, 'B', 61, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(30, 23, 75, 'C', 84, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(31, 23, 90, 'A', 19, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(32, 23, 90, 'C', 64, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(33, 25, 118, 'B', 43, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(34, 27, 90, 'A', 27, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(35, 27, 114, 'C', 63, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(36, 28, 95, 'A', 13, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(39, 30, 24, 'C', 89, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(40, 31, 120, 'B', 42, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(41, 31, 114, 'C', 81, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(42, 32, 109, 'B', 40, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(43, 32, 54, 'A', 26, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(44, 34, 90, 'C', 76, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(45, 35, 102, 'A', 29, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(46, 35, 102, 'B', 44, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(47, 35, 98, 'B', 59, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(51, 37, 102, 'C', 71, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(52, 39, 95, 'A', 16, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(53, 40, 68, 'B', 56, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(54, 41, 92, 'B', 53, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(55, 41, 85, 'A', 24, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(56, 44, 85, 'C', 76, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(57, 44, 34, 'B', 37, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(58, 45, 54, 'A', 22, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(61, 48, 24, 'B', 33, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(62, 50, 69, 'C', 87, '2021-12-12 04:04:23', '2021-12-12 04:05:49'),
(65, 53, 64, 'C', 86, '2021-12-12 04:04:23', '2021-12-12 04:05:49');

--
-- Triggers `ghiban`
--
DROP TRIGGER IF EXISTS `ghiban_AFTER_DELETE`;
DELIMITER $$
CREATE TRIGGER `ghiban_AFTER_DELETE` AFTER DELETE ON `ghiban` FOR EACH ROW BEGIN
call insert_update_BXH_CT ();
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `ghiban_AFTER_INSERT`;
DELIMITER $$
CREATE TRIGGER `ghiban_AFTER_INSERT` AFTER INSERT ON `ghiban` FOR EACH ROW BEGIN
	call insert_update_BXH_CT ();
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `ghiban_AFTER_UPDATE`;
DELIMITER $$
CREATE TRIGGER `ghiban_AFTER_UPDATE` AFTER UPDATE ON `ghiban` FOR EACH ROW BEGIN
	call insert_update_BXH_CT ();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `hlv`
--

DROP TABLE IF EXISTS `hlv`;
CREATE TABLE `hlv` (
  `idHLV` int(10) UNSIGNED NOT NULL,
  `idCLB` int(10) UNSIGNED NOT NULL,
  `TenHLV` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `ChucVu` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `AnhDaiDien` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hlv`
--

INSERT INTO `hlv` (`idHLV`, `idCLB`, `TenHLV`, `NgaySinh`, `ChucVu`, `AnhDaiDien`, `created_at`, `updated_at`) VALUES
(2, 2, 'Trương Việt Hoàng', '1970-05-06', 'HLV Trưởng', 'HLV_TruongVietHoang', NULL, NULL),
(3, 3, 'Hoàng Thọ', '1973-06-07', 'HLV Trưởng', 'HLV_HoangTho', NULL, NULL),
(4, 4, 'Nguyễn Văn Sỹ', '1974-03-02', 'HLV Trưởng', 'HLV_NguyenVanSy', NULL, NULL),
(5, 5, 'Lujbo Petrovic', '1979-03-07', 'HLV Trưởng', 'HLV_LujboPetrovic', NULL, NULL),
(6, 6, 'Nguyễn Thanh Sơn', '1969-10-13', 'HLV Trưởng', 'HLV_NguyenThanhSon', NULL, NULL),
(7, 7, 'Park Choong Kyun', '1968-09-04', 'HLV Trưởng', 'HLV_ParkChoongKyun', NULL, NULL),
(8, 8, 'Nguyễn Đức Thắng', '1967-04-13', 'HLV Trưởng', 'HLV_NguyenDucThang', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ketqua`
--

DROP TABLE IF EXISTS `ketqua`;
CREATE TABLE `ketqua` (
  `idKQ` int(10) UNSIGNED NOT NULL,
  `idTD` int(10) UNSIGNED NOT NULL,
  `BTDoi1` int(11) NOT NULL,
  `BTDoi2` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ketqua`
--

INSERT INTO `ketqua` (`idKQ`, `idTD`, `BTDoi1`, `BTDoi2`, `created_at`, `updated_at`) VALUES
(8, 8, 1, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(9, 9, 0, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(10, 10, 2, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(11, 11, 1, 1, '2021-12-08 14:00:20', '2021-12-13 10:23:27'),
(12, 12, 2, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(13, 13, 1, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(14, 14, 2, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(15, 15, 0, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(16, 16, 0, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(17, 17, 1, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(18, 18, 0, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(19, 19, 0, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(20, 20, 0, 2, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(21, 21, 1, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(22, 22, 1, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(23, 23, 1, 2, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(24, 24, 0, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(25, 25, 0, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(26, 26, 0, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(27, 27, 1, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(28, 28, 1, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(30, 30, 0, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(31, 31, 2, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(32, 32, 1, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(33, 33, 0, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(34, 34, 0, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(35, 35, 0, 3, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(37, 37, 1, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(38, 38, 0, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(39, 39, 1, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(40, 40, 0, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(41, 41, 1, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(43, 43, 0, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(44, 44, 1, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(45, 45, 0, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(46, 46, 0, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(48, 48, 0, 1, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(49, 49, 0, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(50, 50, 1, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(52, 52, 0, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(53, 53, 1, 0, '2021-12-08 14:00:20', '2021-12-08 14:00:20'),
(65, 17, 3, 2, '2021-12-13 10:21:38', '2021-12-13 10:21:38'),
(68, 17, 7, 4, '2021-12-13 10:41:10', '2021-12-13 10:41:10');

--
-- Triggers `ketqua`
--
DROP TRIGGER IF EXISTS `ketqua_AFTER_DELETE`;
DELIMITER $$
CREATE TRIGGER `ketqua_AFTER_DELETE` AFTER DELETE ON `ketqua` FOR EACH ROW BEGIN
call update_BXH_CLB(1);
call update_BXH_CLB(2);
call update_BXH_CLB(3);
call update_BXH_CLB(4);
call update_BXH_CLB(5);
call update_BXH_CLB(6);
call update_BXH_CLB(7);
call update_BXH_CLB(8);
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `ketqua_AFTER_INSERT`;
DELIMITER $$
CREATE TRIGGER `ketqua_AFTER_INSERT` AFTER INSERT ON `ketqua` FOR EACH ROW BEGIN
call update_BXH_CLB(1);
call update_BXH_CLB(2);
call update_BXH_CLB(3);
call update_BXH_CLB(4);
call update_BXH_CLB(5);
call update_BXH_CLB(6);
call update_BXH_CLB(7);
call update_BXH_CLB(8);
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `ketqua_AFTER_UPDATE`;
DELIMITER $$
CREATE TRIGGER `ketqua_AFTER_UPDATE` AFTER UPDATE ON `ketqua` FOR EACH ROW BEGIN
call update_BXH_CLB(1);
call update_BXH_CLB(2);
call update_BXH_CLB(3);
call update_BXH_CLB(4);
call update_BXH_CLB(5);
call update_BXH_CLB(6);
call update_BXH_CLB(7);
call update_BXH_CLB(8);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2021_11_11_120710_create_clbs_table', 1),
(6, '2021_11_11_123040_create_cau_thus_table', 1),
(7, '2021_11_11_154409_create_hlvs_table', 2),
(8, '2021_11_11_155006_create_mua_giais_table', 3),
(9, '2021_11_11_155312_create_bxh_cts_table', 4),
(10, '2021_11_11_161051_create_trong_tais_table', 5),
(11, '2021_11_11_161430_create_to_trong_tais_table', 6),
(12, '2021_11_11_161919_create_tran_daus_table', 7),
(13, '2021_11_11_163015_create_ket_quas_table', 8),
(14, '2021_11_11_163644_create_ghi_bans_table', 9),
(15, '2021_11_11_164854_create_xu_phats_table', 10),
(16, '2021_11_11_165255_create_quy_dinh_diem_sos_table', 11),
(17, '2021_11_11_165708_create_quy_dinh_cau_thus_table', 12),
(18, '2021_11_11_170130_create_quy_dinh_ban_thangs_table', 13),
(19, '2021_11_12_091310_create_bxh_cts_table', 14),
(22, '2021_11_12_093454_create_bxh_clbs_table', 15),
(25, '2021_11_12_102425_create_phe_duyets_table', 16),
(26, '2016_06_01_000001_create_oauth_auth_codes_table', 17),
(27, '2016_06_01_000002_create_oauth_access_tokens_table', 17),
(28, '2016_06_01_000003_create_oauth_refresh_tokens_table', 17),
(29, '2016_06_01_000004_create_oauth_clients_table', 17),
(30, '2016_06_01_000005_create_oauth_personal_access_clients_table', 17);

-- --------------------------------------------------------

--
-- Table structure for table `muagiai`
--

DROP TABLE IF EXISTS `muagiai`;
CREATE TABLE `muagiai` (
  `idMG` int(10) UNSIGNED NOT NULL,
  `TenMG` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayBD` date NOT NULL,
  `NgayKT` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `muagiai`
--

INSERT INTO `muagiai` (`idMG`, `TenMG`, `NgayBD`, `NgayKT`, `created_at`, `updated_at`) VALUES
(1, 'Giải Vô Địch Quốc Gia V-Leauge', '2021-01-01', '2021-12-31', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('05c535d1cb5f6fe6ce238ea45fbaf7223ea2ff0579ef09900c23d380801709a5ec8bf3a1d4dbc6cf', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-10 15:11:05', '2021-12-10 15:11:05', '2022-12-10 22:11:05'),
('0969a105db346c67a2cb6ced395af66873c724760b42efb8d3c857e66c797bd993a35cc73215ccc6', 13, 3, 'Personal Access Token', '[]', 0, '2021-12-13 02:36:53', '2021-12-13 02:36:53', '2022-12-13 09:36:53'),
('0a0d8cd2334bd411316f0850a37d1f7337492dd6335986ac276f45aad5610d348da86f80248ed278', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-13 10:15:02', '2021-12-13 10:15:02', '2022-12-13 17:15:02'),
('0ad6c3cee49fd09acc6083aa44aace580043ca16e3f6cf392171c0e09445929636990ffa463750f6', 4, 3, 'Personal Access Token', '[]', 1, '2021-11-30 05:16:02', '2021-11-30 05:16:02', '2022-11-30 12:16:02'),
('1bacc7d7e1afd872cd87ec105d83123dff20d3e5e3d79b39ef3394c51b70b77f3500a38ff050e632', 15, 3, 'Personal Access Token', '[]', 0, '2021-12-13 03:14:33', '2021-12-13 03:14:33', '2022-12-13 10:14:33'),
('1de9c0893b14d707585480e2c6f9fecd41eef805599f6c8077cb4036c963e355ee3e94d68fe9b149', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-12 15:15:12', '2021-12-12 15:15:12', '2022-12-12 22:15:12'),
('1f037a5f7b6546e9fdbe5490c5de241436a4a0b4f2ffbea74c72e99d368e6e404d2a063aa006f3c4', 5, 3, 'Personal Access Token', '[]', 0, '2021-12-08 13:46:21', '2021-12-08 13:46:21', '2022-12-08 20:46:21'),
('2526eba61fd50b9886396bd2fb3b70acbe9638cf87e9d1318d815190456001edc026b493251b62ac', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-30 05:05:29', '2021-11-30 05:05:29', '2022-11-30 12:05:29'),
('2ecabb3bc8c9f2405a27d1270157825cdf2f3501ca7ef42b0019af97b457c1d5ccaf913c7ecf15e5', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-13 03:32:26', '2021-12-13 03:32:26', '2022-12-13 10:32:26'),
('31db42810fda61298586b9e2cd20b0f085cec157ddfbebc10b627b3c6fcf3e855d09c80401de6085', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-28 14:18:07', '2021-11-28 14:18:07', '2022-11-28 21:18:07'),
('3d5b001a90249214530e481c37572705d70203bb8509e0fbb6c3907f9ecbc57aec8b1d7594169586', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-11 09:07:40', '2021-12-11 09:07:40', '2022-12-11 16:07:40'),
('410b996272b666b38853cf34759efe8ebb91bcf18da30f72190a59045f91eb41dfc36d27c6b889c8', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-12 15:16:57', '2021-12-12 15:16:57', '2022-12-12 22:16:57'),
('431fd95f514d16d7e896b08f1d6c593b9b55d37fbcd3905b0bc82339b9650e5c1abacf19ff19de26', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-28 14:15:14', '2021-11-28 14:15:14', '2022-11-28 21:15:14'),
('4644ad45f9182fc396c8a2d6ce919a3c46a3fed8856f7387f032b9d03c98adb834172e39784a31b8', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-12 15:11:28', '2021-12-12 15:11:28', '2022-12-12 22:11:28'),
('4da25027c7991ae273eb78067f144af3689fbd47d0f7364600439b567b12451046bcf8f2409f9bdb', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-13 05:13:16', '2021-12-13 05:13:16', '2022-12-13 12:13:16'),
('571d356780423cf54f0037fd192a60fce968d933973eadb04d4abaf69bb587976f8b181a0f0feda0', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-13 02:03:37', '2021-12-13 02:03:37', '2022-12-13 09:03:37'),
('5c1afe6326bb2c627908f6e007449ee9c85bb5cccd2e3748695ffa7eed8429679b11182f681a3f99', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-13 03:16:40', '2021-12-13 03:16:40', '2022-12-13 10:16:40'),
('6457ee9189c34e5b599aec6af3d9c1b3df4f074a5511e0756f6ecbd1558a6f64cb9a81e70e32ae4c', 10, 3, 'Personal Access Token', '[]', 0, '2021-12-12 03:50:28', '2021-12-12 03:50:28', '2022-12-12 10:50:28'),
('645bcc355e5ba52cdc566f61681346db39ff455caa997938ccaf451f9da56359e85b73137dd82fe4', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-12 17:12:09', '2021-12-12 17:12:09', '2022-12-13 00:12:09'),
('680e0fd15e25b50d85fd5835b6ace7493cbd9a28b9beefdc8dc7367cc0f4817545a5c50ba537a53a', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-12 17:18:35', '2021-12-12 17:18:35', '2022-12-13 00:18:35'),
('7808e2d45862646f062e2b0cadb21a7ad4bd689b5bcf97e0a56d74aeb681948f1b6e0c12f5910944', 5, 3, 'Personal Access Token', '[]', 0, '2021-12-07 09:14:40', '2021-12-07 09:14:40', '2022-12-07 16:14:40'),
('94d3f8293cb9a505724631e0ef8978c8b0a7a9aa2cf588493d0744dda445e5661b1dd65a503497c5', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-12 15:17:48', '2021-12-12 15:17:48', '2022-12-12 22:17:48'),
('9d77b22c12c91ccb545ebdf140bdd511935cbf40655c73aad4662e1ce423f2d84513aa2212cf2e27', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-12 13:19:03', '2021-12-12 13:19:03', '2022-12-12 20:19:03'),
('9e67ea3356dfc531d4fb4843c5c20fcbc9090ed447246588df6c7ad63ec22524f161bf2587bc7dc4', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-12 03:41:32', '2021-12-12 03:41:32', '2022-12-12 10:41:32'),
('9f19fc7f6449a9d466d11bc3e56de26218480c5d5c21b08fe32b1d902af1326e6d7a2cb347004e10', 14, 3, 'Personal Access Token', '[]', 0, '2021-12-13 03:09:43', '2021-12-13 03:09:43', '2022-12-13 10:09:43'),
('a058d641bd16f47dc7b3a09399a3e0815e4de09f8f983b6a7e30d7d69dd836c1a944172fb9630385', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-28 14:34:26', '2021-11-28 14:34:26', '2022-11-28 21:34:26'),
('a06d378bec19a28c53c0c2759484fbab13af7657bacdd3bef9972bc6b976bdfc91989782cff3095c', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-08 16:31:49', '2021-12-08 16:31:49', '2022-12-08 23:31:49'),
('a3171827fb9f0a5319f1bd9eb3efd5193eab771702a7418643af5f9563771df40521949027f9e6e4', 4, 3, 'Personal Access Token', '[]', 1, '2021-11-28 14:35:39', '2021-11-28 14:35:39', '2022-11-28 21:35:39'),
('ae9f183f9f7d5991d91e83f05e6aebfed72224100b0fad76b3cc02ad83d64ec31f9ace21d7c41f29', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-10 15:00:31', '2021-12-10 15:00:31', '2022-12-10 22:00:31'),
('aeb370a7ba4c6fcfea9406066d205b3a2a32b5248083d728c7150cc9afd525837b40b7803b1f34b9', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-30 05:24:11', '2021-11-30 05:24:11', '2022-11-30 12:24:11'),
('af67010b2a0b374f6f866ef58f0aa6c46c29901fa06331713a5144323aaf67deef375ee00af0d551', 5, 3, 'Personal Access Token', '[]', 0, '2021-12-07 09:12:00', '2021-12-07 09:12:00', '2022-12-07 16:12:00'),
('bc617cbbf32d3f0fedd93fc3768881d47319bbe1ae592e603f2ac081f28fbb821772c67ca4a8c15e', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-28 14:18:38', '2021-11-28 14:18:38', '2022-11-28 21:18:38'),
('bdc8b07e0fcc1c6dea064ab645abbd1b76ec5346fd64ff66550d7bc7531875894089e8e9eca685d5', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-11 12:18:33', '2021-12-11 12:18:33', '2022-12-11 19:18:33'),
('c36226ec3079e1e1e7356673d53ecbf0c332132b27bb663fd2feb750b5a8e14c39fb4849c6daa347', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-26 19:04:10', '2021-11-26 19:04:10', '2022-11-27 02:04:10'),
('c4149eba2001047ba396c374650a8e204a230b274a2085123eb2c8f02c5f32863d4944ac86dd841a', 5, 3, 'Personal Access Token', '[]', 0, '2021-12-07 09:11:30', '2021-12-07 09:11:30', '2022-12-07 16:11:30'),
('d31f83bc6b5a62f589689b12e838b5debb5d796ea1fb9c06c5343a07514e6d96a516069c2f2919ef', 5, 3, 'Personal Access Token', '[]', 0, '2021-12-08 13:51:39', '2021-12-08 13:51:39', '2022-12-08 20:51:39'),
('d8a060bd4e3b72fc3ed0507185c9369f67b59735670467d91212dc01bc1f8228a661a06a9d267d17', 16, 3, 'Personal Access Token', '[]', 0, '2021-12-13 03:30:54', '2021-12-13 03:30:54', '2022-12-13 10:30:54'),
('d9432ea72c313c9b384a7c8a0aa2c6c27e6a0c52d00020a1185aeec2234e7ef1226a3ef7c94838b3', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-12 03:49:55', '2021-12-12 03:49:55', '2022-12-12 10:49:55'),
('df563880fd63f5625ded840fd93f01e9928f8c4aa2639226834f3fb78a5d7ca2f6e4ca3ae782d99a', 13, 3, 'Personal Access Token', '[]', 0, '2021-12-13 02:34:00', '2021-12-13 02:34:00', '2022-12-13 09:34:00'),
('df81a08f973f55a8d2b25e023b0aa213f9f495092f4e6b9b8f366fadc73090998260a8b323a006b8', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-12 04:11:38', '2021-12-12 04:11:38', '2022-12-12 11:11:38'),
('dfdd57415d4bd1ad90a2d2de62cf2793fcd786d84c75e9dc461fe91959b82d2c3388663d686f1096', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-28 14:31:52', '2021-11-28 14:31:52', '2022-11-28 21:31:52'),
('e54cb6082bfb331aca3bd2fefc410e278a28232605e112be105947de21bc384a77e0d6d2cedbf5d3', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-11 10:38:49', '2021-12-11 10:38:49', '2022-12-11 17:38:49'),
('e765ffae16a4960dc35a92ebd0f042c798d6d2cac613815e632a6d0831d0c729371afd0dcd37f1fe', 4, 3, 'Personal Access Token', '[]', 1, '2021-11-26 19:10:52', '2021-11-26 19:10:52', '2022-11-27 02:10:52'),
('ed083215aeedbe4a9eafcef3c0c1d0bff4d9d472434ddf942b6c2d71169c0d6c11baa21b450f6f84', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-11 12:20:39', '2021-12-11 12:20:39', '2022-12-11 19:20:39'),
('ff6ab78c6702d59bffa921a5e57f7b9bf8afb0b20fd8daeb61f2887505aab005d53dbcaebbbd2f2d', 6, 3, 'Personal Access Token', '[]', 0, '2021-12-12 17:10:55', '2021-12-12 17:10:55', '2022-12-13 00:10:55');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', '9CykOVmgexxZQnClzRjutqTo6kqi0nARo6MeqM9R', NULL, 'http://localhost', 1, 0, 0, '2021-11-26 17:22:25', '2021-11-26 17:22:25'),
(2, NULL, 'Laravel Password Grant Client', 'CPbSoP3UqH0vwVnz25Ro8Xk02VGiMCB5jj7uaDYl', 'users', 'http://localhost', 0, 1, 0, '2021-11-26 17:22:26', '2021-11-26 17:22:26'),
(3, NULL, 'Laravel Personal Access Client', 'iFGsCcDHNSIrhJ1sWXBkIabWp7pMAjEjOfbXEEk4', NULL, 'http://localhost', 1, 0, 0, '2021-11-26 18:25:51', '2021-11-26 18:25:51'),
(4, NULL, 'Laravel Password Grant Client', 'VQYidMd8hmN3wKl3j7IC5i8j06IMxkHwaeKqvBYs', 'users', 'http://localhost', 0, 1, 0, '2021-11-26 18:25:52', '2021-11-26 18:25:52');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-11-26 17:22:26', '2021-11-26 17:22:26'),
(2, 3, '2021-11-26 18:25:52', '2021-11-26 18:25:52');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 4, 'Personal Access Token', 'd5b6bee11f6b5bbdc7f642a2e98e9bd8d98f16cc4d92411ebc5447f689b2df94', '[\"*\"]', NULL, '2021-11-26 18:40:13', '2021-11-26 18:40:13'),
(2, 'App\\Models\\User', 4, 'Personal Access Token', 'd95ad303f5ff4a4b88bbe0ca82f3fb8efc678a9176238758c06ccaf408fbaa05', '[\"*\"]', NULL, '2021-11-26 18:41:23', '2021-11-26 18:41:23'),
(3, 'App\\Models\\User', 4, 'Personal Access Token', '24f79ce086e47354d6b072a0136106889d94b86b04bd181aaf5f1ab7de3d82eb', '[\"*\"]', NULL, '2021-11-26 18:46:43', '2021-11-26 18:46:43'),
(4, 'App\\Models\\User', 4, 'Personal Access Token', '17b78ac3d2ac941486d5a357a3c30771129e3a9f76110bace897bd472e40d7c7', '[\"*\"]', NULL, '2021-11-26 18:47:52', '2021-11-26 18:47:52'),
(5, 'App\\Models\\User', 4, 'Personal Access Token', 'fad7d0b554dede77807573e42d8585b77c0acc9c82d4fa201551e8fa995e7821', '[\"*\"]', NULL, '2021-11-26 18:48:36', '2021-11-26 18:48:36'),
(6, 'App\\Models\\User', 4, 'Personal Access Token', '198e7fada864591a19e47c31d2bc9621e7dcc7b19d3030fc97c7f0b657fcda92', '[\"*\"]', NULL, '2021-11-26 18:48:38', '2021-11-26 18:48:38'),
(7, 'App\\Models\\User', 4, 'Personal Access Token', '8cd7ff2fc1b71ea2ac7d84964fd6b56ba931dee0dda36b98d349c2b973a5f16a', '[\"*\"]', NULL, '2021-11-26 18:48:56', '2021-11-26 18:48:56'),
(8, 'App\\Models\\User', 4, 'Personal Access Token', '5029d5e51e0d1f6c8cef2d81a28034196b078a88e67993ddac02a069d3b58c88', '[\"*\"]', NULL, '2021-11-26 18:50:31', '2021-11-26 18:50:31'),
(9, 'App\\Models\\User', 4, '24f79ce086e47354d6b072a0136106889d94b86b04bd181aaf5f1ab7de3d82eb', '1eb38ad2490e0fa73475825c8997c87d99dd9d40291b758df2aef57da39fd0e5', '[\"*\"]', NULL, '2021-11-26 18:51:05', '2021-11-26 18:51:05'),
(10, 'App\\Models\\User', 4, 'Personal Access Token', 'c8e7afdd2fd38a54ef5309d0d15607303e5f48f325841bec27c6d6133c584699', '[\"*\"]', NULL, '2021-11-26 18:51:40', '2021-11-26 18:51:40'),
(11, 'App\\Models\\User', 4, 'Personal Access Token', 'b83ad63eeaad3dc1bc8e55fcd5f4ea5f58dff39fa994fd5825c97f342e538a4f', '[\"*\"]', NULL, '2021-11-26 18:51:41', '2021-11-26 18:51:41'),
(12, 'App\\Models\\User', 4, 'Personal Access Token', '7d5157c0dce513961781fd08550e4a6eed55301655b3d68859dcf23982f6031f', '[\"*\"]', NULL, '2021-11-26 18:53:27', '2021-11-26 18:53:27');

-- --------------------------------------------------------

--
-- Table structure for table `pheduyet`
--

DROP TABLE IF EXISTS `pheduyet`;
CREATE TABLE `pheduyet` (
  `idCLB` int(10) UNSIGNED NOT NULL,
  `idMG` int(10) UNSIGNED NOT NULL,
  `ThoiGianDK` datetime NOT NULL,
  `ThoiGianCN` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quydinhbanthang`
--

DROP TABLE IF EXISTS `quydinhbanthang`;
CREATE TABLE `quydinhbanthang` (
  `idQUYDINHBANTHANG` int(10) UNSIGNED NOT NULL,
  `idMG` int(10) UNSIGNED NOT NULL,
  `LoaiBT` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ThoiDiemBatDau` int(11) NOT NULL,
  `ThoiDiemKetThuc` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quydinhbanthang`
--

INSERT INTO `quydinhbanthang` (`idQUYDINHBANTHANG`, `idMG`, `LoaiBT`, `ThoiDiemBatDau`, `ThoiDiemKetThuc`, `created_at`, `updated_at`) VALUES
(1, 1, '1', 1, 30, NULL, '2021-12-13 06:30:33'),
(2, 1, 'B', 31, 60, NULL, NULL),
(3, 1, 'C', 61, 90, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `quydinhcauthu`
--

DROP TABLE IF EXISTS `quydinhcauthu`;
CREATE TABLE `quydinhcauthu` (
  `idQDCT` int(10) UNSIGNED NOT NULL,
  `idMG` int(10) UNSIGNED NOT NULL,
  `TuoiToiThieu` int(11) NOT NULL,
  `TuoiToiDa` int(11) NOT NULL,
  `SLToiThieu` int(11) NOT NULL,
  `SLToiDa` int(11) NOT NULL,
  `SLNuocNgoai` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quydinhcauthu`
--

INSERT INTO `quydinhcauthu` (`idQDCT`, `idMG`, `TuoiToiThieu`, `TuoiToiDa`, `SLToiThieu`, `SLToiDa`, `SLNuocNgoai`, `created_at`, `updated_at`) VALUES
(1, 1, 16, 40, 15, 22, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `quydinhdiemso`
--

DROP TABLE IF EXISTS `quydinhdiemso`;
CREATE TABLE `quydinhdiemso` (
  `idQUYDINHDIEMSO` int(10) UNSIGNED NOT NULL,
  `idMG` int(10) UNSIGNED NOT NULL,
  `DiemThang` int(11) NOT NULL,
  `DiemHoa` int(11) NOT NULL,
  `DiemThua` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quydinhdiemso`
--

INSERT INTO `quydinhdiemso` (`idQUYDINHDIEMSO`, `idMG`, `DiemThang`, `DiemHoa`, `DiemThua`, `created_at`, `updated_at`) VALUES
(1, 1, 3, 1, 0, NULL, '2021-12-13 06:31:09');

--
-- Triggers `quydinhdiemso`
--
DROP TRIGGER IF EXISTS `quydinhdiemso_AFTER_UPDATE`;
DELIMITER $$
CREATE TRIGGER `quydinhdiemso_AFTER_UPDATE` AFTER UPDATE ON `quydinhdiemso` FOR EACH ROW BEGIN
	call update_BXH_CLB(1);
	call update_BXH_CLB(2);
	call update_BXH_CLB(3);
	call update_BXH_CLB(4);
	call update_BXH_CLB(5);
	call update_BXH_CLB(6);
	call update_BXH_CLB(7);
	call update_BXH_CLB(8);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `totrongtai`
--

DROP TABLE IF EXISTS `totrongtai`;
CREATE TABLE `totrongtai` (
  `idToTT` int(10) UNSIGNED NOT NULL,
  `idTT` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `totrongtai`
--

INSERT INTO `totrongtai` (`idToTT`, `idTT`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL),
(1, 2, NULL, NULL),
(1, 3, NULL, NULL),
(2, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `trandau`
--

DROP TABLE IF EXISTS `trandau`;
CREATE TABLE `trandau` (
  `idTD` int(10) UNSIGNED NOT NULL,
  `VongDau` int(11) NOT NULL,
  `Doi1` int(10) UNSIGNED NOT NULL,
  `Doi2` int(10) UNSIGNED NOT NULL,
  `SanDau` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ThoiGian` datetime NOT NULL,
  `idMG` int(10) UNSIGNED NOT NULL,
  `idToTT` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trandau`
--

INSERT INTO `trandau` (`idTD`, `VongDau`, `Doi1`, `Doi2`, `SanDau`, `ThoiGian`, `idMG`, `idToTT`, `created_at`, `updated_at`) VALUES
(1, 1, 6, 3, 'SVD Hãng Dẫy', '2021-12-16 00:00:00', 1, 2, '2021-12-12 13:25:37', '2021-12-13 06:31:45'),
(8, 1, 2, 3, 'SVĐ Hàng Đẫy', '2021-02-10 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(9, 1, 2, 4, 'SVĐ Hàng Đẫy', '2021-02-15 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(10, 1, 2, 5, 'SVĐ Hàng Đẫy', '2020-02-20 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(11, 1, 2, 6, 'SVĐ Hàng Đẫy', '2020-02-25 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(12, 1, 2, 7, 'SVĐ Hàng Đẫy', '2020-03-05 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(13, 1, 2, 8, 'SVĐ Hàng Đẫy', '2020-03-10 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(14, 1, 3, 4, 'SVĐ Cẩm Phả', '2021-03-15 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(15, 1, 3, 5, 'SVĐ Cẩm Phả', '2021-03-20 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(16, 1, 3, 6, 'SVĐ Cẩm Phả', '2021-03-25 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(17, 1, 3, 7, 'SVĐ Cẩm Phả', '2021-03-30 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(18, 1, 3, 8, 'SVĐ Cẩm Phả', '2021-04-05 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(19, 1, 4, 5, 'SVĐ Thiên Trường', '2021-04-10 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(20, 1, 4, 6, 'SVĐ Thiên Trường', '2021-04-15 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(21, 1, 4, 7, 'SVĐ Thiên Trường', '2021-04-20 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(22, 1, 4, 8, 'SVĐ Thiên Trường', '2021-04-25 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(23, 1, 5, 6, 'SVĐ Thanh Hóa', '2021-04-30 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(24, 1, 5, 7, 'SVĐ Thanh Hóa', '2021-05-05 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(25, 1, 5, 8, 'SVĐ Thanh Hóa', '2021-05-10 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(26, 1, 6, 7, 'SVĐ Bình Dương', '2021-05-15 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(27, 1, 6, 8, 'SVĐ Bình Dương', '2021-05-20 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(28, 1, 7, 8, 'SVĐ Hàng Đẫy', '2021-05-25 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(30, 2, 8, 2, 'SVĐ Quy Nhơn', '2021-06-05 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(31, 2, 8, 3, 'SVĐ Quy Nhơn', '2021-06-10 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(32, 2, 8, 4, 'SVĐ Quy Nhơn', '2021-06-15 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(33, 2, 8, 5, 'SVĐ Quy Nhơn', '2021-06-20 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(34, 2, 8, 6, 'SVĐ Quy Nhơn', '2021-06-25 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(35, 2, 8, 7, 'SVĐ Quy Nhơn', '2021-06-30 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(37, 2, 7, 2, 'SVĐ Hàng Đẫy', '2021-07-10 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(38, 2, 7, 3, 'SVĐ Hàng Đẫy', '2021-07-15 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(39, 2, 7, 4, 'SVĐ Hàng Đẫy', '2021-07-20 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(40, 2, 7, 5, 'SVĐ Hàng Đẫy', '2021-07-25 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(41, 2, 7, 6, 'SVĐ Hàng Đẫy', '2021-07-30 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(43, 2, 6, 2, 'SVĐ Bình Dương', '2021-08-10 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(44, 2, 6, 3, 'SVĐ Bình Dương', '2021-08-15 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(45, 2, 6, 4, 'SVĐ Bình Dương', '2021-08-20 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(46, 2, 6, 5, 'SVĐ Bình Dương', '2021-08-25 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(48, 2, 5, 2, 'SVĐ Thanh Hóa', '2021-09-05 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(49, 2, 5, 3, 'SVĐ Thanh Hóa', '2021-09-10 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(50, 2, 5, 4, 'SVĐ Thanh Hóa', '2021-09-15 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(52, 2, 4, 2, 'SVĐ Thiên Trường', '2021-09-25 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(53, 2, 4, 3, 'SVĐ Thiên Trường', '2021-09-30 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55'),
(55, 2, 3, 2, 'SVĐ Cẩm Phả', '2021-10-10 00:00:00', 1, 1, '2021-12-12 13:25:37', '2021-12-12 13:25:55');

-- --------------------------------------------------------

--
-- Table structure for table `trongtai`
--

DROP TABLE IF EXISTS `trongtai`;
CREATE TABLE `trongtai` (
  `idTT` int(10) UNSIGNED NOT NULL,
  `TenTT` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `ViTri` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `AnhDaiDien` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trongtai`
--

INSERT INTO `trongtai` (`idTT`, `TenTT`, `NgaySinh`, `ViTri`, `AnhDaiDien`, `created_at`, `updated_at`) VALUES
(1, 'Lê Văn Việt', '1967-02-03', 'Trọng Tài Chính', 'TT_LeVanViet', NULL, NULL),
(2, 'Ngô Văn Hưng', '1968-12-03', 'Trọng Tài Biên ', 'TT_NgoVanHung', NULL, NULL),
(3, 'Nguyễn Việt Lâm', '1965-03-07', 'Trọng Tài Biên', 'TT_NguyenVietLam', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `UID` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Role` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UID`, `username`, `email`, `email_verified_at`, `password`, `remember_token`, `Role`, `created_at`, `updated_at`) VALUES
(6, 'hungss', 'hung@gmail.com', NULL, '$2y$10$Vc6o42qtspLvzH95iAQ4pe.RcJvM0Ny/C76.woNCBSeBdgw1Xt.12', NULL, 1, '2021-12-08 16:31:24', '2021-12-08 16:31:24'),
(7, '12345', 'huy@gmail.com', NULL, '123456', NULL, 0, '2021-12-10 14:57:12', '2021-12-13 06:32:18'),
(8, 'Animation For You', 'hunga9k50doker@gmail.com', NULL, '$2y$10$qo6G5czR8sVSgRlUe6w7ueMJEeeokMlEMOxzZq9M8cWKrquvG/jXi', NULL, 0, '2021-12-11 10:38:35', '2021-12-11 10:38:35');

-- --------------------------------------------------------

--
-- Table structure for table `xuphat`
--

DROP TABLE IF EXISTS `xuphat`;
CREATE TABLE `xuphat` (
  `idXP` int(10) UNSIGNED NOT NULL,
  `idKQ` int(10) UNSIGNED NOT NULL,
  `idCT` int(10) UNSIGNED NOT NULL,
  `LoaiThe` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ThoiDiem` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bxh_clb`
--
ALTER TABLE `bxh_clb`
  ADD PRIMARY KEY (`idMG`,`idCLB`),
  ADD KEY `bxh_clb_idclb_foreign` (`idCLB`);

--
-- Indexes for table `bxh_ct`
--
ALTER TABLE `bxh_ct`
  ADD PRIMARY KEY (`idMG`,`idCT`),
  ADD KEY `bxh_ct_idct_foreign` (`idCT`);

--
-- Indexes for table `cauthu`
--
ALTER TABLE `cauthu`
  ADD PRIMARY KEY (`idCT`),
  ADD KEY `cauthu_idclb_foreign` (`idCLB`);

--
-- Indexes for table `clb`
--
ALTER TABLE `clb`
  ADD PRIMARY KEY (`idCLB`),
  ADD UNIQUE KEY `clb_viettat_unique` (`VietTat`),
  ADD UNIQUE KEY `clb_tenclb_unique` (`TenCLB`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `ghiban`
--
ALTER TABLE `ghiban`
  ADD PRIMARY KEY (`idGB`),
  ADD KEY `ghiban_idkq_foreign` (`idKQ`),
  ADD KEY `ghiban_idct_foreign` (`idCT`);

--
-- Indexes for table `hlv`
--
ALTER TABLE `hlv`
  ADD PRIMARY KEY (`idHLV`),
  ADD KEY `hlv_idclb_foreign` (`idCLB`);

--
-- Indexes for table `ketqua`
--
ALTER TABLE `ketqua`
  ADD PRIMARY KEY (`idKQ`),
  ADD KEY `ketqua_idtd_foreign` (`idTD`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `muagiai`
--
ALTER TABLE `muagiai`
  ADD PRIMARY KEY (`idMG`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `pheduyet`
--
ALTER TABLE `pheduyet`
  ADD PRIMARY KEY (`idCLB`,`idMG`),
  ADD KEY `pheduyet_idmg_foreign` (`idMG`);

--
-- Indexes for table `quydinhbanthang`
--
ALTER TABLE `quydinhbanthang`
  ADD PRIMARY KEY (`idQUYDINHBANTHANG`),
  ADD KEY `quydinhbanthang_idmg_foreign` (`idMG`);

--
-- Indexes for table `quydinhcauthu`
--
ALTER TABLE `quydinhcauthu`
  ADD PRIMARY KEY (`idQDCT`),
  ADD KEY `quydinhcauthu_idmg_foreign` (`idMG`);

--
-- Indexes for table `quydinhdiemso`
--
ALTER TABLE `quydinhdiemso`
  ADD PRIMARY KEY (`idQUYDINHDIEMSO`),
  ADD KEY `quydinhdiemso_idmg_foreign` (`idMG`);

--
-- Indexes for table `totrongtai`
--
ALTER TABLE `totrongtai`
  ADD PRIMARY KEY (`idToTT`,`idTT`) USING BTREE,
  ADD KEY `FK_totrongtai_trongtai` (`idTT`);

--
-- Indexes for table `trandau`
--
ALTER TABLE `trandau`
  ADD PRIMARY KEY (`idTD`),
  ADD KEY `trandau_doi1_foreign` (`Doi1`),
  ADD KEY `trandau_doi2_foreign` (`Doi2`),
  ADD KEY `trandau_idmg_foreign` (`idMG`),
  ADD KEY `trandau_idtott_foreign` (`idToTT`);

--
-- Indexes for table `trongtai`
--
ALTER TABLE `trongtai`
  ADD PRIMARY KEY (`idTT`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UID`),
  ADD UNIQUE KEY `user_email_unique` (`email`) USING BTREE;

--
-- Indexes for table `xuphat`
--
ALTER TABLE `xuphat`
  ADD PRIMARY KEY (`idXP`),
  ADD KEY `xuphat_idkq_foreign` (`idKQ`),
  ADD KEY `xuphat_idct_foreign` (`idCT`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cauthu`
--
ALTER TABLE `cauthu`
  MODIFY `idCT` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT for table `clb`
--
ALTER TABLE `clb`
  MODIFY `idCLB` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ghiban`
--
ALTER TABLE `ghiban`
  MODIFY `idGB` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `hlv`
--
ALTER TABLE `hlv`
  MODIFY `idHLV` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ketqua`
--
ALTER TABLE `ketqua`
  MODIFY `idKQ` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `muagiai`
--
ALTER TABLE `muagiai`
  MODIFY `idMG` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `quydinhbanthang`
--
ALTER TABLE `quydinhbanthang`
  MODIFY `idQUYDINHBANTHANG` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `quydinhcauthu`
--
ALTER TABLE `quydinhcauthu`
  MODIFY `idQDCT` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `quydinhdiemso`
--
ALTER TABLE `quydinhdiemso`
  MODIFY `idQUYDINHDIEMSO` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `totrongtai`
--
ALTER TABLE `totrongtai`
  MODIFY `idToTT` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trandau`
--
ALTER TABLE `trandau`
  MODIFY `idTD` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `trongtai`
--
ALTER TABLE `trongtai`
  MODIFY `idTT` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `xuphat`
--
ALTER TABLE `xuphat`
  MODIFY `idXP` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bxh_clb`
--
ALTER TABLE `bxh_clb`
  ADD CONSTRAINT `bxh_clb_idclb_foreign` FOREIGN KEY (`idCLB`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bxh_clb_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bxh_ct`
--
ALTER TABLE `bxh_ct`
  ADD CONSTRAINT `bxh_ct_idct_foreign` FOREIGN KEY (`idCT`) REFERENCES `cauthu` (`idCT`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bxh_ct_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cauthu`
--
ALTER TABLE `cauthu`
  ADD CONSTRAINT `cauthu_idclb_foreign` FOREIGN KEY (`idCLB`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ghiban`
--
ALTER TABLE `ghiban`
  ADD CONSTRAINT `ghiban_idct_foreign` FOREIGN KEY (`idCT`) REFERENCES `cauthu` (`idCT`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ghiban_idkq_foreign` FOREIGN KEY (`idKQ`) REFERENCES `ketqua` (`idKQ`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hlv`
--
ALTER TABLE `hlv`
  ADD CONSTRAINT `hlv_idclb_foreign` FOREIGN KEY (`idCLB`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ketqua`
--
ALTER TABLE `ketqua`
  ADD CONSTRAINT `ketqua_idtd_foreign` FOREIGN KEY (`idTD`) REFERENCES `trandau` (`idTD`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pheduyet`
--
ALTER TABLE `pheduyet`
  ADD CONSTRAINT `pheduyet_idclb_foreign` FOREIGN KEY (`idCLB`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pheduyet_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quydinhbanthang`
--
ALTER TABLE `quydinhbanthang`
  ADD CONSTRAINT `quydinhbanthang_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quydinhcauthu`
--
ALTER TABLE `quydinhcauthu`
  ADD CONSTRAINT `quydinhcauthu_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quydinhdiemso`
--
ALTER TABLE `quydinhdiemso`
  ADD CONSTRAINT `quydinhdiemso_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `totrongtai`
--
ALTER TABLE `totrongtai`
  ADD CONSTRAINT `FK_totrongtai_trongtai` FOREIGN KEY (`idTT`) REFERENCES `trongtai` (`idTT`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `trandau`
--
ALTER TABLE `trandau`
  ADD CONSTRAINT `trandau_doi1_foreign` FOREIGN KEY (`Doi1`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `trandau_doi2_foreign` FOREIGN KEY (`Doi2`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `trandau_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `trandau_idtott_foreign` FOREIGN KEY (`idToTT`) REFERENCES `totrongtai` (`idToTT`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `xuphat`
--
ALTER TABLE `xuphat`
  ADD CONSTRAINT `xuphat_idct_foreign` FOREIGN KEY (`idCT`) REFERENCES `cauthu` (`idCT`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `xuphat_idkq_foreign` FOREIGN KEY (`idKQ`) REFERENCES `ketqua` (`idKQ`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
