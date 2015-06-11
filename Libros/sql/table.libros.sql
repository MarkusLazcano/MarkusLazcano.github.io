-- 
-- Editor SQL for DB table libros
-- Created by http://editor.datatables.net/generator
-- 

CREATE TABLE `libros` (
	`id` int(10) NOT NULL auto_increment,
	`isbn` varchar(255),
	`titulo` varchar(255),
	`autor` varchar(255),
	`genero` varchar(255),
	`editorial` varchar(255),
	`edicion` varchar(255),
	PRIMARY KEY( `id` )
);