// Menu responsive 
var bntMenuOpen = document.getElementById("btnMenuOpen"),
btnMenuClose = document.getElementById("btnMenuClose"),
menuResponsive = document.getElementById("menuBar"),
enlaces = document.getElementById("enlaces");

// Click to open
bntMenuOpen.addEventListener("click", function () {
    menuResponsive.classList.add("active");
});

// Click to close
btnMenuClose.addEventListener("click", function () {
    menuResponsive.classList.remove("active");
});

// Cerrar menú con elementos de enlace
enlaces.addEventListener("click", function(){
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");
});


// Slider de productos

var contendor = document.querySelector(".slider"),
    btnIzquierda = document.getElementById("btn-izquierda"),
    btnDerecha = document.getElementById("btn-derecha");

    // Evento botón derecho
    btnDerecha.addEventListener("click", function(){
        contendor.scrollLeft += contendor.offsetWidth;
    });

     // Evento botón izquierdo
     btnIzquierda.addEventListener("click", function(){
        contendor.scrollLeft -= contendor.offsetWidth;
    });

// Validación de formulario
var formulario = document.getElementById("formulario");

    function validar(e){
        var inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inputComments = document.getElementById("comentarios"),
            alertSuccess = document.getElementById("alertSuccess"),
            alertError = document.getElementById("alertError");

        if (inputNombre.value == 0 || inputEmail.value == 0 || inputComments.value == 0){
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            setTimeout(function(){
                alertError.classList.remove("show");
                alertError.classList.add("hide");    
            }, 2000);

        }else{
            e.preventDefault();
            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");

            setTimeout(function(){
                alertSuccess.classList.remove("show");
                alertSuccess.classList.add("hide");    
            }, 2000);

            inputNombre.value = "";
            inputEmail.value = "";
            inputComments.value = "";
        }
    }

    // Eventos del formulario
    formulario.addEventListener("submit", validar);

// Botón scroll top
var btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");

    // Detectar scroll
    window.addEventListener("scroll", function(){
        var scroll = document.documentElement.scrollTop
            fullSize = document.documentElement.offsetHeight,
            sizeVP = document.documentElement.clientHeight;

        if(scroll > 100){
            btnTop.classList.add("show");
        }else{
            btnTop.classList.remove("show");
        }
    

        //Modificar elemento cuando llegue a final de página
        if(fullSize == (scroll + sizeVP)){
            btnTop.classList.add("scrollFinal");
        }else{
            btnTop.classList.remove("scrollFinal");
        }
    });

        // Detectar evento click en el botón
        btnTop.addEventListener("click", function(){
            window.scrollTo(0,0);
        })

        // Detectar evento clic en logo
        logo.addEventListener("click", function(){
            window.scrollTo(0,0);
        })