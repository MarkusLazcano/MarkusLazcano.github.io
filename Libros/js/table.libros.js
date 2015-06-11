
/*
 * Editor client script for DB table libros
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		"ajax": "php/table.libros.php",
		"table": "#libros",
		"fields": [
			{
				"label": "ISBN",
				"name": "isbn"
			},
			{
				"label": "Titulo",
				"name": "titulo"
			},
			{
				"label": "Autor",
				"name": "autor"
			},
			{
				"label": "Genero",
				"name": "genero"
			},
			{
				"label": "Editorial",
				"name": "editorial"
			},
			{
				"label": "Edicion",
				"name": "edicion"
			}
		]
	} );

	$('#libros').DataTable( {
		"dom": "Tfrtip",
		"ajax": "php/table.libros.php",
		"columns": [
			{
				"data": "isbn"
			},
			{
				"data": "titulo"
			},
			{
				"data": "autor"
			},
			{
				"data": "genero"
			},
			{
				"data": "editorial"
			},
			{
				"data": "edicion"
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

