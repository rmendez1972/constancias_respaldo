<?PHP 

		$requiredUserLevel = array(1,2);

		$cfgProgDir =  '../';

		include("../seguridad/secure.php");

		include ("../libreria/config.php");
		
		include ("../libreria/libreria.php");



	$conexion=conectarDB($Servidor,$UsrMysql,$ClaveMysql,$DB);
mysql_query("set names 'utf8'",$conexion);
?>




<?PHP 
if (isset($_GET['accion']) && ($_GET['accion']=="eliminar") && isset($_GET['id_solicitante'])){
		$consulta= "DELETE from solicitantes WHERE id_solicitante=".$_GET['id_solicitante']." AND id_solicitud=".$_GET['id_solicitud']." AND anio=".$_GET['anio'];

		mysql_query($consulta,$conexion) or die ("La consulta:<br>".$consulta."<br>No se realiz&oacute; correctamente.<br>Copie la sentencia y consulte con el administrador del sistema");
}
// Si no ha sido enviado algo

if (isset($_GET['id_solicitud']) ){

		$consulta= "SELECT * 
					FROM`solicitud` s, cat_tipo_proy tp 
					WHERE id_tipo=id_proyecto1 
						AND anio=".$_GET['anio']." AND id_solicitud='".$_GET['id_solicitud']."'";

		$sql_datos=mysql_query($consulta,$conexion) or die ("La consulta:<br>".$consulta."<br>No se realiz&oacute; correctamente.<br>Copie la sentencia y consulte con el administrador del sistema");
		$datos=mysql_fetch_array($sql_datos);

?>
<script language="javascript" >
function envia(){
		document.forms.formulario.ingresar.value="OK";
		document.forms.formulario.submit( );
}
</script>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<link href="../css/main.css" rel="stylesheet" type="text/css" />
<script src="../libreria/jquery-1.7.js"></script>
<script src="../libreria/ajuste.js"></script>
<style>
body{
	margin:20px;
	margin-top:15px;	
}
.tablaDatos tr td{
	font-size:11px;	
}
</style>
</head>

<body onLoad="ajustar()">
<form name="formulario" method="post" action="<?PHP  echo $_SERVER['PHP_SELF'] ?>">

  <input name="ingresar" type="hidden" />
  <input name="anio" type="hidden" value="<?PHP  echo $datos['anio'] ?>" />
  <input name="id_solicitud" type="hidden" value="<?PHP  echo $datos['id_solicitud'] ?>" />
  <input name="id_proyecto" type="hidden" value="<?PHP  echo $datos['id_proyecto1'] ?>" />
  <div class="tituSec">Capturar Solicitud de Constancia</div>
  <table width="95%" align="center" class="tablaDatos">
   <tr >
     <td colspan="2" class="tituTab" align="center">Datos solicitud</td>
   </tr>
   <tr >
     <td class="segundalinea">Ficha No. </td>
     <td class="segundalinea" ><?PHP  echo $datos['id_solicitud']."/".$datos['abreviatura']."/".$datos['anio']; ?>
       <img src="../images/b_edit.png" alt="Modificar datos solicitud" width="16" height="16" border="0" onClick="location.replace('editar.php<?PHP  echo "?id_solicitud=".$datos['id_solicitud']."&anio=".$datos['anio']; ?>')" class="btnOld" /><img src="../images/b_search.png" onClick="window.open('../reportes/constancia.php<?PHP  echo "?anio=".$datos['anio']."&id_solicitud=".$datos['id_solicitud']."&abreviatura=".$datos['abreviatura']; ?>')" alt="Visualizar datos solicitud" width="16" height="16" border="0" class="btnOld" /></td>
   </tr>
   <tr >
     <td class="segundalinea" > Fecha de Ingreso </td>
     <td class="segundalinea" ><?PHP  echo $datos['fecha_ingreso'] ?></td>
   </tr>
   <tr >
     <td class="segundalinea" > Tipo Proyecto</td>
     <td class="segundalinea" ><?PHP  echo $datos['descripcion'] ?></td>
   </tr>
   <tr >
     <td  class="segundalinea" > Fracciones</td>
     <td class="segundalinea" ><?PHP  echo $datos['fracciones'] ?></td>
   </tr>
   <tr >
     <td  class="segundalinea" > Viviendas</td>
     <td class="segundalinea" ><?PHP  echo $datos['num_viviendas'] ?></td>
   </tr>
   <tr >
     <td width="20%"  class="segundalinea"> Propietario</td>
     <td width="80%" class="segundalinea" ><?PHP  echo $datos['propietario'] ?></td>
   </tr>
   <tr >
     <td width="20%"  class="segundalinea"> Proyecto</td>
     <td width="80%" class="segundalinea" ><?PHP  echo $datos['nombre_proyecto'] ?></td>
   </tr>
   <tr >
     <td width="20%"  class="segundalinea">Direcci&oacute;n</td>
     <td width="80%" class="segundalinea" ><?PHP  echo $datos['direccion'] ?></td>
   </tr>
   <tr >
     <td class="segundalinea">Municipio</td>
     <td class="segundalinea" ><?PHP   $consulta= "select * from cat_municipios WHERE id_municipio=".$datos['id_municipio'];

					$resultado=mysql_query($consulta,$conexion) or die ("La consulta:<br>".$consulta."<br>No se realiz&oacute; correctamente.<br>Copie la sentencia y consulte con el administrador del sistema");
					$municipios= mysql_fetch_array($resultado);
					echo $municipios['descripcion'];

				?></td>
   </tr>
   <tr >
     <td class="segundalinea">Localidad</td>
     <td class="segundalinea" ><?PHP   if ($datos['id_localidad']!=0){
					$consulta= "select * from cat_localidades WHERE id_municipio=".$datos['id_municipio']." AND id_localidad=".$datos['id_localidad'];

					$resultado=mysql_query($consulta,$conexion) or die ("La consulta:<br>".$consulta."<br>No se realiz&oacute; correctamente.<br>Copie la sentencia y consulte con el administrador del sistema");
					$localidad= mysql_fetch_array($resultado);
					echo strtoupper($localidad['descripcion']);
				}
				?></td>
   </tr>
   <tr >
     <td  class="segundalinea" > Superficie</td>
     <td class="segundalinea" ><?PHP  echo $datos['superficie'] ?></td>
   </tr>
   <tr >
     <td  class="segundalinea" >Observaciones</td>
     <td class="segundalinea" ><textarea name="observaciones" cols="70" rows="3" onBlur="javascript:this.value=this.value.toUpperCase()"></textarea></td>
   </tr>
 </table>
  <br />
 <table width="95%" align="center" class="tablaDatos">
   <tr >
     <td colspan="4" class="tituTab" align="center">Documentaci&oacute;n Entregada</td>
   </tr>
   <tr >
     <td height="25" width="40" class="primeralinea">Entreg&oacute; </td>
     <td class="primeralinea" >Requisito</td>
   </tr>
   <?PHP   
					$consulta= "select * from cat_requisitos WHERE id_requisito IN (SELECT id_requisito FROM cat_requisitos_opc WHERE id_tipo=".$datos['id_proyecto1'].")";

					$resultado=mysql_query($consulta,$conexion) or die ("La consulta:<br>".$consulta."<br>No se realiz&oacute; correctamente.<br>Copie la sentencia y consulte con el administrador del sistema");
					while($solicitantes= mysql_fetch_array($resultado)){
						echo "
						  <tr >
							<td class=\"segundalinea\">
							  <select name=\"".$solicitantes['id_requisito']."\">
							  <option value=\"SI\" selected=\"selected\">SI</option>
							  <option value=\"NO\">NO</option>
							  </select>
							</td>
							<td class=\"segundalinea\">".$solicitantes['descripcion']."</td>
						  </tr>
						";
					}
				?>
 </table>
 <br />
 <table width="50%" border="0" align="center" cellpadding="0" cellspacing="0" >
   <tr>
     <td align="center"><img src="../images/continuar1.png" class="btnOld" onMouseOver="" alt="Capturar solicitantes" onClick="envia()" /></td>
     <td align="center"><img src="../images/cancelar1.png" class="btnOld" alt="Ir a inicio" <?PHP  echo $central; ?> /></td>
   </tr>
 </table>
</form>

<?PHP 



}
if (isset($_POST['ingresar']) && $_POST['ingresar']=='OK'){
		mysql_query("BEGIN",$conexion);

		$consulta= "SELECT id_requisito FROM cat_requisitos_opc WHERE id_tipo=".$_POST['id_proyecto']."";

		$sql_req=mysql_query($consulta,$conexion);

		while($requisito=mysql_fetch_array($sql_req)){
			$consulta= "insert into doctos values (".$_POST['anio'].",".$_POST['id_solicitud'].",'".$requisito['id_requisito']."','".$_POST[$requisito['id_requisito']]."')";
			//echo $consulta."<br>";
			mysql_query($consulta,$conexion);
		}
		mysql_free_result($sql_req);
		
		$consulta= "UPDATE solicitud SET observaciones='".$_POST['observaciones']."' WHERE anio=".$_POST['anio']." AND id_solicitud=".$_POST['id_solicitud'];
		//echo $consulta."<br>";
		mysql_query($consulta,$conexion);
		
		mysql_query("COMMIT",$conexion);

	
?>
<script language="javascript">

	window.location='solicitantes.php?id_solicitud=<?PHP   echo $_POST['id_solicitud']; ?>&anio=<?PHP   echo $_POST['anio']; ?>';

</script>

<?PHP 

}	mysql_close($conexion);



?>

</body>

</html>
