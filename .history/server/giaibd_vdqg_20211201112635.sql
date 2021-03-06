-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.21-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table giaibd_vdqg.bxh_clb
CREATE TABLE IF NOT EXISTS `bxh_clb` (
  `idMG` int(10) unsigned NOT NULL,
  `idCLB` int(10) unsigned NOT NULL,
  `Thang` int(11) NOT NULL,
  `Hoa` int(11) NOT NULL,
  `Thua` int(11) NOT NULL,
  `SoTran` int(11) NOT NULL,
  `Diem` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idMG`,`idCLB`),
  KEY `bxh_clb_idclb_foreign` (`idCLB`),
  CONSTRAINT `bxh_clb_idclb_foreign` FOREIGN KEY (`idCLB`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bxh_clb_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.bxh_clb: ~8 rows (approximately)
DELETE FROM `bxh_clb`;
/*!40000 ALTER TABLE `bxh_clb` DISABLE KEYS */;
INSERT INTO `bxh_clb` (`idMG`, `idCLB`, `Thang`, `Hoa`, `Thua`, `SoTran`, `Diem`, `created_at`, `updated_at`) VALUES
	(1, 1, 5, 5, 3, 13, 20, NULL, NULL),
	(1, 2, 6, 2, 4, 12, 20, NULL, NULL),
	(1, 3, 3, 4, 6, 13, 13, NULL, NULL),
	(1, 4, 4, 5, 5, 14, 17, NULL, NULL),
	(1, 5, 2, 8, 4, 14, 14, NULL, NULL),
	(1, 6, 5, 7, 2, 14, 22, NULL, NULL),
	(1, 7, 6, 5, 3, 14, 23, NULL, NULL),
	(1, 8, 3, 4, 7, 14, 13, NULL, NULL);
/*!40000 ALTER TABLE `bxh_clb` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.bxh_ct
CREATE TABLE IF NOT EXISTS `bxh_ct` (
  `idMG` int(10) unsigned NOT NULL,
  `idCT` int(10) unsigned NOT NULL,
  `SoBanThang` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idMG`,`idCT`),
  KEY `bxh_ct_idct_foreign` (`idCT`),
  CONSTRAINT `bxh_ct_idct_foreign` FOREIGN KEY (`idCT`) REFERENCES `cauthu` (`idCT`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bxh_ct_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.bxh_ct: ~34 rows (approximately)
DELETE FROM `bxh_ct`;
/*!40000 ALTER TABLE `bxh_ct` DISABLE KEYS */;
INSERT INTO `bxh_ct` (`idMG`, `idCT`, `SoBanThang`, `created_at`, `updated_at`) VALUES
	(1, 5, 3, NULL, NULL),
	(1, 7, 1, NULL, NULL),
	(1, 8, 5, NULL, NULL),
	(1, 9, 6, NULL, NULL),
	(1, 10, 2, NULL, NULL),
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
/*!40000 ALTER TABLE `bxh_ct` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.cauthu
CREATE TABLE IF NOT EXISTS `cauthu` (
  `idCT` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idCLB` int(10) unsigned NOT NULL,
  `TenCT` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `ViTri` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SoAo` int(11) NOT NULL,
  `ChieuCao` int(11) NOT NULL,
  `LoaiCauThu` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `AnhDaiDien` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idCT`),
  KEY `cauthu_idclb_foreign` (`idCLB`),
  CONSTRAINT `cauthu_idclb_foreign` FOREIGN KEY (`idCLB`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.cauthu: ~120 rows (approximately)
DELETE FROM `cauthu`;
/*!40000 ALTER TABLE `cauthu` DISABLE KEYS */;
INSERT INTO `cauthu` (`idCT`, `idCLB`, `TenCT`, `NgaySinh`, `ViTri`, `SoAo`, `ChieuCao`, `LoaiCauThu`, `AnhDaiDien`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Tr???n B???u Ng???c', '1991-02-26', 'Th??? m??n', 1, 192, 'trong n?????c', 'Anh_HAGL_TranBuuNgoc', NULL, NULL),
	(2, 1, 'Kim Dongsu', '1995-03-21', 'h???u v???', 3, 188, 'ngo??i n?????c', 'Anh_HAGL_KimDongsu', NULL, NULL),
	(3, 1, 'Memovic Damir', '1989-01-19', 'h???u v???', 4, 188, 'ngo??i n?????c', 'Anh_HAGL_MemovicDamir', NULL, NULL),
	(4, 1, 'Tr???n H???u ????ng Tri???u', '1995-08-20', 'H???u V???', 5, 174, 'trong n?????c', 'Anh_HAGL_TranHuuDongTrieu', NULL, NULL),
	(5, 1, 'L????ng Xu??n Tr?????ng', '1995-04-28', 'Ti???n v???', 6, 178, 'trong n?????c', 'Anh_HAGL_LuongXuanTruong', NULL, NULL),
	(6, 1, 'Nguy???n Phong H???ng Duy', '1996-04-13', 'H???u v???', 7, 169, 'trong n?????c', 'Anh_HAGl_NguyenPhongHongDuy', NULL, NULL),
	(7, 1, 'Tr???n Minh V????ng', '1995-03-28', 'Ti???n v???', 8, 166, 'trong n?????c', 'Anh_HAGL_TranMinhVuong', NULL, NULL),
	(8, 1, 'Nguy???n V??n To??n', '1996-04-12', 'Ti???n ?????o', 9, 170, 'trong n?????c', 'Anh_HAGL_NguyenVanToan', NULL, NULL),
	(9, 1, 'Nguy???n C??ng Ph?????ng', '1995-01-21', 'Ti???n ?????o', 10, 168, 'trong n?????c', 'Anh_HAGL_NguyenCongPhuong', NULL, NULL),
	(10, 1, 'Nguy???n Tu???n Anh', '1995-05-16', 'Ti???n v???', 11, 175, 'trong n?????c', 'Anh_HAGL_NguyenTuanAnh', NULL, NULL),
	(11, 1, 'Ti??u ?? Xal', '2000-08-14', 'H???u v???', 12, 180, 'trong n?????c', 'Anh_HAGL_TieuEXal', NULL, NULL),
	(12, 1, 'Nguy???n H???u Tu???n', '1992-05-06', 'H???u v???', 15, 178, 'trong n?????c', 'Anh_HAGL_NguyenHuuT uan', NULL, NULL),
	(13, 1, 'V?? V??n Thanh', '1996-04-14', 'H???u v???', 17, 172, 'trong n?????c', 'Anh_HAGL_VuVanThanh', NULL, NULL),
	(14, 1, 'Tr???n B???o To??n', '2000-07-14', 'Ti???n v???', 20, 170, 'trong n?????c', 'Anh_HAGL_TranBaoToan', NULL, NULL),
	(15, 1, 'Nguy???n Ki??n Quy???t', '1996-11-14', 'H???u v???', 21, 168, 'trong n?????c', 'Anh_HAGL_NguyenKienQuyet', NULL, NULL),
	(16, 2, 'Ng?? Xu??n S??n', '1997-01-17', 'Th??? m??n', 1, 177, 'trong n?????c', 'Anh_VTFC_NgoXuanSon', NULL, NULL),
	(17, 2, 'Qu??? Ng???c H???i', '1993-05-15', 'H???u v???', 3, 179, 'trong n?????c', 'Anh_VTFC_QueNgocHai', NULL, NULL),
	(18, 2, 'V?? Minh Tu???n', '1990-09-19', 'Ti???n v???', 6, 168, 'trong n?????c', 'Anh_VTFC_VuMinhTuan', NULL, NULL),
	(19, 2, 'Nguy???n Tr???ng Ho??ng', '1989-04-14', 'Ti???n v???', 8, 169, 'trong n?????c', 'Anh_VTFC_NguyenTrongHoang', NULL, NULL),
	(20, 2, 'Tr???n Ng???c S??n', '1996-10-29', 'Ti???n v???', 9, 168, 'trong n?????c', 'Anh_VTFC_TranNgocSon', NULL, NULL),
	(21, 2, 'Abdumuminov Jakhongir', '1990-01-01', 'Ti???n v???', 11, 185, 'ngo??i n?????c', 'Anh_VTFC_AbdumuminovJakhongir', NULL, NULL),
	(22, 2, 'B??i Quang Kh???i', '1993-05-19', 'Ti???n v???', 14, 170, 'trong n?????c', 'Anh_VTFC_BuiQuangKhai', NULL, NULL),
	(23, 2, 'Bruno Oliveira De Matos', '1990-06-16', 'Ti???n ?????o', 18, 182, 'ngo??i n?????c', 'Anh_VTFC_BrunoOliveiraDeMatos', NULL, NULL),
	(24, 2, 'Nguy???n ?????c Chi???n', '1998-08-24', 'Ti???n ?????o', 21, 180, 'trong n?????c', 'Anh_VTFC_NguyenDucChien', NULL, NULL),
	(25, 2, 'Nguy???n H???u Th???ng', '2000-05-19', 'Ti???n v???', 22, 168, 'trong n?????c', 'Anh_VTFC_NguyenHuuThang', NULL, NULL),
	(26, 2, 'Tr???n Nguy??n M???nh', '1991-12-20', 'Th??? m??n', 26, 178, 'trong n?????c', 'Anh_VTFC_TranNguyenManh', NULL, NULL),
	(27, 2, 'Tr????ng Ti???n Anh', '1999-04-25', 'H???u v???', 29, 168, 'trong n?????c', 'Anh_VTFC_TruongTienAnh', NULL, NULL),
	(28, 2, 'D????ng V??n H??o', '1997-02-15', 'Ti???n ?????o', 33, 177, 'trong n?????c', 'Anh_VTFC_DuongVanHao', NULL, NULL),
	(29, 2, 'Nguy???n Vi???t Phong', '1993-03-23', 'Ti???n ?????o', 68, 178, 'trong n?????c', 'Anh_VTFC_NguyenVietPhong', NULL, NULL),
	(30, 2, 'Nguy???n ?????c Ho??ng Minh', '1998-02-20', 'Ti???n v???', 92, 166, 'trong n?????c', 'Anh_VTFC_NguyenDucHoangMinh', NULL, NULL),
	(31, 3, 'Tr????ng V??n Huy', '1999-06-17', 'Th??? m??n', 1, 175, 'trong n?????c', 'Anh_TQN_TruogVanHuy', NULL, NULL),
	(32, 3, 'D????ng V??n Khoa', '1995-05-06', 'H???u v???', 2, 172, 'trong n?????c', 'Anh_TQG_DuongVanKhoa', NULL, NULL),
	(33, 3, '????o Duy Kh??nh', '1994-01-30', 'Trung v???', 3, 183, 'trong n?????c', 'Anh_TQN_DaoDuyKhanh', NULL, NULL),
	(34, 3, 'M???c H???ng Qu??n', '1992-01-01', 'Ti???n ?????o', 8, 180, 'trong n?????c', 'Anh_TQN_MacHongQuan', NULL, NULL),
	(35, 3, 'Pereira Diogo Junior', '1990-01-01', 'Ti???n ?????o', 10, 184, 'ngo??i n?????c', 'Anh_TQN_PereiraDiogoJunior', NULL, NULL),
	(36, 3, 'H??? H??ng C?????ng', '1995-04-13', 'Ti???n v???', 11, 170, 'trong n?????c', 'ANh_TQN_HoHungCuong', NULL, NULL),
	(37, 3, 'Tr???nh Hoa H??ng', '1991-01-08', 'Ti???n v???', 12, 173, 'trong n?????c', 'Anh_TQN_TrinhHoaHung', NULL, NULL),
	(38, 3, 'Nguy???n Ho??i Anh', '1990-03-10', 'Th??? m??n', 13, 180, 'trong n?????c', 'Anh_TQN_NguyenHoaiAnh', NULL, NULL),
	(39, 3, 'Nguy???n H???i Huy', '1991-06-18', 'Ti???n v???', 14, 172, 'trong n?????c', 'Anh_TQN_NguyenHaiHuy', NULL, NULL),
	(40, 3, 'Nguy???n Thanh Hi???n', '1993-04-16', 'H???u v???', 15, 174, 'trong n?????c', 'Anh_TQN_NguyenThanhHien', NULL, NULL),
	(41, 3, 'Nguy???n V??n ??i???u', '1997-09-03', 'Ti???n v???', 16, 175, 'trong n?????c', 'Anh_TQn_NguyenVanDieu', NULL, NULL),
	(42, 3, 'Ph???m Trung Hi???u', '1998-09-02', 'Ti???n v???', 17, 169, 'trong n?????c', 'Anh_TQN_PhamTrungHieu', NULL, NULL),
	(43, 3, 'Ph??ng Kim Tr?????ng', '1996-05-23', 'Ti???n v???', 18, 170, 'trong n?????c', 'Anh_TQN_PhungKimTruong', NULL, NULL),
	(44, 3, 'B??i Ng???c Long', '2001-10-06', 'Ti???n v???', 19, 166, 'trong n?????c', 'Anh_TQn_BuiNgocLong', NULL, NULL),
	(45, 3, 'V?? H???ng Qu??n', '1999-01-01', 'Ti???n v???', 20, 170, 'trong n?????c', 'Anh_TQN_VuHongQuan', NULL, NULL),
	(46, 4, 'V?? Ho??ng Tr??', '2002-06-03', 'H???u v???', 3, 168, 'trong n?????c', 'Anh_NDFC_VuHoangTra', NULL, NULL),
	(47, 4, 'Tr???n ????ng ?????c Anh', '2001-06-15', 'H???u v???', 4, 173, 'trong n?????c', 'Anh_NDFC_TranDangDucAnh', NULL, NULL),
	(48, 4, 'L??m Anh Quang', '1991-04-24', 'H???u v???', 5, 180, 'trong n?????c', 'Anh_NDFC_LamAnhQuang', NULL, NULL),
	(49, 4, 'Ph????ng Ho??i Trung Hi???n', '1996-12-28', 'H???u v???', 6, 183, 'trong n?????c', 'Anh_NDFC_PhuongHoaiTrungHien', NULL, NULL),
	(50, 4, 'V?? L??', '1993-12-10', 'Ti???n v???', 7, 175, 'trong n?????c', 'Anh_NDFC_VoLy', NULL, NULL),
	(51, 4, 'Nguy???n ????nh S??n', '2001-03-03', 'Ti???n v???', 8, 174, 'trong n?????c', 'Anh_NDFC_NguyenDinhSon', NULL, NULL),
	(52, 4, 'Ho??ng Xu??n T??n', '2001-02-22', 'Ti???n v???', 9, 174, 'trong n?????c', 'Anh_NDFC_HoangXuanTan', NULL, NULL),
	(53, 4, 'Tr???n M???nh H??ng', '1997-03-17', 'Ti???n v???', 10, 165, 'trong n?????c', 'Anh_NDFC_TranManhHung', NULL, NULL),
	(54, 4, 'Rodrigo Da Silva Dias', '1994-01-26', 'Ti???n ?????o', 11, 190, 'trong n?????c', 'Anh_NDFC_RodrigoDaSilvaDias', NULL, NULL),
	(55, 4, '??inh V??n Tr?????ng', '1995-10-22', 'H???u v???', 12, 165, 'trong n?????c', 'Anh_NDFC_DinhVanTruong', NULL, NULL),
	(56, 4, 'Ph??ng V??n Nhi??n', '1982-11-25', 'H???u v???', 15, 169, 'trong n?????c', 'Anh_NDFC_PhungVanNhien', NULL, NULL),
	(57, 4, 'Nguy???n H??? Long', '1994-03-09', 'H???u v???', 16, 170, 'trong n?????c', 'Anh_NDFC_NguyenHaLong', NULL, NULL),
	(58, 4, 'Phan Th??? H??ng', '2002-10-21', 'Trung v???', 17, 178, 'trong n?????c', 'Anh_NDFC_PhanTheHung', NULL, NULL),
	(59, 4, '??o??n Thanh Tr?????ng', '2000-11-03', 'Trung v???', 20, 175, 'trong n?????c', 'Anh_NDFC_DoanThanhTruong', NULL, NULL),
	(60, 4, 'L?? V??n Ph??', '2000-06-13', 'Th??? m??n', 26, 185, 'trong n?????c', 'Anh_NDFC_LeVanPhu', NULL, NULL),
	(61, 5, 'L????ng B?? S??n', '1992-10-10', 'Th??? m??n', 1, 179, 'trong n?????c', 'Anh_THFC_LuongBaSon', NULL, NULL),
	(62, 5, 'Ho??ng ????nh T??ng', '1998-08-24', 'Ti???n v???', 2, 168, 'trong n?????c', 'Anh_THFC_HoangDinhTung', NULL, NULL),
	(63, 5, 'V?? Xu??n C?????ng', '1992-08-06', 'H???u v???', 3, 169, 'trong n?????c', 'Anh_THFC_VuXuanCuong', NULL, NULL),
	(64, 5, 'Tr???nh ????nh H??ng', '1995-09-03', 'H???u v???', 4, 175, 'trong n?????c', 'Anh_THFC_TrinhDinhHung', NULL, NULL),
	(65, 5, 'Nguy???n Minh T??ng', '1992-09-08', 'Trung v???', 5, 184, 'trong n?????c', 'Anh_THFC_NguyenMinhTung', NULL, NULL),
	(66, 5, 'Nguy???n H???u D??ng', '1995-08-09', 'Ti???n v???', 7, 170, 'trong n?????c', 'Anh_THFC_NguyenHuuDung', NULL, NULL),
	(67, 5, 'L?? Xu??n H??ng', '1991-11-14', 'Ti???n v???', 9, 169, 'trong n?????c', 'Anh_THFC_LeXuanHung', NULL, NULL),
	(68, 5, 'L?? V??n Th???ng', '1990-02-08', 'Ti???n v???', 10, 176, 'trong n?????c', 'Anh_THFC_LeVanThang', NULL, NULL),
	(69, 5, 'L?? Ph???m Th??nh Long', '1996-06-05', 'Ti???n v???', 11, 166, 'trong n?????c', 'Anh_THFC_LePhamThanhLong', NULL, NULL),
	(70, 5, 'Tr???nh V??n L???i', '1995-05-26', 'Trung v???', 15, 179, 'trong n?????c', 'Anh_THFC_TrinhVanLoi', NULL, NULL),
	(71, 5, 'Ho??ng Anh Tu???n', '1996-10-08', 'Ti???n v???', 16, 170, 'trong n?????c', 'Anh_THFC_HoangAnhTuan', NULL, NULL),
	(72, 5, 'Ho??ng Th??i B??nh', '1998-01-22', 'H???u v???', 17, 173, 'trong n?????c', 'Anh_THFC_HoangThaiBinh', NULL, NULL),
	(73, 5, 'L?? Qu???c Ph????ng', '1991-05-19', 'Ti???n v???', 19, 165, 'trong n?????c', 'Anh_THFC_LeQuocPhuong', NULL, NULL),
	(74, 5, 'Nguy???n Tr???ng H??ng', '1997-10-03', 'Ti???n v???', 20, 172, 'trong n?????c', 'Anh_THFC_NguyenTrongHung', NULL, NULL),
	(75, 5, 'Nguy???n V??n Vinh', '2000-02-22', 'Ti???n ?????o', 22, 176, 'trong n?????c', 'Anh_THFC_NguyenVanVinh', NULL, NULL),
	(76, 6, 'Nguy???n S??n H???i', '1994-05-06', 'Th??? m??n', 1, 186, 'trong n?????c', 'Anh_BFC_NguyenSonHai', NULL, NULL),
	(77, 6, 'Nguy???n H??ng Thi???n ?????c', '1999-12-08', 'H???u v???', 2, 169, 'trong n?????c', 'Anh_BFC_NguyenHungThienDuc', NULL, NULL),
	(78, 6, 'Nguy???n Thanh Th???o', '1995-05-14', 'Ti???n v???', 3, 178, 'trong n?????c', 'Anh_BFC_NguyenThanhThao', NULL, NULL),
	(79, 6, 'L?? V??n S??n', '1996-12-20', 'H???u v???', 4, 169, 'trong n?????c', 'Anh_BFC_LeVanSon', NULL, NULL),
	(80, 6, 'Nguy???n V??n Qu??', '1977-05-15', 'H???u v???', 5, 172, 'trong n?????c', 'Anh_BFC_NguyenVanQuy', NULL, NULL),
	(81, 6, 'Nguy???n Tr???ng Huy', '1997-06-25', 'Ti???n v???', 6, 179, 'trong n?????c', 'Anh_BFC_NguyenTrongHuy', NULL, NULL),
	(82, 6, 'Nguy???n Thanh Long', '1990-01-10', 'Ti???n v???', 7, 182, 'trong n?????c', 'Anh_BFC_NguyenThanhLong', NULL, NULL),
	(83, 6, 'Nguy???n Anh T??i', '1996-02-05', 'H???u v???', 8, 168, 'trong n?????c', 'Anh_BFC_NguyenAnhTai', NULL, NULL),
	(84, 6, '??o??n Tu???n C???nh', '1998-07-27', 'Ti???n v???', 9, 175, 'trong n?????c', 'Anh_BFC_DoanTuanCanh', NULL, NULL),
	(85, 6, 'Mansaray Victor Nabay', '1997-02-22', 'Ti???n v???', 10, 180, 'ngo??i n?????c', 'Anh_BFC_MansarayVictorNabay', NULL, NULL),
	(86, 6, 'Nguy???n ??o??n Trung Nh??n', '1998-03-05', 'Ti???n v???', 11, 170, 'trong n?????c', 'Anh_BFC_NguyenDoanTrungNhan', NULL, NULL),
	(87, 6, 'Tr???n Duy Kh??nh', '1977-07-20', 'Ti???n v???', 12, 171, 'trong n?????c', 'Anh_BFC_TranDuyKhanh', NULL, NULL),
	(88, 6, 'Nguy???n Hu???nh V??n Bin', '2002-01-12', 'Th??? m??n', 13, 178, 'trong n?????c', 'Anh_BFC_NguyenHuynhVanBin', NULL, NULL),
	(89, 6, 'Tr???n Ho??ng Ph????ng', '1994-11-04', 'Ti???n ?????o', 14, 177, 'trong n?????c', 'Anh_BFC_TranHoangPhuong', NULL, NULL),
	(90, 6, 'Nguy???n Ti???n Linh', '1997-10-20', 'Ti???n ?????o', 22, 178, 'trong n?????c', 'Anh_BFC_NguyenTienLinh', NULL, NULL),
	(91, 7, 'B??i T???n Tr?????ng', '1986-02-19', 'Th??? m??n', 1, 188, 'trong n?????c', 'Anh_HNFC_BuiTanTruong', NULL, NULL),
	(92, 7, '??o??n V??n H???u', '1999-04-19', 'H???u v???', 5, 186, 'trong n?????c', 'Anh_HNFC_DoanVanHau', NULL, NULL),
	(93, 7, '?????u V??n To??n', '1997-04-07', 'Ti???n v???', 6, 170, 'trong n?????c', 'Anh_HNFC_DauVanToan', NULL, NULL),
	(94, 7, 'Moses Oloya', '1992-10-22', 'Ti???n v???', 8, 188, 'ngo??i n?????c', 'Anh_HNFC_MosesOloya', NULL, NULL),
	(95, 7, 'Nguy???n V??n Quy???t', '1991-07-10', 'Ti???n ?????o', 10, 172, 'trong n?????c', 'Anh_HNFC_NguyenVanQuyet', NULL, NULL),
	(96, 7, 'Ph???m Th??nh L????ng', '1988-09-10', 'Ti???n v???', 11, 166, 'trong n?????c', 'Anh_HNFC_PhamThanhLuong', NULL, NULL),
	(97, 7, 'Tr???n V??n Ki??n', '1996-05-13', 'H???u v???', 13, 168, 'trong n?????c', 'Anh_HNFC_TranVanKien', NULL, NULL),
	(98, 7, 'L?? T???n T??i', '1984-01-04', 'Ti???n v???', 14, 165, 'trong n?????c', 'Anh_HNFC_LeTanTai', NULL, NULL),
	(99, 7, 'Ph???m ?????c Huy', '1995-01-20', 'Ti???n v???', 15, 172, 'trong n?????c', 'Anh_HNFC_PhamDucHuy', NULL, NULL),
	(100, 7, 'Nguy???n Th??nh Chung', '1997-03-29', 'H???u v???', 16, 180, 'trong n?????c', 'Anh_HNFC_NguyenThanhChung', NULL, NULL),
	(101, 7, '?????ng V??n T???i', '1999-01-12', 'H???u v???', 17, 178, 'trong n?????c', 'Anh_HNFC_DangVanToi', NULL, NULL),
	(102, 7, 'Nguy???n Quang H???i', '1997-04-12', 'Ti???n v???', 19, 168, 'trong n?????c', 'Anh_HNFC_NguyenQuangHai', NULL, NULL),
	(103, 7, 'Tr???n ????nh Tr???ng', '1997-04-25', 'H???u v???', 21, 173, 'trong n?????c', 'Anh_HNFC_TranDinhTrong', NULL, NULL),
	(104, 7, 'Nguy???n Qu???c Long', '1988-02-19', 'H???u v???', 22, 170, 'trong n?????c', 'Anh_HNFC_NguyenQuocLong', NULL, NULL),
	(105, 7, '????? Duy M???nh', '1996-09-29', 'H???u v???', 28, 180, 'trong n?????c', 'Anh_HNFC_DoDuyManh', NULL, NULL),
	(106, 8, 'V?? Do??n Th???c Kha', '1991-05-30', 'Th??? m??n', 1, 175, 'trong n?????c', 'Anh_BDFC_VoDoanThucKha', NULL, NULL),
	(107, 8, '????m Ti???n D??ng', '1996-01-10', 'H???u v???', 2, 182, 'trong n?????c', 'Anh_BDFC_DamTienDung', NULL, NULL),
	(108, 8, 'D????ng Thanh H??o', '1991-06-23', 'H???u v???', 3, 178, 'trong n?????c', 'Anh_BDFC_DuongThanhHao', NULL, NULL),
	(109, 8, 'H??? T???n T??i', '1997-11-06', 'H???u v???', 4, 179, 'trong n?????c', 'Anh_BDFC_HoTanTai', NULL, NULL),
	(110, 8, 'V?? H???u Qu??', '1993-02-10', 'H???u v???', 5, 177, 'trong n?????c', 'Anh_BDFC_VuHuuQuy', NULL, NULL),
	(111, 8, 'B??i V??n Hi???u', '1989-10-02', 'Ti???n v???', 6, 172, 'trong n?????c', 'Anh_BDFC_BuiVanHieu', NULL, NULL),
	(112, 8, '??inh Ti???n Th??nh', '1991-01-24', 'H???u v???', 7, 185, 'trong n?????c', 'Anh_BDFC_DinhTienThanh', NULL, NULL),
	(113, 8, 'Tr???n ????nh Kha', '1994-03-21', 'Ti???n ?????o', 8, 175, 'trong n?????c', 'Anh_BDFC_TranDinhKha', NULL, NULL),
	(114, 8, 'Rimario Allando Gordon', '1994-07-06', 'Ti???n ?????o', 9, 180, 'ngo??i n?????c', 'Anh_BDFC_RimarioAllandoGordon', NULL, NULL),
	(115, 8, 'Hendrio Araujo Dasilva', '1994-05-16', 'Ti???n v???', 10, 181, 'ngo??i n?????c', 'Anh_BDFC_HendrioAraujoDasilva', NULL, NULL),
	(116, 8, 'L?? Ti???n Anh', '1998-03-23', 'Ti???n v???', 11, 168, 'trong n?????c', 'Anh_BDFC_LeTienAnh', NULL, NULL),
	(117, 8, 'Tr???n V??n Trung', '1998-01-27', 'Ti???n v???', 12, 167, 'trong n?????c', 'Anh_BDFC_TranVanTrung', NULL, NULL),
	(118, 8, 'L?? Tu???n Anh', '1999-09-28', 'Ti???n v???', 14, 182, 'trong n?????c', 'Anh_BDFC_LeTuanAnh', NULL, NULL),
	(119, 8, 'Nguy???n Xu??n Ki??n', '2000-01-04', 'H???u v???', 15, 171, 'trong n?????c', 'Anh_BDFC_NguyenXuanKien', NULL, NULL),
	(120, 8, 'Nguy???n T???n T??i', '1991-03-25', 'Ti???n v???', 17, 169, 'trong n?????c', 'Anh_BDFC_NguyenTanTai', NULL, NULL);
/*!40000 ALTER TABLE `cauthu` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.clb
CREATE TABLE IF NOT EXISTS `clb` (
  `idCLB` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `VietTat` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TenCLB` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SanNha` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TruSo` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Logo` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idCLB`),
  UNIQUE KEY `clb_viettat_unique` (`VietTat`),
  UNIQUE KEY `clb_tenclb_unique` (`TenCLB`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.clb: ~10 rows (approximately)
DELETE FROM `clb`;
/*!40000 ALTER TABLE `clb` DISABLE KEYS */;
INSERT INTO `clb` (`idCLB`, `VietTat`, `TenCLB`, `SanNha`, `TruSo`, `Logo`, `created_at`, `updated_at`) VALUES
	(1, 'HAGL', 'Ho??ng Anh Gia Lai', 'SV?? Pleiku', 'Gia Lai', 'Logo_HAGL', NULL, NULL),
	(2, 'VTFC', 'Viettel', 'SV?? H??ng ?????y', 'H?? N???i', 'Logo_VTFC', NULL, NULL),
	(3, 'TQN', 'Than Qu???ng Ninh', 'SV?? C???m Ph???', 'Qu???ng Ninh', 'Logo_TQN', NULL, NULL),
	(4, 'NDFC', 'Nam ?????nh', 'SV?? Thi??n Tr?????ng', 'Nam ?????nh', 'Logo_NDFC', NULL, NULL),
	(5, 'THFC', '????ng ?? Thanh H??a', 'SV?? Thanh H??a', 'Thanh H??a', 'Logo_THFC', NULL, NULL),
	(6, 'BFC', 'Becamex B??nh D????ng', 'SV?? B??nh D????ng', 'B??nh D????ng', 'Logo_BFC', NULL, NULL),
	(7, 'HNFC', 'H?? N???i', 'SV?? H??ng ?????y', 'H?? N???i', 'Logo_HNFC', NULL, NULL),
	(8, 'BDFC', 'Topenland B??nh ?????nh', 'SV?? Quy Nh??n', 'B??nh ??inh', 'Logo_BDFC', NULL, NULL),
	(9, '11112222', 'b', 'b', 'QQQ', 'Logo', '2021-11-12 16:19:30', '2021-11-12 21:10:53');
/*!40000 ALTER TABLE `clb` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.failed_jobs: ~0 rows (approximately)
DELETE FROM `failed_jobs`;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.ghiban
CREATE TABLE IF NOT EXISTS `ghiban` (
  `idGB` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idKQ` int(10) unsigned NOT NULL,
  `idCT` int(10) unsigned NOT NULL,
  `LoaiBT` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ThoiDiem` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idGB`),
  KEY `ghiban_idkq_foreign` (`idKQ`),
  KEY `ghiban_idct_foreign` (`idCT`),
  CONSTRAINT `ghiban_idct_foreign` FOREIGN KEY (`idCT`) REFERENCES `cauthu` (`idCT`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ghiban_idkq_foreign` FOREIGN KEY (`idKQ`) REFERENCES `ketqua` (`idKQ`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.ghiban: ~0 rows (approximately)
DELETE FROM `ghiban`;
/*!40000 ALTER TABLE `ghiban` DISABLE KEYS */;
/*!40000 ALTER TABLE `ghiban` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.hlv
CREATE TABLE IF NOT EXISTS `hlv` (
  `idHLV` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idCLB` int(10) unsigned NOT NULL,
  `TenHLV` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `ChucVu` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `AnhDaiDien` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idHLV`),
  KEY `hlv_idclb_foreign` (`idCLB`),
  CONSTRAINT `hlv_idclb_foreign` FOREIGN KEY (`idCLB`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.hlv: ~8 rows (approximately)
DELETE FROM `hlv`;
/*!40000 ALTER TABLE `hlv` DISABLE KEYS */;
INSERT INTO `hlv` (`idHLV`, `idCLB`, `TenHLV`, `NgaySinh`, `ChucVu`, `AnhDaiDien`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Kiatisuk Senamuang', '1975-03-04', 'HLV Tr?????ng', 'HVL_Kiatisuk Senamuang', NULL, NULL),
	(2, 2, 'Tr????ng Vi???t Ho??ng', '1970-05-06', 'HLV Tr?????ng', 'HLV_TruongVietHoang', NULL, NULL),
	(3, 3, 'Ho??ng Th???', '1973-06-07', 'HLV Tr?????ng', 'HLV_HoangTho', NULL, NULL),
	(4, 4, 'Nguy???n V??n S???', '1974-03-02', 'HLV Tr?????ng', 'HLV_NguyenVanSy', NULL, NULL),
	(5, 5, 'Lujbo Petrovic', '1979-03-07', 'HLV Tr?????ng', 'HLV_LujboPetrovic', NULL, NULL),
	(6, 6, 'Nguy???n Thanh S??n', '1969-10-13', 'HLV Tr?????ng', 'HLV_NguyenThanhSon', NULL, NULL),
	(7, 7, 'Park Choong Kyun', '1968-09-04', 'HLV Tr?????ng', 'HLV_ParkChoongKyun', NULL, NULL),
	(8, 8, 'Nguy???n ?????c Th???ng', '1967-04-13', 'HLV Tr?????ng', 'HLV_NguyenDucThang', NULL, NULL);
/*!40000 ALTER TABLE `hlv` ENABLE KEYS */;

-- Dumping structure for procedure giaibd_vdqg.insert_update_BXH_CT
DELIMITER //
CREATE PROCEDURE `insert_update_BXH_CT`()
begin
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
end//
DELIMITER ;

-- Dumping structure for table giaibd_vdqg.ketqua
CREATE TABLE IF NOT EXISTS `ketqua` (
  `idKQ` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idTD` int(10) unsigned NOT NULL,
  `BTDoi1` int(11) NOT NULL,
  `BTDoi2` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idKQ`),
  KEY `ketqua_idtd_foreign` (`idTD`),
  CONSTRAINT `ketqua_idtd_foreign` FOREIGN KEY (`idTD`) REFERENCES `trandau` (`idTD`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.ketqua: ~0 rows (approximately)
DELETE FROM `ketqua`;
/*!40000 ALTER TABLE `ketqua` DISABLE KEYS */;
/*!40000 ALTER TABLE `ketqua` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.migrations: ~25 rows (approximately)
DELETE FROM `migrations`;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
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
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.muagiai
CREATE TABLE IF NOT EXISTS `muagiai` (
  `idMG` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `TenMG` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayBD` date NOT NULL,
  `NgayKT` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idMG`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.muagiai: ~0 rows (approximately)
DELETE FROM `muagiai`;
/*!40000 ALTER TABLE `muagiai` DISABLE KEYS */;
INSERT INTO `muagiai` (`idMG`, `TenMG`, `NgayBD`, `NgayKT`, `created_at`, `updated_at`) VALUES
	(1, 'Gi???i V?? ?????ch Qu???c Gia V-Leauge', '2021-01-01', '2021-12-31', NULL, NULL);
/*!40000 ALTER TABLE `muagiai` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.oauth_access_tokens
CREATE TABLE IF NOT EXISTS `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.oauth_access_tokens: ~11 rows (approximately)
DELETE FROM `oauth_access_tokens`;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
	('0ad6c3cee49fd09acc6083aa44aace580043ca16e3f6cf392171c0e09445929636990ffa463750f6', 4, 3, 'Personal Access Token', '[]', 1, '2021-11-30 12:16:02', '2021-11-30 12:16:02', '2022-11-30 12:16:02'),
	('2526eba61fd50b9886396bd2fb3b70acbe9638cf87e9d1318d815190456001edc026b493251b62ac', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-30 12:05:29', '2021-11-30 12:05:29', '2022-11-30 12:05:29'),
	('31db42810fda61298586b9e2cd20b0f085cec157ddfbebc10b627b3c6fcf3e855d09c80401de6085', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-28 21:18:07', '2021-11-28 21:18:07', '2022-11-28 21:18:07'),
	('431fd95f514d16d7e896b08f1d6c593b9b55d37fbcd3905b0bc82339b9650e5c1abacf19ff19de26', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-28 21:15:14', '2021-11-28 21:15:14', '2022-11-28 21:15:14'),
	('a058d641bd16f47dc7b3a09399a3e0815e4de09f8f983b6a7e30d7d69dd836c1a944172fb9630385', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-28 21:34:26', '2021-11-28 21:34:26', '2022-11-28 21:34:26'),
	('a3171827fb9f0a5319f1bd9eb3efd5193eab771702a7418643af5f9563771df40521949027f9e6e4', 4, 3, 'Personal Access Token', '[]', 1, '2021-11-28 21:35:39', '2021-11-28 21:35:39', '2022-11-28 21:35:39'),
	('aeb370a7ba4c6fcfea9406066d205b3a2a32b5248083d728c7150cc9afd525837b40b7803b1f34b9', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-30 12:24:11', '2021-11-30 12:24:11', '2022-11-30 12:24:11'),
	('bc617cbbf32d3f0fedd93fc3768881d47319bbe1ae592e603f2ac081f28fbb821772c67ca4a8c15e', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-28 21:18:38', '2021-11-28 21:18:38', '2022-11-28 21:18:38'),
	('c36226ec3079e1e1e7356673d53ecbf0c332132b27bb663fd2feb750b5a8e14c39fb4849c6daa347', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-27 02:04:10', '2021-11-27 02:04:10', '2022-11-27 02:04:10'),
	('dfdd57415d4bd1ad90a2d2de62cf2793fcd786d84c75e9dc461fe91959b82d2c3388663d686f1096', 4, 3, 'Personal Access Token', '[]', 0, '2021-11-28 21:31:52', '2021-11-28 21:31:52', '2022-11-28 21:31:52'),
	('e765ffae16a4960dc35a92ebd0f042c798d6d2cac613815e632a6d0831d0c729371afd0dcd37f1fe', 4, 3, 'Personal Access Token', '[]', 1, '2021-11-27 02:10:52', '2021-11-27 02:10:52', '2022-11-27 02:10:52');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.oauth_auth_codes
CREATE TABLE IF NOT EXISTS `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.oauth_auth_codes: ~0 rows (approximately)
DELETE FROM `oauth_auth_codes`;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.oauth_clients
CREATE TABLE IF NOT EXISTS `oauth_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.oauth_clients: ~4 rows (approximately)
DELETE FROM `oauth_clients`;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
	(1, NULL, 'Laravel Personal Access Client', '9CykOVmgexxZQnClzRjutqTo6kqi0nARo6MeqM9R', NULL, 'http://localhost', 1, 0, 0, '2021-11-27 00:22:25', '2021-11-27 00:22:25'),
	(2, NULL, 'Laravel Password Grant Client', 'CPbSoP3UqH0vwVnz25Ro8Xk02VGiMCB5jj7uaDYl', 'users', 'http://localhost', 0, 1, 0, '2021-11-27 00:22:26', '2021-11-27 00:22:26'),
	(3, NULL, 'Laravel Personal Access Client', 'iFGsCcDHNSIrhJ1sWXBkIabWp7pMAjEjOfbXEEk4', NULL, 'http://localhost', 1, 0, 0, '2021-11-27 01:25:51', '2021-11-27 01:25:51'),
	(4, NULL, 'Laravel Password Grant Client', 'VQYidMd8hmN3wKl3j7IC5i8j06IMxkHwaeKqvBYs', 'users', 'http://localhost', 0, 1, 0, '2021-11-27 01:25:52', '2021-11-27 01:25:52');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.oauth_personal_access_clients
CREATE TABLE IF NOT EXISTS `oauth_personal_access_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.oauth_personal_access_clients: ~2 rows (approximately)
DELETE FROM `oauth_personal_access_clients`;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
	(1, 1, '2021-11-27 00:22:26', '2021-11-27 00:22:26'),
	(2, 3, '2021-11-27 01:25:52', '2021-11-27 01:25:52');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.oauth_refresh_tokens
CREATE TABLE IF NOT EXISTS `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.oauth_refresh_tokens: ~0 rows (approximately)
DELETE FROM `oauth_refresh_tokens`;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.password_resets: ~0 rows (approximately)
DELETE FROM `password_resets`;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.personal_access_tokens: ~11 rows (approximately)
DELETE FROM `personal_access_tokens`;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
	(1, 'App\\Models\\User', 4, 'Personal Access Token', 'd5b6bee11f6b5bbdc7f642a2e98e9bd8d98f16cc4d92411ebc5447f689b2df94', '["*"]', NULL, '2021-11-27 01:40:13', '2021-11-27 01:40:13'),
	(2, 'App\\Models\\User', 4, 'Personal Access Token', 'd95ad303f5ff4a4b88bbe0ca82f3fb8efc678a9176238758c06ccaf408fbaa05', '["*"]', NULL, '2021-11-27 01:41:23', '2021-11-27 01:41:23'),
	(3, 'App\\Models\\User', 4, 'Personal Access Token', '24f79ce086e47354d6b072a0136106889d94b86b04bd181aaf5f1ab7de3d82eb', '["*"]', NULL, '2021-11-27 01:46:43', '2021-11-27 01:46:43'),
	(4, 'App\\Models\\User', 4, 'Personal Access Token', '17b78ac3d2ac941486d5a357a3c30771129e3a9f76110bace897bd472e40d7c7', '["*"]', NULL, '2021-11-27 01:47:52', '2021-11-27 01:47:52'),
	(5, 'App\\Models\\User', 4, 'Personal Access Token', 'fad7d0b554dede77807573e42d8585b77c0acc9c82d4fa201551e8fa995e7821', '["*"]', NULL, '2021-11-27 01:48:36', '2021-11-27 01:48:36'),
	(6, 'App\\Models\\User', 4, 'Personal Access Token', '198e7fada864591a19e47c31d2bc9621e7dcc7b19d3030fc97c7f0b657fcda92', '["*"]', NULL, '2021-11-27 01:48:38', '2021-11-27 01:48:38'),
	(7, 'App\\Models\\User', 4, 'Personal Access Token', '8cd7ff2fc1b71ea2ac7d84964fd6b56ba931dee0dda36b98d349c2b973a5f16a', '["*"]', NULL, '2021-11-27 01:48:56', '2021-11-27 01:48:56'),
	(8, 'App\\Models\\User', 4, 'Personal Access Token', '5029d5e51e0d1f6c8cef2d81a28034196b078a88e67993ddac02a069d3b58c88', '["*"]', NULL, '2021-11-27 01:50:31', '2021-11-27 01:50:31'),
	(9, 'App\\Models\\User', 4, '24f79ce086e47354d6b072a0136106889d94b86b04bd181aaf5f1ab7de3d82eb', '1eb38ad2490e0fa73475825c8997c87d99dd9d40291b758df2aef57da39fd0e5', '["*"]', NULL, '2021-11-27 01:51:05', '2021-11-27 01:51:05'),
	(10, 'App\\Models\\User', 4, 'Personal Access Token', 'c8e7afdd2fd38a54ef5309d0d15607303e5f48f325841bec27c6d6133c584699', '["*"]', NULL, '2021-11-27 01:51:40', '2021-11-27 01:51:40'),
	(11, 'App\\Models\\User', 4, 'Personal Access Token', 'b83ad63eeaad3dc1bc8e55fcd5f4ea5f58dff39fa994fd5825c97f342e538a4f', '["*"]', NULL, '2021-11-27 01:51:41', '2021-11-27 01:51:41'),
	(12, 'App\\Models\\User', 4, 'Personal Access Token', '7d5157c0dce513961781fd08550e4a6eed55301655b3d68859dcf23982f6031f', '["*"]', NULL, '2021-11-27 01:53:27', '2021-11-27 01:53:27');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.pheduyet
CREATE TABLE IF NOT EXISTS `pheduyet` (
  `idCLB` int(10) unsigned NOT NULL,
  `idMG` int(10) unsigned NOT NULL,
  `ThoiGianDK` datetime NOT NULL,
  `ThoiGianCN` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idCLB`,`idMG`),
  KEY `pheduyet_idmg_foreign` (`idMG`),
  CONSTRAINT `pheduyet_idclb_foreign` FOREIGN KEY (`idCLB`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pheduyet_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.pheduyet: ~0 rows (approximately)
DELETE FROM `pheduyet`;
/*!40000 ALTER TABLE `pheduyet` DISABLE KEYS */;
/*!40000 ALTER TABLE `pheduyet` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.quydinhbanthang
CREATE TABLE IF NOT EXISTS `quydinhbanthang` (
  `idQUYDINHBANTHANG` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idMG` int(10) unsigned NOT NULL,
  `LoaiBT` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ThoiDiemBatDau` int(11) NOT NULL,
  `ThoiDiemKetThuc` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idQUYDINHBANTHANG`),
  KEY `quydinhbanthang_idmg_foreign` (`idMG`),
  CONSTRAINT `quydinhbanthang_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.quydinhbanthang: ~3 rows (approximately)
DELETE FROM `quydinhbanthang`;
/*!40000 ALTER TABLE `quydinhbanthang` DISABLE KEYS */;
INSERT INTO `quydinhbanthang` (`idQUYDINHBANTHANG`, `idMG`, `LoaiBT`, `ThoiDiemBatDau`, `ThoiDiemKetThuc`, `created_at`, `updated_at`) VALUES
	(1, 1, 'A', 0, 30, NULL, NULL),
	(2, 1, 'B', 31, 60, NULL, NULL),
	(3, 1, 'C', 61, 90, NULL, NULL);
/*!40000 ALTER TABLE `quydinhbanthang` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.quydinhcauthu
CREATE TABLE IF NOT EXISTS `quydinhcauthu` (
  `idQDCT` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idMG` int(10) unsigned NOT NULL,
  `TuoiToiThieu` int(11) NOT NULL,
  `TuoiToiDa` int(11) NOT NULL,
  `SLToiThieu` int(11) NOT NULL,
  `SLToiDa` int(11) NOT NULL,
  `SLNuocNgoai` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idQDCT`),
  KEY `quydinhcauthu_idmg_foreign` (`idMG`),
  CONSTRAINT `quydinhcauthu_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.quydinhcauthu: ~0 rows (approximately)
DELETE FROM `quydinhcauthu`;
/*!40000 ALTER TABLE `quydinhcauthu` DISABLE KEYS */;
INSERT INTO `quydinhcauthu` (`idQDCT`, `idMG`, `TuoiToiThieu`, `TuoiToiDa`, `SLToiThieu`, `SLToiDa`, `SLNuocNgoai`, `created_at`, `updated_at`) VALUES
	(1, 1, 16, 40, 15, 22, 3, NULL, NULL);
/*!40000 ALTER TABLE `quydinhcauthu` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.quydinhdiemso
CREATE TABLE IF NOT EXISTS `quydinhdiemso` (
  `idQUYDINHDIEMSO` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idMG` int(10) unsigned NOT NULL,
  `DiemThang` int(11) NOT NULL,
  `DiemHoa` int(11) NOT NULL,
  `DiemThua` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idQUYDINHDIEMSO`),
  KEY `quydinhdiemso_idmg_foreign` (`idMG`),
  CONSTRAINT `quydinhdiemso_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.quydinhdiemso: ~0 rows (approximately)
DELETE FROM `quydinhdiemso`;
/*!40000 ALTER TABLE `quydinhdiemso` DISABLE KEYS */;
INSERT INTO `quydinhdiemso` (`idQUYDINHDIEMSO`, `idMG`, `DiemThang`, `DiemHoa`, `DiemThua`, `created_at`, `updated_at`) VALUES
	(1, 1, 3, 1, 0, NULL, NULL);
/*!40000 ALTER TABLE `quydinhdiemso` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.totrongtai
CREATE TABLE IF NOT EXISTS `totrongtai` (
  `idToTT` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idTT` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idToTT`,`idTT`) USING BTREE,
  KEY `FK_totrongtai_trongtai` (`idTT`),
  CONSTRAINT `FK_totrongtai_trongtai` FOREIGN KEY (`idTT`) REFERENCES `trongtai` (`idTT`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.totrongtai: ~4 rows (approximately)
DELETE FROM `totrongtai`;
/*!40000 ALTER TABLE `totrongtai` DISABLE KEYS */;
INSERT INTO `totrongtai` (`idToTT`, `idTT`, `created_at`, `updated_at`) VALUES
	(1, 1, NULL, NULL),
	(1, 2, NULL, NULL),
	(1, 3, NULL, NULL),
	(2, 1, NULL, NULL);
/*!40000 ALTER TABLE `totrongtai` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.trandau
CREATE TABLE IF NOT EXISTS `trandau` (
  `idTD` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `VongDau` int(11) NOT NULL,
  `Doi1` int(10) unsigned NOT NULL,
  `Doi2` int(10) unsigned NOT NULL,
  `SanDau` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ThoiGian` datetime NOT NULL,
  `idMG` int(10) unsigned NOT NULL,
  `idToTT` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idTD`),
  KEY `trandau_doi1_foreign` (`Doi1`),
  KEY `trandau_doi2_foreign` (`Doi2`),
  KEY `trandau_idmg_foreign` (`idMG`),
  KEY `trandau_idtott_foreign` (`idToTT`),
  CONSTRAINT `trandau_doi1_foreign` FOREIGN KEY (`Doi1`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `trandau_doi2_foreign` FOREIGN KEY (`Doi2`) REFERENCES `clb` (`idCLB`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `trandau_idmg_foreign` FOREIGN KEY (`idMG`) REFERENCES `muagiai` (`idMG`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `trandau_idtott_foreign` FOREIGN KEY (`idToTT`) REFERENCES `totrongtai` (`idToTT`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.trandau: ~0 rows (approximately)
DELETE FROM `trandau`;
/*!40000 ALTER TABLE `trandau` DISABLE KEYS */;
/*!40000 ALTER TABLE `trandau` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.trongtai
CREATE TABLE IF NOT EXISTS `trongtai` (
  `idTT` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `TenTT` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `ViTri` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `AnhDaiDien` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idTT`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.trongtai: ~3 rows (approximately)
DELETE FROM `trongtai`;
/*!40000 ALTER TABLE `trongtai` DISABLE KEYS */;
INSERT INTO `trongtai` (`idTT`, `TenTT`, `NgaySinh`, `ViTri`, `AnhDaiDien`, `created_at`, `updated_at`) VALUES
	(1, 'L?? V??n Vi???t', '1967-02-03', 'Tr???ng T??i Ch??nh', 'TT_LeVanViet', NULL, NULL),
	(2, 'Ng?? V??n H??ng', '1968-12-03', 'Tr???ng T??i Bi??n ', 'TT_NgoVanHung', NULL, NULL),
	(3, 'Nguy???n Vi???t L??m', '1965-03-07', 'Tr???ng T??i Bi??n', 'TT_NguyenVietLam', NULL, NULL);
/*!40000 ALTER TABLE `trongtai` ENABLE KEYS */;

-- Dumping structure for procedure giaibd_vdqg.update_BXH_CLB
DELIMITER //
CREATE PROCEDURE `update_BXH_CLB`(
	IN `ID_CLB ` INT
)
begin
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
    
end//
DELIMITER ;

-- Dumping structure for procedure giaibd_vdqg.update_BXH_CT_TEST
DELIMITER //
CREATE PROCEDURE `update_BXH_CT_TEST`(
	IN `ID_CLB` INT
)
begin
    select count(*) from trandau;
end//
DELIMITER ;

-- Dumping structure for table giaibd_vdqg.users
CREATE TABLE IF NOT EXISTS `users` (
  `UID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Role` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`UID`),
  UNIQUE KEY `user_email_unique` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.users: ~3 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`UID`, `username`, `email`, `email_verified_at`, `password`, `remember_token`, `Role`, `created_at`, `updated_at`) VALUES
	(1, 'quochuy2311', 'ab@gmail.com', NULL, '$2y$10$KCi6Qzo.p/qmXn8t/U5BBetMM7mQAU1uRsCo2Kz0E/5TiA.wApSQe', NULL, 0, '2021-11-26 23:36:27', '2021-11-27 00:02:13'),
	(3, 'huy', 'test@gmail.com', NULL, '$2y$10$Qc840bc62BBylk.DMn1cXut1Rnqu8ktRgI7NgpEDNhSs1L.yD1Gnq', NULL, 1, '2021-11-27 00:42:01', '2021-11-27 00:42:01'),
	(4, 'huy', 'huy@gmail.com', NULL, '$2y$10$U1kzYTWSM1c5b9WesCcbAOynb880weNWD95.jnaZ4a.LTDsF5dbCy', NULL, 0, '2021-11-27 00:58:58', '2021-11-27 00:58:58');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table giaibd_vdqg.xuphat
CREATE TABLE IF NOT EXISTS `xuphat` (
  `idXP` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idKQ` int(10) unsigned NOT NULL,
  `idCT` int(10) unsigned NOT NULL,
  `LoaiThe` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ThoiDiem` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idXP`),
  KEY `xuphat_idkq_foreign` (`idKQ`),
  KEY `xuphat_idct_foreign` (`idCT`),
  CONSTRAINT `xuphat_idct_foreign` FOREIGN KEY (`idCT`) REFERENCES `cauthu` (`idCT`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `xuphat_idkq_foreign` FOREIGN KEY (`idKQ`) REFERENCES `ketqua` (`idKQ`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table giaibd_vdqg.xuphat: ~0 rows (approximately)
DELETE FROM `xuphat`;
/*!40000 ALTER TABLE `xuphat` DISABLE KEYS */;
/*!40000 ALTER TABLE `xuphat` ENABLE KEYS */;

-- Dumping structure for trigger giaibd_vdqg.cauthu_BEFORE_INSERT_TUOI_CT
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
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
    -- ?????t id b???ng null ????? ng???t insert
    SET NEW.idCT = NULL;
	END IF;
    
    SELECT COUNT(*) into SL FROM cauthu;
    if(SL > SLTD) then
    set NEW.idCT = NULL;
    end if;
    
    select count(*) into SLnn from cauthu where LoaiCauThu = 'ngo??i n?????c' and idCLB = new.idCLB;
    IF (SLNN >= SLNNTD) THEN
    -- ?????t id b???ng null ????? ng???t insert
    SET NEW.idCT = NULL;
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for trigger giaibd_vdqg.ghiban_AFTER_INSERT
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `ghiban_AFTER_INSERT` AFTER INSERT ON `ghiban` FOR EACH ROW BEGIN
	call insert_update_BXH_CT ();
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for trigger giaibd_vdqg.ghiban_AFTER_UPDATE
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `ghiban_AFTER_UPDATE` AFTER UPDATE ON `ghiban` FOR EACH ROW BEGIN
	call insert_update_BXH_CT ();
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for trigger giaibd_vdqg.quydinhdiemso_AFTER_UPDATE
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `quydinhdiemso_AFTER_UPDATE` AFTER UPDATE ON `quydinhdiemso` FOR EACH ROW BEGIN
	call update_BXH_CLB(1);
	call update_BXH_CLB(2);
	call update_BXH_CLB(3);
	call update_BXH_CLB(4);
	call update_BXH_CLB(5);
	call update_BXH_CLB(6);
	call update_BXH_CLB(7);
	call update_BXH_CLB(8);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
