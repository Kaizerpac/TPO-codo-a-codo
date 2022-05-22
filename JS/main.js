
document.getElementById("header").innerHTML = `
    <h1>Inver Easy</h1>
        <nav>
            <span1 class="izq">
                <a href="index.html"><i class="fa-solid fa-fire fa-xl"></i></a>
            </span1>
            <span2 class="der">
                <a class="navsup" href="index.html">Principal</a>
                <a class="navsup" href="contactos.html">Contactos</a>
                <a class="navsup" href="servicios.html">Servicios</a>
                <a class="navsup" href="productos.html">Productos</a>
                <a class="navsup" href="sugerencias.html">Sugerencias</a>
            </span>
        </nav>
        `
document.getElementById("footer").innerHTML = `
    <nav>
        <a href="https://www.twitter.com"><i class="fa-brands fa-twitter fa-lg "></i></a>
        <a href="https://www.whatsapp.com"><i class="fa-brands fa-autoprefixer fa-lg"></i></a>
        <a href="https://www.facebook.com"><i class="fa-brands fa-facebook fa-lg"></i></a>
    </nav>
        <span text-aline: center>Derechos Reservados 2022</span>
        `
function validar() {
    let nombre, apellido, comment;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    comment = document.getElementById("comment").value;

    if (nombre === "" & apellido === "" & comment === "") {
        alert("campos vacios");
        return false;
    } else if (nombre.length > 20) {
        alert("datos excedidos")
    }else if (apellido.length > 20) {
    alert("datos excedidos")
}else if (comment.length > 200) {
    alert("datos excedidos")
}
} 