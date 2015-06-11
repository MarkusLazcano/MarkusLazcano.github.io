-- 
-- Editor SQL for DB table usuarios
-- Created by http://editor.datatables.net/generator
-- 

CREATE TABLE `usuarios` (
	`id` int(10) NOT NULL auto_increment,
	`nombre` varchar(255),
	`apelllido` varchar(255),
	`direccion` varchar(255),
	`telefono` varchar(255),
	`correo` varchar(255),
	`password` varchar(255),
	PRIMARY KEY( `id` )
);