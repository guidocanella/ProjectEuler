<!DOCTYPE html>
<html lang="it">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=11">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/css/bootstrap.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<body>
<div class="container" id="container_all">
<h3 class="text-center">Project Euler</h3>
<h4 class="text-center">@Guido Canella 2020</h4>
<form method="post">
<table>
<?php 
$files = scandir('problems');
for ($i = 2; $i < count($files); $i++) {
    ?>
    <tr>
    <td><?php echo $files[$i] ?></td>
    <td><input type="text" name="param"></td>
    <td><input type="submit" name="Go" value="<?php echo $filename?>"></td>
    </tr>
    <?php 
}
?>
</table>
</form>

</div>
</body>
</html>
