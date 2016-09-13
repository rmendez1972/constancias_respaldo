<?PHP 

define('FPDF_FONTPATH','../font/');

require('../libreria/fpdf.php');
include ("../libreria/config.php"); 
class PDF extends FPDF
{

	//Encabezado
	function Header()
	{
	
		//Logo
		$this->Image('../images/LogoQRoo.jpg',10,10,45,20);
		$this->Image('../images/SloganQroo.jpg',162,10,45,20);
	
		$this->SetFont('Arial','B',10);
	
		// titulo
/*		$this->MultiCell(197,6,"GOBIERNO DEL ESTADO DE QUINTANA ROO",0,'C',0);
		$this->MultiCell(197,6,"SECRETAR�A DE DESARROLLO URBANO",0,'C',0);
		$this->SetFont('Arial','',9);
		$this->MultiCell(197,6,"SUBSECRETAR�A DE DESARROLLO URBANO Y VIVIENDA",0,'C',0);
		$this->MultiCell(197,6,"DIRECCI�N DE ADMINISTRACI�N URBANA",0,'C',0);
	*/	
		$this->MultiCell(197,5,"Gobierno del Estado de Quintana Roo",0,'C',0);
		$this->MultiCell(197,5,"Secretar�a de Desarrollo Urbano",0,'C',0);
		$this->MultiCell(197,5,"Subsecretar�a de Desarrollo Urbano y Vivienda",0,'C',0);
		$this->MultiCell(197,5,"DIRECCI�N DE ADMINISTRACI�N URBANA",0,'C',0);
		$this->SetFont('Arial','',8);
		$this->MultiCell(197,4,"Av. Efra�n Aguilar No. 418 entre Dimas Sansores y Retorno 3, Chetumal, Quintana Roo",0,'C',0);
		$this->MultiCell(197,4,"Tel. (01-983 83 24108, 1293317, 1293318 Ext. 137)  sduyv@qroo.gob.mx",0,'C',0);
		//$this->MultiCell(197,4,"",0,'C',0);
		$this->SetFont('Arial','B',9);
		$this->Ln(5);
		$this->MultiCell(197,5,"CONSTANCIA DE COMPATIBILIDAD URBAN�STICA ESTATAL",0,'C',0);
		

//		$this->Ln(10);
	
		$this->SetFillColor(213,217,214);
		$this->SetTextColor(0);
		$this->SetDrawColor(128,128,128);
		$this->SetLineWidth(.3);
		$this->SetFont('Arial','',9);

		
	}	//Fin del header
	
	
	
	//Page footer

	//Pie de p�gina	
	function Footer()
	{
	
		$this->SetY(-15);
		$this->SetFont('Arial','I',8);
		$this->Cell(0,10,'P�gina '.$this->PageNo().'/{nb}',0,0,'C');
		
		$this->SetX(10);
		$this->SetFont('Arial','',6);
		$this->Cell(0,10,'Sistema de Control de Constancias de Compatibilidad Urban�stica',0,0,'L');
		$this->SetFont('Arial','',6);
		$this->Cell(0,10,'Fecha de impresion: '.date('Y-m-d  g:i a'),0,0,'R');
	
	}	//Fin del Footer


function FancyTable($Servidor,$UsrMysql,$ClaveMysql,$DB)
{

    $this->SetFillColor(213,217,214);
  	$this->SetTextColor(0);
	$this->SetDrawColor(128,128,128);
    $this->SetLineWidth(.3);
	$this->SetFont('Arial','',9);

	$conexion=mysql_connect($Servidor,$UsrMysql,$ClaveMysql);
	$base=mysql_select_db($DB,$conexion);


		$w=array(30,30,80,80,40);
		$this->SetWidths($w,array('C','C','J','J','J'),5,1);

		//mb_internal_encoding("UTF-8");

		$consulta= "SELECT s.*, tp.descripcion AS tipo_proyecto, tp.abreviatura, cm.descripcion AS municipio 
					FROM`solicitud` s, cat_tipo_proy tp, cat_municipios cm 
					WHERE id_tipo=id_proyecto1 AND s.id_municipio=cm.id_municipio
						AND anio=".$_GET['anio']."";

		$consulta.= " AND s.id_solicitud=".$_GET['id_solicitud'];

		$resultado=mysql_query($consulta,$conexion) or die ("La consulta:<br>".$consulta."<br>No se realiz� correctamente.<br>Copie la sentencia y consulte con el administrador del sistema");

		
		while($datos= mysql_fetch_array($resultado)){
			$this->SetFont('Arial','B',9);
			$this->MultiCell(197,5,$datos['tipo_proyecto'],0,'C',0);
			$this->SetFont('Arial','',8);

			$meses= array("","ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE");
			$mes=(int) strftime("%m",strtotime($datos["fecha_ingreso"]));
			$fecha="CHETUMAL, QUINTANA ROO A ".strftime("%d",strtotime($datos["fecha_ingreso"]))." DE ".$meses[$mes]." DEL ".strftime("%Y",strtotime($datos["fecha_ingreso"]));
			$this->Ln(5);
			$this->MultiCell(197,6,$fecha,0,'R',0);
//			$this->Ln(10);
			$this->SetFont('Arial','B',9);
		    $this->MultiCell(197,6,"Ficha No. ".$_GET['id_solicitud']."/".$_GET['abreviatura']."/".$_GET['anio'],0,'C',1);
			$this->SetFont('Arial','',8);
			$this->Ln(5);
	
			$this->Cell(30,6,"PROPIETARIO:",0,0,'L',0);
			$this->MultiCell(167,6,$datos['propietario'],'B','J',0);
			$this->Cell(30,6,"TR�MITE:",0,0,'L',0);
			$this->MultiCell(167,6,$datos["nombre_proyecto"],'B','J',0);			
			$this->Cell(30,6,"DIRECCI�N:",0,0,'L',0);
			$this->MultiCell(167,6,$datos["direccion"],'B','J',0);			
			$this->Cell(30,6,"MUNICIPIO:",0,0,'L',0);
			$this->MultiCell(167,6,utf8_decode($datos["municipio"]),'B','J',0);			
			
			if ($datos['id_localidad']!=0){
					$consulta= "select * from cat_localidades WHERE id_municipio=".$datos['id_municipio']." AND id_localidad=".$datos['id_localidad'];

					$resultado=mysql_query($consulta,$conexion) or die ("La consulta:<br>".$consulta."<br>No se realiz&oacute; correctamente.<br>Copie la sentencia y consulte con el administrador del sistema");
					$localidad= mysql_fetch_array($resultado);
					//echo strtoupper($localidad['descripcion']);
					
					$this->Cell(30,6,"LOCALIDAD:",0,0,'L',0);
					$this->MultiCell(167,6,strtoupper($localidad['descripcion']),'B','J',0);					
			}

			$consulta= "select * from solicitantes s, cat_tipo_solicitantes t WHERE s.id_tipo=t.id_tipo AND id_solicitud=".$datos['id_solicitud']." AND anio=".$datos['anio'];

			$sql_solicitante=mysql_query($consulta,$conexion) or die ("La consulta:<br>".$consulta."<br>No se realiz&oacute; correctamente.<br>Copie la sentencia y consulte con el administrador del sistema");
			$data_solicitante="";
			while($solicitantes= mysql_fetch_array($sql_solicitante)){
				if ($data_solicitante!="") $data_solicitante.="\n";
				$data_solicitante.=$solicitantes['descripcion'].": ".$solicitantes['nombre'];
				if ($solicitantes['telefono']!="")
					$data_solicitante.=", TEL. ".$solicitantes['telefono'];
				if ($solicitantes['celular']!="")
					$data_solicitante.=", CEL. ".$solicitantes['celular'];
				if ($solicitantes['correo']!="")
					$data_solicitante.=", CORREO: ".$solicitantes['correo'];

			}
			mysql_free_result($sql_solicitante);	
			$this->Cell(30,5,"SOLICITANTE",0,0,'L',0);
			$this->MultiCell(167,5,$data_solicitante,'B','J',0);			

			if ($datos["observaciones"]!=""){
				$this->Cell(30,5,"OBSERVACIONES:",0,0,'L',0);
				$this->MultiCell(167,5,$datos["observaciones"],'B','J',0);			
			}

	$this->Ln(4);
		
		$consulta= "select * from cat_requisitos r, doctos d WHERE r.id_requisito=d.id_requisito AND id_solicitud=".$datos['id_solicitud']." AND anio=".$datos['anio'];

		$sql_req=mysql_query($consulta,$conexion) or die ("La consulta:<br>".$consulta."<br>No se realiz&oacute; correctamente.<br>Copie la sentencia y consulte con el administrador del sistema");
			
			$w=array(30,167);
			$this->SetFont('Arial','B',8);
			$this->SetWidths($w,array('C','C'),5,1);
			$this->Row(array("ENTREG�","DOCUMENTO"),array(1,1,1,1,1));
			$this->SetWidths($w,array('C','J'),4,1);
			$this->SetFont('Arial','',7);
			while($requisitos= mysql_fetch_array($sql_req)){
				$this->Row(array($requisitos['entrego'],$requisitos['descripcion']),array(0));
			}
		
			$this->Ln(4);
			$w=array(130,67);
			$this->SetWidths($w,array('C','C'),4,0);
			$this->Row(array("","Recibi�"),array(0));
			$this->Ln(4);
			$consulta= "SELECT * FROM cat_usuario WHERE login='".$datos['login']."'";
			$sql_user=mysql_query($consulta,$conexion) or die ("La consulta:<br>".$consulta."<br>No se realiz� correctamente.<br>Copie la sentencia y consulte con el administrador del sistema");
			$usuario= mysql_fetch_array($sql_user);
			$this->Row(array("",$usuario['nombre']." ".$usuario['apellido_paterno']." ".$usuario['apellido_materno']),array(0));
			$this->Row(array("","Departamento de Control T�cnico"),array(0));


		}
		mysql_free_result($resultado);	
		
		
	$this->Ln(4);


	$pie="*En cumplimiento a lo previsto por el art�culo 33, fracci�n III de la ley de Transparencia y Acceso a la Informaci�n P�blica del Estado de Quintana Roo, se le informa que el prop�sito de recabar sus datos personales se circunscribe �nica y exclusivamente a contar con la informaci�n que se�ala el art�culo 51 de la citada ley, para atender y dar seguimiento a la solicitud.";
	$this->MultiCell(197,4,$pie,0,'J',0);			

	
	mysql_close($conexion);
	
} // fin del function
}// fin del class

//Page header
//Instanciation of inherited class
$pdf=new PDF("P","mm","Letter");
$pdf->Open();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->FancyTable($Servidor,$UsrMysql,$ClaveMysql,$DB);
$pdf->Output();

?> 


