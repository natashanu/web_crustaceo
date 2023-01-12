/* 
  PÁGINA WEB CREADA DESDE JAVASCRIPT
  * Se utilizaron etiquetas semánticas
  * Todos los links e imagenes llevan texto alternativo
  * Para que sea de fácil navegación con el teclado se agrego la etiqueta tabindex
  * Se eligieron colores que hacen constraste entre ellos
  * Se añadieron las etiquuetas label para cada entrada de formulario
*/

INICIO_SESION =true;
CARRO_COMPRA = new Array();

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
                '<a alt="" id="logo" onclick="cargarPagina();" href="#" title="Ir a la página de novedades" tabindex="0" role="link"><img id="logo" alt="logo de pagina" src="./imagenes/logo1.png"></a>'+
                '<a alt="" id="menu" onclick="cargarMenu();" href="#" role="link" tabindex="0">Carta</a>'+
                '<a alt="" id="carrito" onclick="cargarCarrito();" href="#" role="link" tabindex="0">Carrito</a>'+
                '<a alt="" id="mapa" onclick="cargarMapa();" role="link" href="#" tabindex="0">Encuentranos</a>'+
                '<a id="registrarse" alt="" onclick="cargarFormulario();" href="#" role="link" tabindex="0">Registrarse</a>'+
                // '<form onsubmit="processSearch(event)">'+
                //   '<label for="buscar" class="lsf-icon search"></label><br>'+
                //   '<input type="text" id="buscar" name="buscar"><br>'+
                //  ' <input type="submit" value="Submit">'+
                // '</form> '+
            '<label for="buscar"><div class="lsf-icon search"> <input id="buscar" type="search" placeholder="Buscar" role="search" tabindex="0"></div></label>' +
            '</nav>'+
        '</header>'+
        '<main id="principal">'+
        '<div  id="titulo" class="titulo">'+
        '<h1>Novedades</h1>'+
        '</div>'+
        //'<h2 class="centrado">Nuevas figuras</h2>'+
        '<div id="carrusel-contenido">'+
            '<div id="carrusel-caja">'+
                '<div class="carrusel-elemento">'+
                    '<img class="imagenes" src="./imagenes/menuFeliz.jpg" >'+
                '</div>'+
                '<div class="carrusel-elemento">'+
                    '<img class="imagenes" src="imagenes/heroe1.jpg">'+
                '</div>'+
                '<div class="carrusel-elemento">'+
                    '<img class="imagenes" src="imagenes/heroe2.jpg">'+
                '</div>'+
            '</div>'+
        '</div>'+
		'<div id="cajita_feliz">'+
			'<img src="imagenes/Afiche-Juguetes-Cuadrado.jpg">'+
			'<div><h2 class="centrado">Descubre las sorpresas que trae para ti</h2>'+
			'</div>'+
		'</div>'+
        '</main>'+
        '<footer>'+
          "<div id='redes'>"+
            '<a href="https://www.facebook.com/bobesponja" target="_blank" alt="Visitar página oficial de facebook"><img src="./imagenes/facebook.png"></a>'+
            '<a href="https://www.instagram.com/bobesponja/" alt="Visitar cuenta verificada de instagram" target="_blank"><img src="./imagenes/instagram.png"></a>'+
            '<a href="https://twitter.com/bobesponja/" alt="Visitar cuenta verificada de twitter" target="_blank"><img src="./imagenes/gorjeo.png"></a>'+
          "</div>"+
          '<p>&#169; 2022 Crustaceo Cascarudo Restaurant Spain. Todos los derechos reservados.</p>'+
        '</footer>';
        
}

// function processSearch(event) {
//   event.preventDefault();
//   var searchQuery = document.getElementById('buscar').value;
// }


//Función que carga el cada categoría del menú
function cargarMenu(){
    document.title = "Menu";
    esteticaEnlaces('menu');
    texto="<div id='titulo' class='titulo'>"+
    "<h2>Productos</h2>"+
    "</div><div id='categorias'>";
    for(let i=0; i<listaMenu.length;i++){
      texto += '<a id="'+ listaMenu[i]+'" href="#" alt="'+listaMenu[i]+'" onclick="mostrarMenu('+ listaMenu[i]+', \''+ listaMenu[i]+'\')" style="background-image: url(./imagenes/'+listaMenu[i]+'.jpg);" role="link" tabindex="0"></a>';
    }

    principal.innerHTML = texto;
    $('#hamburguesas').html('<h2>Hamburguesas</h2>');
    $('#bebidas').html('<h2>Bebidas</h2>');
    $('#menuInfantil').html('<h2>Menu Infantil</h2>');
    $('#complementos').html('<h2>Complementos</h2>');
}

//Función que carga las opciones de la categoría escogida
function mostrarMenu(nombre, nom){
  // console.log(nom);
  // console.log(nombre);
  texto="<div id='titulo' class='titulo'>"+
  "<h2>"+ $('#'+nom).html() +"</h2>"+
  "</div><div id='menu'>";
  for(let i=0; i<nombre.length;i++){
    texto += '<div id="'+ nombre[i][0]+'"><a target="_blank" href="./imagenes/'+nombre[i][1]+'"><img src="./imagenes/'+nombre[i][1]+'" alt="'+nombre[i][0]+'"></a>'+
    '<div id="descripcion"><h2>'+nombre[i][0]+'</h2><p>'+nombre[i][2]+'</p>'+
    '<div id="alergenos">';
	  for(let j=0; j<nombre[i][3].length; j++){
		 texto+= '<img alt="El alergeno es '+ nombre[i][3][j] +'" src="./imagenes/alergenos/'+nombre[i][3][j]+'"/>';
	  }
	  
    texto += '</div><button onclick="mandaraCarrito('+nom+','+i+')">Añadir a Carrito ' + nombre[i][4].toFixed(2) +'€</button></div></div><hr>';
  }
  texto+='</div>';
  principal.innerHTML = texto;
}

//Función que añade elementos al carrito si se ha iniciado sesión
function mandaraCarrito(producto, numero){
  if(INICIO_SESION == false){

  }else {
  CARRO_COMPRA.push([producto[numero]]);
  // console.log(CARRO_COMPRA)
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
    texto+= "<p class='centrado'><img src='./imagenes/imagen_bob.jpeg' alt='Bob Esponja esperando' width='250px'>"+
    "<br/>Lo sentimos, no podemos procesar su orden sin <a onclick='formIniSes()' alt='Iniciar sesión' role='link' tabindex='0'><b>iniciar sesión</b></p>";
    else{
      if(CARRO_COMPRA.length == 0){
        texto += "<p class='centrado'>Su carrito se encuentra actualmente vacío<br/>"+
        "<img src='./imagenes/empleadoAtento.jpg' alt='Imagen de empleado esperando pedido' width='250px'>"+
        "<br/> Estaremos atentos a que haga su pedido</p>";
      }else{
      let suma = 0;
      let contenido = '';
      texto+= '<table id="tabla_compra">'+
      '<caption>Carrito de la compra</caption>'+
      '<tr id="conceptos">' +
        '<th>Producto</th>'+
        '<th>PVP</th>'+
        '<th>Uds.</th>'+
        '<th>Eur.</th>'+
        '</tr>';
      for (let i = 0; i < CARRO_COMPRA.length; i++) {
        // console.log(CARRO_COMPRA[i][0][0])
            texto+= '<tr class="producto">'+
              '<td class="producto"><p>'+CARRO_COMPRA[i][0][0]+'<br/><img src="./imagenes/'+CARRO_COMPRA[i][0][1]+'" alt="'+CARRO_COMPRA[i][0][0]+'"></p></td>'+
              '<td>'+ CARRO_COMPRA[i][0][4]+'</td>'+
              '<td>1</td>'+
              '<td>'+ CARRO_COMPRA[i][0][4]+'</td>'+
              '</tr>';
              suma+=CARRO_COMPRA[i][0][4];
      }

      texto +='<tr id="total">'	+
      '<td colspan="3" align="right"><b>Precio Total</b></td>'+
      '<td>'+ suma+'</td>'+
      '</tr><tr><td colspan="4" align="right"><button onclick="window.open(\'./imagenes/cucaracha.jpg\',\'_top\')";>Pagar</button></td>'
      '</tr></table>';
      }
    }
    principal.innerHTML = texto;
}

//Función que la ubicación de la tienda
function cargarMapa(){
    document.title = "Encuentranos";
    esteticaEnlaces('mapa');
    principal.innerHTML = "<div id='titulo' class='titulo'>"+
    "<h2>Encuentranos</h2>"+
    "</div>"+
    "<div id='ubicacion'>"+
    "<h2>Pulsa en el mapa para ver la ubicación en google maps</h2>"+
    "<a href='https://goo.gl/maps/yuKFQbw9gcGWdVkF8'  target='_blank' alt='Abrir dirección en google maps'>" +
    "<img src='../web_crustaceo/imagenes/mapa.jpg' alt='Mapa del fondo de bikini'></a>"+
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
      "<form name='formulario para registrarse' id='registrarse'>" +
          "<label for='nombre'>Nombre*: </label><input id=nombre required>"+
          "<label for='apellidos'>Apellidos*: </label><input id=apellidos required>"+
          "<label for='correo'>Correo electronico*: </label><input id='correo' type='email'>"+
          "<label for='movil'>Móvil*: </label><input id='movil' type='tel' required>"+
          "<label for='fech_nac'>Fecha de Nacimiento*: </label><input id='fech_nac' type='date' required></td>"+
          "<label for='cp'>Cp*: </label><input id='cp' required>"+
          "<label for='pol_priv'><input type='checkbox' id='pol_priv'>Consiento el uso de mis datos para los fines indicados en la política de privacidad SUS DATOS SEGUROS.</label>"+
          "<input type='reset' value='Limpiar'><input type='submit' value='Enviar'>"+
      "</form>"+
      "<p class='centrado'>¿Ya tienes cuenta? <a onclick='formIniSes()' href='#' alt='Iniciar sesión' role='link' tabindex='0'> Iniciar Sesión </a>";
}

//Formulario de Inicio de Sesión
function formIniSes(){
  principal.innerHTML = 
  "<div id='titulo' class='titulo'>"+
    "<h2>Iniciar Sesion</h2>"+
  "</div>" +
    "<div class='formulario'>"+
    "<form name='formulario para iniciar sesión' id='iniciar_sesion'>" +
          "<label for='correo'>Correo electrónico</label><input id=correo type='email' required>"+
          "<label for='contrasenha'>Contraseña</label><input id=contrasenha type='password' required>"+
    "</form>"+
    "<button id='iniciar' onclick='verificar(correo.value)'>Iniciar Sesión</button>"+
    "</div>" +
    "<p class='centrado activo' id='login'></p>"; 
}

function verificar(correo){
	login.innerHTML = "";
    for (let i = 0; i < correosElec.length; i++) {
        if(correosElec[i]==correo){
          $('#correo, #contrasenha').val('');
           INICIO_SESION = true;
           login.innerHTML = "Ha iniciado sesión correctamente";
			break;
        }else{
			INICIO_SESION = false;
			login.innerHTML = "Debe introducir datos válidos";
		}
        
    }
}

//Función que cambia el color del enlace en el que estamos ubicados
function esteticaEnlaces(enlace){
    $('nav a').removeClass('activo');
    $('#'+enlace).addClass('activo');
}

