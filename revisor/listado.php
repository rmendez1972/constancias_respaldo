<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Buscador de revisores</title>
<script>
function ponPrefijo(nombre,id) {
	window.opener.document.formulario.id_revisor.value = id;
	window.opener.document.formulario.revisor.value = nombre;
	window.close()
}
</script>
<link href="../css/main.css" rel="stylesheet" type="text/css" />
<script src="../libreria/jquery-1.7.js"></script>
</head>
<?PHP  
include ("../libreria/config.php");
include ("../libreria/libreria.php");
	$conexion=conectarDB($Servidor,$UsrMysql,$ClaveMysql,$DB);
	mysql_query("set names 'utf8'",$conexion);

	if (!isset($_POST['nombre']) && isset($_GET['nombre'])) $_POST['nombre']=$_GET['nombre'];
	if (isset($_POST['anio'])) $_GET['anio']=$_POST['anio'];

?>
<body onLoad="Javascript: document.buscar.nombre.focus();">
<form action="<?PHP  echo $_SERVER['PHP_SELF']; ?>" name="buscar" method="post">
   <table border="0" cellpadding="2" align="center" class="tablaDatos">
      <tr class="tituTab">
	    <td colspan="2" class="primeralinea" align="center">
		  Buscador de revisores</td>
	  </tr>
      <tr class="fuente2">
	    <td width="30%" class="segundalinea" >
		  Nombre:</td>
		<td width="70%" class="segundalinea" >
		   <input type="text" name="nombre" maxlength="100" size="40" value="<?PHP  if (isset($_POST['nombre'])) echo $_POST['nombre'] ?>">		</td>
	  </tr >
	  <tr>
	    <td height="52" colspan="2" align="center" class="segundalinea" ><INPUT TYPE="image" style=" vertical-align:middle;  border:0 hidden "  src= "../images/buscar1.png"  border=0 hspace=7 vspace=4 alt="Buscar revisor" >
	    
		  <input name="anio" type="hidden" value="<?PHP  echo $_GET['anio'] ?>"></td>
     </tr>
  </table>  
   
  <div style="text-align:center; color:#999; font-size:11px">*NOTA: para agregar un revisor, tiene que agregar un usuario con perfil de revisor</div>
</form>

<?PHP    
$consulta0 = "select * from cat_usuario WHERE id_perfil=3 AND estatus=1";
if (isset($_POST['nombre'])){
//	if (!isset($_POST['nombre'])) $_POST['nombre']=$_GET['nombre'];
	$consulta0 .= " AND nombre like '%".$_POST['nombre']."%'";
}
	//echo $consulta0;
$resultado0 = mysql_query($consulta0, $conexion);
$filas=mysql_num_rows($resultado0);
$enlaces=$filas;
if (isset($_GET['numi']))
	$numi=$_GET['numi'];
if (empty($numi)) { $numi=0; }
	 $consulta0.=" ORDER BY nombre";
	 $consulta0.=" limit $numi,10";
	 //echo $consulta0;
	 $resultado0 = mysql_query($consulta0, $conexion);
	$filas=mysql_num_rows($resultado0);
	if (empty($filas)) { print "<center>No hay revisores con esas caracter&iacute;sticas.</center><br>"; } else { ?>
 
<br />
<table align="center" class="tablaDatos">
  <tr class="tituTab"> 
    <td class="primeralinea">Revisores</td>
    <td class="primeralinea">Doctos en revisi&oacute;n</td>
  </tr>
  <?PHP  while ($lafila=mysql_fetch_array($resultado0)) { ?>
  <tr> 
    <td class="segundalinea"><a href="#" onClick="ponPrefijo('<?PHP  echo $lafila["nombre"]; ?>','<?PHP  echo $lafila["login"]; ?>')"><?PHP  echo $lafila["nombre"]; ?></a></td>
    <td class="segundalinea" align="center"><?PHP  
		$consulta= "SELECT COUNT(id_solicitud) 
					FROM `solicitud_revisor` 
					WHERE anio=".$_GET['anio']." AND id_revisor='".$lafila["login"]."'
					AND estado='0'";

		$sql_datos=mysql_query($consulta,$conexion) or die ("La consulta:<br>".$consulta."<br>No se realiz&oacute; correctamente.<br>Copie la sentencia y consulte con el administrador del sistema");
		$cantidad= mysql_result($sql_datos,0);
		echo $cantidad;
	
	?></td>
  </tr>
  <?PHP  } ?>
</table>
<?PHP  } 
  if ($enlaces>10) {
  $i=0;
  $j=1; 
  print "<center><font size=2 face='Verdana, Arial, Helvetica, sans-serif'>Páginas: ";
  while ($i<$enlaces) { ?>
      <a href="listado.php?numi=<?PHP  echo $i; if (isset($_POST['nombre'])) echo "&nombre=".$_POST['nombre']; if (isset($_GET['anio'])) echo "&anio=".$_GET['anio']; ?>"><?PHP  echo $j; ?></a>
 <?PHP  $j++; 
 $i=$i+10; }
 }
 @mysql_free_result($resultado0);
  ?>
  <div align="center">
    <label>
    <img src="../images/cerrarventana1.png" style=" vertical-align:middle;" alt="Cerrar ventana" onClick="window.close();"/>    </label>
  </div>
<p align="center">&nbsp;</p>
</body>
</html>