<?php

/*
 * Editor server script for DB table usuarios
 * Created by http://editor.datatables.net/generator
 */

// DataTables PHP library and database connection
include( "lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Join,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate;


// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'usuarios', 'id' )
	->fields(
		Field::inst( 'nombre' ),
		Field::inst( 'apelllido' ),
		Field::inst( 'direccion' ),
		Field::inst( 'telefono' ),
		Field::inst( 'correo' ),
		Field::inst( 'password' )
	)
	->process( $_POST )
	->json();
