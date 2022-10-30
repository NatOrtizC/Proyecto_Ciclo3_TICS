-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.9.1-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para ciber_crm
CREATE DATABASE IF NOT EXISTS `ciber_crm` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `ciber_crm`;

-- Volcando datos para la tabla ciber_crm.producto: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` (`id`, `nombre`, `tipo`, `proveedor`, `volumen`, `tiempo`, `imagen`, `descripcion`) VALUES
	(1, 'Camara exteriores', 'Producto', 'Samsung', 3, 0, './img/productos/camext.jpg', 'Esta cámara sirve para vigilar a los alrededores de su domicilio. '),
	(2, 'Sensor de movimiento', 'Producto', 'General Electric', 9, 1, './img/productos/alarm.jpg', 'Este producto detecta movimiento cuando pasa una persona por el lugar donde se ubique el sensor. '),
	(3, 'Asesoria general', 'Servicio', 'Ciber CRM', 1, 0, './img/productos/asesoria.png', 'Esta asesoría es para aclara dudas, recomendando nuestros mejores productos debido a la necesidad del cliente. '),
	(4, 'Vigilante', 'Servicio', 'Ciber CRM', 1, 0, './img/productos/antivi.png', 'El sistema vigilante es un servicio tipo antivirus, que evita el ingreso de virus a los equipos que el cliente le instale este servicio. '),
	(5, 'Detector láser dual', 'Producto', 'General electric', 6, 1, './img/productos/senmov2.jpg', 'Este dector es un sensor de haz de alarma para interiores y exteriores, este detector infrarrojo fotoeléctrico de dos haces ABT - 196.9 ft. '),
	(6, 'Camara interiores', 'Producto', 'Samsung', 9, 0, './img/productos/camint.jpg', 'Esta cámara sirve para vigilar el interior de su domicilio.'),
	(7, 'Camara detector placa vehicular', 'Producto', 'Samsung', 3, 0, './img/productos/cam_ve.jpg', 'Esta cámara detecta la placa de su vehículo, ya sea moto o carro. '),
	(8, 'Auditoria', 'Auditoria', 'Ciber CRM', 4, 0, './img/productos/auditor.png', 'Está auditoria trata de revisión de equipos que están funcionando en mal estado o que contienen virus, con el fin de eliminar los virus contenido y dejar estos equipos en opimás condiciones. '),
	(10, 'Consola controlador', 'Producto', 'General Electyric', 3, 0, './img/productos/consola.jpg', 'Esta consola es para los DJ, con conexión Bluetooth a la App We DJ, la cual instalas en Android, iOS. Compatible con varias aplicaciones y soportes de transmisión. ');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;

-- Volcando datos para la tabla ciber_crm.registro: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `registro` DISABLE KEYS */;
INSERT INTO `registro` (`id`, `username`, `fecha`) VALUES
	(1, 'Edwin', '2022-10-02 18:06:01'),
	(1, 'Nataly', '2022-09-30 20:11:24'),
	(2, 'Edwin', '2022-10-02 18:05:54'),
	(3, 'Edwin', '2022-10-02 18:06:06'),
	(4, 'Edwin', '2022-10-02 18:06:14'),
	(6, 'Edwin', '2022-10-02 18:06:21'),
	(7, 'Edwin', '2022-10-02 18:06:28');
/*!40000 ALTER TABLE `registro` ENABLE KEYS */;

-- Volcando datos para la tabla ciber_crm.usuario: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`username`, `contrasena`, `nombre`, `apellidos`, `email`, `saldo`, `premium`) VALUES
	('Edwin', '888', 'Edwind', 'Villamizar', 'EdwindV@gmail.com', 889.20, 1),
	('nataly', '000', 'nataly', 'nataly', 'nataly', 498.20, 1),
	('OliverM', '111', 'Oliver', 'Moreno', 'cuidadointangible@gmail.com', 200.00, 1),
	('Sofi', '000', 'Sofi', 'Sofi', 'Sofi', 400.00, 0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
