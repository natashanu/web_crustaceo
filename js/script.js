INICIO_SESION = true;
CARRO_COMPRA = new Array();

//Todos los links llevan texto alternativo
//Para que sea de fácil navegación con el teclado se agrego la etiqueta tabindex

//Función que carga la página principal
function cargarPagina(){
    document.title = "Página Principal";
    $('nav a').removeClass('activo');
    contenedor.innerHTML = 
        '<header>'+
            '<h1>Crustaceo Cascarudo</h1>'+
            '<div id="banderas">'+
              '<img id="espana" alt="bandera de espanha" src="./imagenes/espana.png" title="Cambiar idioma a castellano">'+
              '<img id="portugal" alt="bandera de portugal" src="./imagenes/portugal.png" title="Cambiar idioma a portugues">'+
              '<img id="reino-unido" alt="bandera de Reino Unido" src="./imagenes/reino-unido.png" title="Cambiar idioma a ingles">'+
            '</div>'+
            '<nav>'+
                '<a alt="" id="logo" onclick="cargarPagina();" href="#" title="Ir a la página principal" tabindex="0" role="link"><img id="logo" alt="#" src="./imagenes/logo1.png"></a>'+
                '<a alt="" id="menu" onclick="cargarMenu();" href="#" role="link" tabindex="0">Carta</a>'+
                '<a alt="" id="carrito" onclick="cargarCarrito();" href="#" role="link" tabindex="0">Carrito</a>'+
                '<a alt="" id="mapa" onclick="cargarMapa();" role="link" href="#" tabindex="0">Encuentranos</a>'+
                '<a id="registrarse" alt="" onclick="cargarFormulario();" href="#" role="link" tabindex="0">Registrarse</a>'+
                '<label for="buscar"><div class="lsf-icon search"> <input id="buscar" type="search" placeholder="Buscar" role="search" tabindex="0"></div></label>' +
            '</nav>'+
        '</header>'+
        '<main id="principal">'+
        '</main>'+
        '<footer>'+
          "<div id='redes'>"+
            '<a href=""><img src="./imagenes/facebook.png"></a>'+
            '<a href=""><img src="./imagenes/instagram.png"></a>'+
            '<a href=""><img src="./imagenes/gorjeo.png"></a>'+
          "</div>"+
          '<p>©2022 Crustaceo Cascarudo Restaurant Spain. Todos los derechos reservados.</p>'+
        '</footer>';
}

//Función que carga el menú de opciones
function cargarMenu(){
    document.title = "Menu";
    esteticaEnlaces('menu');
    texto="<div id='titulo' class='titulo'>"+
    "<h2>Productos</h2>"+
    "</div><div id='categorias'>";
    for(let i=0; i<listaMenu.length;i++){
      texto += '<a id="'+ listaMenu[i]+'" href="#" onclick="mostrarMenu('+ listaMenu[i]+', \''+ listaMenu[i]+'\')" style="background-image: url(./imagenes/'+listaMenu[i]+'.jpg);" role="link" tabindex="0"></a>';
    }

    principal.innerHTML = texto;
    $('#hamburguesas').html('<h2>Hamburguesas</h2>');
    $('#bebidas').html('<h2>Bebidas</h2>');
    $('#menuInfantil').html('<h2>Menu Infantil</h2>');
    $('#complementos').html('<h2>Complementos</h2>');
}

function mostrarMenu(nombre, nom){
  console.log(nom);
  console.log(nombre);
  texto="<div id='titulo' class='titulo'>"+
  "<h2>"+ $('#'+nom).html() +"</h2>"+
  "</div><div id='menu'>";
  for(let i=0; i<nombre.length;i++){
    texto += '<div id="'+ nombre[i][0]+'"><a target="_blank" href="./imagenes/'+nombre[i][1]+'"><img src="./imagenes/'+nombre[i][1]+'" alt="'+nombre[i][0]+'"></a>'+
    '<div id="descripcion"><h2>'+nombre[i][0]+'</h2><p>'+nombre[i][2]+'<p>'+
    '<button onclick="mandaraCarrito('+nom+','+i+')">Añadir a Carrito</button></div></div><hr>';
  }
  texto+='</div>';
  principal.innerHTML = texto;
}

//Función que añade elementos al carrito si se ha iniciado sesión
function mandaraCarrito(producto, numero){
  if(INICIO_SESION == false){

  }else {
  CARRO_COMPRA.push([producto[numero]]);
  console.log(CARRO_COMPRA)
  }
}


//Función que carga el carrito de la compra
function cargarCarrito(){
    document.title = "Carrito"; 
    esteticaEnlaces('carrito');
    texto = "<div id='titulo' class='titulo'>"+
    "<h2>Carrito</h2>"+
    "</div>";
    if(INICIO_SESION == false) 
    texto+= "<p class='centrado'><img src='./imagenes/imagen_bob.jpeg'>"+
    "<br/>Lo sentimos, no podemos procesar su orden sin <a onclick='formIniSes()' alt='Iniciar sesión' role='link' tabindex='0'><b>iniciar sesión</b></p>";
    else{
      suma = 0;
      for (let i = 0; i < CARRO_COMPRA.length; i++) {
        console.log(CARRO_COMPRA[i][0][0])
            texto+= '<p>'+CARRO_COMPRA[i][0][0]+'</p><p><img src="./imagenes/'+CARRO_COMPRA[i][0][1]+'"></p>';
            
      }
    }
    principal.innerHTML = texto

}


//Función que la ubicación de la tienda
function cargarMapa(){
    document.title = "Encuentranos";
    esteticaEnlaces('mapa');
    principal.innerHTML = "<div id='titulo' class='titulo'>"+
    "<h2>Encuentranos</h2>"+
    "</div>";

}

//Función que carga un formulario para registrarse
function cargarFormulario(){
    document.title = "Iniciar sesión";
    esteticaEnlaces('registrarse');
    principal.innerHTML = 
    "<div id='titulo' class='titulo'>"+
      "<h2>Registrate</h2>"+
    "</div>" +
    "<p class='centrado'>RECIBE PROMOCIONES EXCLUSIVAS Y LAS ÚLTIMAS NOVEDADES DEL CRUSTACEO CASCARUDO</p>"+
    "<form>" +
      "<table summary='Formulario para registrarse'>" + 
        "<tr><td><label for='nombre'>Nombre*: </label></td><td><input id=nombre required></td>"+
          "<td><label for='apellidos'>Apellidos*: </label></td><td><input id=apellidos required></td></tr>"+
        "<tr><td><label for='correo'>Correo electronico*: </label></td><td><input id='correo' type='email'></td>"+
        "<td><label for='movil'>Móvil*: </label></td><td><input id='movil' type='tel' required></td></tr></tr>"+
        "<tr><td><label for='fech_nac'>Fecha de Nacimiento*: </label></td><td><input id='fech_nac' type='date' required></td>"+
        "<td><label for='cp'>Cp*: </label></td><td><input id='cp' required></td></tr> "+
        "<tr><td colspan='4'><input type='checkbox' id='pol_priv'>"+
        "<label for='pol_priv'>Consiento el uso de mis datos para los fines indicados en la política de privacidad SUS DATOS SEGUROS.</label></td></tr>"+
        "<tr><td colspan='2'><input type='reset' value='Limpiar'></td><td colspan='2'><input type='submit' value='Enviar'></td></tr>"+
      "</table>" +
    "</form>"+
    "<p class='centrado'>¿Ya tienes cuenta? <a onclick='formIniSes()' href='#' alt='Iniciar sesión' role='link' tabindex='0'> Iniciar Sesión </a>";
    
}

//Formulario de Inicio de Sesión
function formIniSes(){
  principal.innerHTML = 
  "<div id='titulo' class='titulo'>"+
    "<h2>Iniciar Sesion</h2>"+
  "</div>" +
  "<form>" +
    "<table summary='Formulario para Iniciar sesión'>" + 
        "<tr><td><label for='correo'>Correo electrónico</label></td><td><input id=correo type='email'></td></tr>"+
        "<tr><td><label for='contrasenha'>Contraseña</label></td><td><input id=contrasenha type='password'></td></tr>"+
    "</table>" +
    "</form>"+
    "<button id='Iniciar Sesion' onclick='verificar(correo.value)'>Iniciar Sesión</button>"+
    "<p class='centrado activo' id='login'></p>";
}

function verificar(correo){
    for (let i = 0; i < correosElec.length; i++) {
        if(correosElec[i]==correo){
          $('#correo, #contrasenha').val('');
           INICIO_SESION = true;
           login.innerHTML = "Ha iniciado sesión correctamente";
        }
        
    }
}

//Función que cambia el color del enlace en el que estamos ubicados
function esteticaEnlaces(enlace){
    $('nav a').removeClass('activo');
    $('#'+enlace).addClass('activo');
}

