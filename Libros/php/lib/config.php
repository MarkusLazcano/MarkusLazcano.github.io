<?php if (!defined('DATATABLES')) exit(); // Ensure being used in DataTables env.

/*
 * DB connection script for Editor
 * Created by http://editor.datatables.net/generator
 */

// Enable error reporting for debugging (remove for production)
error_reporting(E_ALL);
ini_set('display_errors', '1');

/*
 * Edit the following with your database connection options
 */
$sql_details = array(
	"type" => "Mysql",
	"user" => "pw",
	"pass" => "pw",
	"host" => "localhost",
	"port" => "",
	"db"   => "vlibros",
	"dsn"  => "charset=utf8"
);
