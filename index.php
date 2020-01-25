<!DOCTYPE html>
<html lang="it">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=11">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/css/bootstrap.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="lib/math.js"></script>
<?php if (isset($_GET['js'])) { 
    foreach ($_GET as $k => $v) $_GET[$k] = urldecode($v); ?>
	<script src="problems/<?php echo $_GET['js'].'.js'?>"></script>
	<script type="text/javascript">
	$(document).ready(function(){
		$('#<?php echo $_GET['js']?>').val('<?php echo $_GET['p']?>');
		$('#<?php echo $_GET['js']?>_res').html(main(<?php echo $_GET['p']?>));
	});
	</script>

<?php } ?>
</head>
<body>
<div class="container" id="container_all">
<h3 class="text-center">Project Euler</h3>
<h4 class="text-center">@Guido Canella 2020</h4>
<table>
<?php 
$files = scandir('problems');
for ($i = 2; $i < count($files); $i++) {
    $filename = explode('.', $files[$i])[0];
    ?>
    <tr>
    <td><?php echo $filename; ?></td>
    <td><input type="text" id="<?php echo $filename?>"></td>
    <td><button onclick="location.href='index.php?js=<?php echo urlencode($filename)?>&p='+encodeURI($('#<?php echo $filename?>').val())">=></button></td>
    <td id='<?php echo $filename?>_res'></td>	
    </tr>
    <?php 
}
?>
</table>
</div>
</body>
</html>
