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
$files1 = scandir('problems');
foreach ($files1 as $k => $filename) {
    ?>
    <p>
    <?php echo $filename ?>
    <input type="text" name="param">
    <input type="submit" name="Go" value="<?php echo $filename?>">
    </p>
    <?php 
}
?>
</table>
</form>

</div>
</body>
</html>