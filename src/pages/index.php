<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú Principal</title>
</head>
<body>
    <a href="index.php">Inicio</a>  <a href="bookmaster.php">Libros</a>
    <h1 align = "center">Bienvenidos a la biblioteca virtual - La Asunción</h1>
    <h2>Aqui encontrarás los libros que estas buscando</h2>
    <form action="buscar.php" method="post">
        <label for="busqueda">Buscar:</label>
        <input type="text" name="busqueda" id="busqueda">
        <button type="submit">Buscar</button>
    </form>

    
</body>
</html>