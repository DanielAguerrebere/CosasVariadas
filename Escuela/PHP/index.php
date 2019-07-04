<?php
	include_once 'paginacion.php';
	header("Content-Type: text/html;charset=utf-8"); 

	$articulos_pagina=15;
	$sql="SELECT id_persona,nombre,apellido,direccion FROM base_ejemplo.personas";
	$db = new db();
	$data = $db->select($sql);
	$paginas=ceil($data->num_rows/$articulos_pagina);
	if(!$data){
			echo "ERROR: Could not able to execute $sql. " ;
	}

?>
<!DOCTYPE html>
<html>
<head>

	<title>Data Table</title>

</head>
<body>
	<div>
		<h1>Personas</h1>
		<?php 
			echo $_GET['pagina'];
			echo $articulos_pagina;
			if(!$_GET){
				header('Location:index.php?pagina=1');
			}
			if($_GET['pagina']>$paginas||$_GET['pagina']<1){
				header('Location:index.php?pagina=1');
			}
			$inicio=($_GET['pagina']-1)*$articulos_pagina;
			$query="SELECT id_persona,nombre,apellido,direccion from base_ejemplo.personas limit ".$inicio.",".$articulos_pagina;
			$db = new db();
			$data = $db->select($query);
			if(!$data){
				echo "ERROR: Could not able to execute $sql. " ;
			}
			else{
				if($data->num_rows>0){
						echo "<table class=\"".'table'."\">";
							echo "<thead class=\"thead-dark\">";
            				echo "<tr>";
                				echo "<th scope=".'col'.">ID</th>";
                				echo "<th scope=".'col'.">NOMBRE</th>";
                				echo "<th scope=".'col'.">APELLIDO</th>";
                				echo "<th scope=".'col'.">DIRECCIÓN</th>";
            				echo "</tr>";
            				echo "</thead>";
            				echo "<tbody class=\"bg-warning\">";
        				while($row = $data->fetch_assoc()){
            				echo "<tr>";
                				echo "<th scope=".'row'.">" . $row['id_persona'] . "</td>";
                				echo "<td>" . $row['nombre'] . "</td>";
                				echo "<td>" . $row['apellido'] . "</td>";
                				echo "<td>" . $row['direccion'] . "</td>";
            				echo "</tr>";
        				}
        				echo "</tbody>";
        				echo "</table>";
        				$data->free();
					}
					else{
						echo "No records matching your query were found.";
					}
			}
		?>
		<nav aria-label="Page navigation example">
  			<ul>
  				<li class="page-item
    			<?php 
    				echo $_GET['pagina']>=2 ? 'active' : 'disabled' ?>
    			?>
    			">
    				<a href="index.php?pagina=1">Primera</a>
    			</li>
    			<li class="page-item
    			<?php
    				echo $_GET['pagina']<=1 ? 'disabled' : '' ?>
    			?>
    			">
    				<a href="index.php?pagina=<?php echo $_GET['pagina']-1 ?>">
    				Anterior
    				</a>
    			</li>
    			<?php for($i=0;$i<$paginas;$i++):?>
    				<li class="page-item
    				<?php 
    					echo $_GET['pagina']==$i+1 ? 'active' : '' ?>
    				?>
    				">
    					<a href="index.php?pagina=<?php echo $i+1?>">
    						<?php echo $i+1 ?>
    					</a>
    				</li>
    			<?php endfor ?>
    			<li class="page-item
    			<?php 
    				echo $_GET['pagina']>=$paginas ? 'disabled' : '' ?>
    			?>
    			">
    				<a href="index.php?pagina=<?php echo $_GET['pagina']+1 ?>">Siguiente</a>
    			</li>
    			<li class="page-item
    			<?php 
    				echo $_GET['pagina']<$paginas ? 'active' : 'disabled' ?>
    			?>
    			">
    				<a href="index.php?pagina=<?php echo $paginas ?>">
    				Última
    				</a>
    			</li>
  			</ul>
		</nav>
	</div>
</body>
</html>