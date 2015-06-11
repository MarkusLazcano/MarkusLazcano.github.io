
/*
 * Editor client script for DB table usuarios
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		"ajax": "php/table.usuarios.php",
		"table": "#usuarios",
		"fields": [
			{
				"label": "Nombre",
				"name": "nombre"
			},
			{
				"label": "Apellido",
				"name": "apelllido"
			},
			{
				"label": "Direccion",
				"name": "direccion"
			},
			{
				"label": "Telefono",
				"name": "telefono"
			},
			{
				"label": "Correo",
				"name": "correo"
			},
			{
				"label": "Password",
				"name": "password"
			}
		]
	} );

	$('#usuarios').DataTable( {
		"dom": "Tfrtip",
		"ajax": "php/table.usuarios.php",
		"columns": [
			{
				"data": "nombre"
			},
			{
				"data": "apelllido"
			},
			{
				"data": "direccion"
			},
			{
				"data": "telefono"
			},
			{
				"data": "correo"
			},
			{
				"data": "password"
			}
		],
		"tableTools": {
			"sRowSelect": "os",
			"aButtons": [
				{ "sExtends": "editor_create", "editor": editor },
				{ "sExtends": "editor_edit",   "editor": editor },
				{ "sExtends": "editor_remove", "editor": editor }
			]
		}
	} );
} );

}(jQuery));

