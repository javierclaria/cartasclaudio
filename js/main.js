document.addEventListener('DOMContentLoaded', newGame);
function newGame () {
    // Defino Variables de objetos
    creoMazo();
    var bt_elegir_carta = document.getElementById('bt_elegir_carta');
    var fondo_elegir_cartas = document.getElementById('contenedor_elegircarta_juegocartas');
    var volver_almazo = document.getElementById('volver_almazo');
    var contenedor_carta_juegocartas = document.getElementById('contenedor_carta_juegocartas');
    var contenedor_carta_juegocartas = document.getElementById('contenedor_carta_juegocartas');
    var mazo_desplegado = document.getElementById('mazo_desplegado');
    var txt_elegircarta = document.getElementById('txt_elegircarta');
    var volver_almazo_carta = document.getElementById('volver_almazo_carta');
    var contenedor_cartas_juegocartas = document.getElementsByClassName('contenedor_cartas_juegocartas');
    var imageHolder = document.getElementById('holder_carta');
    var audioHolder = document.getElementById('holder_carta');
    var escuchar_audio = document.getElementById('escuchar_audio');
    var mezclarCartas = document.getElementById('mezclarcartas');
    // Array de cartas con imagenes y audios
    var numberCartas = cartas.length;
    const numerosCartas = [];

    // Ejecuto las funciones 
    bt_elegir_carta.addEventListener("click", ShowCartas);
    volver_almazo.addEventListener("click", VolverMazo);
    mazo_desplegado.addEventListener("click", CartaSingle);
    txt_elegircarta.addEventListener("click", CartaSingle);
    volver_almazo_carta.addEventListener("click", CartaSingleVolverMazo);
    mezclarCartas.addEventListener("click", reinciarJuego);
    escuchar_audio.addEventListener("click",function(){
      var audioHolder = document.getElementById('holder_carta');
      var audiosrc = audioHolder.dataset.audio;
      playAudio(audiosrc);
    });

    // Funciones Elegir una Carta - Step 1 
    // Creo el Mazo
    function creoMazo(){
      cartas = [
        {  
          "id" : "0",  
          "imagen": "images/cartas/carta_01.jpg",
          "audio": "audios/CARTA 1.mp3",
          
        },
        {
            "id" : "1",  
            "imagen": "images/cartas/carta_02.jpg",
            "audio": "audios/CARTA 2.mp3",
            
        },
        {
            "id" : "2",  
          "imagen": "images/cartas/carta_03.jpg",
          "audio": "audios/CARTA 3.mp3",
            
        },
        {
            "id" : "3",  
          "imagen": "images/cartas/carta_04.jpg",
          "audio": "audios/CARTA 4.mp3",
            
        },
        {  
            "id" : "4",  
          "imagen": "images/cartas/carta_05.jpg",
          "audio": "audios/CARTA 5.m6p3",
            
          },
          {
              "id" : "5",  
                "imagen": "images/cartas/carta_06.jpg",
                "audio": "audios/CARTA 6.mp3",
              
          },
          {
              "id" : "6",  
            "imagen": "images/cartas/carta_07.jpg",
            "audio": "audios/CARTA 7.mp3",
              
          },
          {
              "id" : "7",  
            "imagen": "images/cartas/carta_08.jpg",
            "audio": "audios/CARTA 8.mp3",
              
          },
          {  
            "id" : "8",  
          "imagen": "images/cartas/carta_09.jpg",
          "audio": "audios/CARTA 9.mp3",
            
          },
          {
              "id" : "9",  
                "imagen": "images/cartas/carta_10.jpg",
                "audio": "audios/CARTA 10.mp3",
              
          },
          {
              "id" : "10",  
            "imagen": "images/cartas/carta_11.jpg",
            "audio": "audios/CARTA 11.mp3",
              
          },
          {
              "id" : "11",  
            "imagen": "images/cartas/carta_12.jpg",
            "audio": "audios/CARTA 12.mp3",
              
          },
          {  
            "id" : "12",  
          "imagen": "images/cartas/carta_13.jpg",
          "audio": "audios/CARTA 13.mp3",
            
          },
          {
              "id" : "13",  
            "imagen": "images/cartas/carta_14.jpg",
            "audio": "audios/CARTA 14.mp3",
              
          },
          {
              "id" : "14",  
            "imagen": "images/cartas/carta_15.jpg",
            "audio": "audios/CARTA 15.mp3",
              
          },
          {
              "id" : "15",  
            "imagen": "images/cartas/carta_16.jpg",
            "audio": "audios/CARTA 16.mp3",
              
          },
          {  
            "id" : "16",  
          "imagen": "images/cartas/carta_17.jpg",
          "audio": "audios/CARTA 17.mp3",
            
          },
          {
              "id" : "17",  
                        "imagen": "images/cartas/carta_18.jpg",
                        "audio": "audios/CARTA 18.mp3",
              
          },
          {
              "id" : "18",  
            "imagen": "images/cartas/carta_19.jpg",
            "audio": "audios/CARTA 19.mp3",
              
          },
          {
              "id" : "19",  
            "imagen": "images/cartas/carta_20.jpg",
            "audio": "audios/CARTA 20.mp3",
              
          },
          {  
            "id" : "20",  
          "imagen": "images/cartas/carta_21.jpg",
          "audio": "audios/CARTA 21.mp3",
            
          },
          {
              "id" : "21",  
                "imagen": "images/cartas/carta_22.jpg",
                "audio": "audios/CARTA 22.mp3",
              
          },
          {
              "id" : "22",  
            "imagen": "images/cartas/carta_23.jpg",
            "audio": "audios/CARTA 23.mp3",
              
          },
          {
              "id" : "23",  
            "imagen": "images/cartas/carta_24.jpg",
            "audio": "audios/CARTA 24.mp3",
              
          },
          {  
            "id" : "24",  
          "imagen": "images/cartas/carta_25.jpg",
          "audio": "audios/CARTA 25.mp3",
            
          },
          {
              "id" : "25",  
            "imagen": "images/cartas/carta_26.jpg",
            "audio": "audios/CARTA 26.mp3",
              
          },
          {
              "id" : "26",  
            "imagen": "images/cartas/carta_27.jpg",
            "audio": "audios/CARTA 27.mp3",
              
          },
          {
              "id" : "27",  
            "imagen": "images/cartas/carta_28.jpg",
            "audio": "audios/CARTA 28.mp3",
              
          },
          {
            "id" : "28",  
          "imagen": "images/cartas/carta_29.jpg",
          "audio": "audios/CARTA 29.mp3",
            
        },
        {
          "id" : "29",  
        "imagen": "images/cartas/carta_30.jpg",
        "audio": "audios/CARTA 30.mp3",
          
        },
        {
          "id" : "30",  
        "imagen": "images/cartas/carta_31.jpg",
        "audio": "audios/CARTA 31.mp3",
          
        },
        {
        "id" : "31",  
        "imagen": "images/cartas/carta_32.jpg",
        "audio": "audios/CARTA 32.mp3",
        
        },
        {
        "id" : "32",  
        "imagen": "images/cartas/carta_33.jpg",
        "audio": "audios/CARTA 33.mp3",
        
        },
        {
        "id" : "33",  
        "imagen": "images/cartas/carta_34.jpg",
        "audio": "audios/CARTA 34.mp3",
        
        },
        {
          "id" : "34",  
          "imagen": "images/cartas/carta_35.jpg",
          "audio": "audios/CARTA 35.mp3",
          
          },
        {
          "id" : "35",  
          "imagen": "images/cartas/carta_36.jpg",
          "audio": "audios/CARTA 36.mp3",
          
        },
        {
          "id" : "37",  
          "imagen": "images/cartas/carta_38.jpg",
          "audio": "audios/CARTA 38.mp3",
          
        },
        {
          "id" : "38",  
          "imagen": "images/cartas/carta_39.jpg",
          "audio": "audios/CARTA 39.mp3",
        },
        {
          "id" : "39",  
          "imagen": "images/cartas/carta_40.jpg",
          "audio": "audios/CARTA 40.mp3",
        },
        {
          "id" : "40",  
          "imagen": "images/cartas/carta_41.jpg",
          "audio": "audios/CARTA 41.mp3",
        },
        {
          "id" : "41",  
          "imagen": "images/cartas/carta_42.jpg",
          "audio": "audios/CARTA 42.mp3",
        },
        {
          "id" : "42",  
          "imagen": "images/cartas/carta_43.jpg",
          "audio": "audios/CARTA 43.mp3",
        },
        {
          "id" : "43",  
          "imagen": "images/cartas/carta_44.jpg",
          "audio": "audios/CARTA 44.mp3",
        },
        {
          "id" : "44",  
          "imagen": "images/cartas/carta_45.jpg",
          "audio": "audios/CARTA 45.mp3",
        },
        {
          "id" : "45",  
          "imagen": "images/cartas/carta_46.jpg",
          "audio": "audios/CARTA 46.mp3",
        },
        {
          "id" : "46",  
          "imagen": "images/cartas/carta_47.jpg",
          "audio": "audios/CARTA 47.mp3",
        },
        {
          "id" : "47",  
          "imagen": "images/cartas/carta_48.jpg",
          "audio": "audios/CARTA 48.mp3",
        },
        {
          "id" : "48",  
          "imagen": "images/cartas/carta_49.jpg",
          "audio": "audios/CARTA 49.mp3",
        },
        {
          "id" : "49",  
          "imagen": "images/cartas/carta_50.jpg",
          "audio": "audios/CARTA 50.mp3",
        },
        {
          "id" : "50",  
          "imagen": "images/cartas/carta_51.jpg",
          "audio": "audios/CARTA 51.mp3",
        },
        {
          "id" : "51",  
          "imagen": "images/cartas/carta_52.jpg",
          "audio": "audios/CARTA 52.mp3",
        },
        {
          "id" : "52",  
          "imagen": "images/cartas/carta_53.jpg",
          "audio": "audios/CARTA 53.mp3",
        },
        {
          "id" : "53",  
          "imagen": "images/cartas/carta_54.jpg",
          "audio": "audios/CARTA 54.mp3",
        },
        {
          "id" : "54",  
          "imagen": "images/cartas/carta_55.jpg",
          "audio": "audios/CARTA 55.mp3",
        },
        {
          "id" : "55",  
          "imagen": "images/cartas/carta_56.jpg",
          "audio": "audios/CARTA 56.mp3",
        },
        {
          "id" : "56",  
          "imagen": "images/cartas/carta_57.jpg",
          "audio": "audios/CARTA 57.mp3",
        },
      ]
    }

    // Muestro La cartas desplegadas
    function ShowCartas(){
        fondo_elegir_cartas.classList.add('show');
    }
    // Escondo La cartas desplegadas
    function VolverMazo(){
        fondo_elegir_cartas.classList.remove('show');
    }

    // Funciones Elegir una Carta - Step 2
    // Muestro La single Card
    function CartaSingle(){
        contenedor_carta_juegocartas.classList.add('show');
        NumeroAzar();
        numberCartas = numberCartas - 1; 
        numerosCartas.push(numberCartas);
        agregoCartaElegida();
        muestroCartaElegida();
        eliminoCartaArray()
        console.log(cartas.length);
    }

    function NumeroAzar() {
        cartaNumero = Math.floor(Math.random() * numberCartas);
    }

    // Render Carta Elegida
    function muestroCartaElegida() {
        imageHolder.src = cartas[cartaNumero].imagen;
        audioHolder.dataset.audio = cartas[cartaNumero].audio;
    }

    // Agrego La carta al listado de cartas elegidas.
    function agregoCartaElegida() {
        document.getElementById("contenedor_cartaselegidas_juegocartas").innerHTML += 
          '<li><img src=' +cartas[cartaNumero].imagen+' " alt="'+cartas[cartaNumero].imagen+'" data-imagen="'+cartas[cartaNumero].imagen+'" data-audio="'+cartas[cartaNumero].audio+'"  srcset=""></li>';
        var lis = document.getElementsByTagName("li");

        for (var i = 0 ; i < lis.length; i++) {
            lis[i].addEventListener('click', function(event) {
                var imagenNueva = event.target.getAttribute("data-imagen");
                var audioNuevo = event.target.getAttribute("data-audio");
                imageHolder.dataset.audio = audioNuevo
                contenedor_carta_juegocartas.classList.add('show');
                imageHolder.src = imagenNueva;
            });
        }
    }

    // Elimino Carta del Array 
    function eliminoCartaArray() {
      cartas.splice(cartas[cartaNumero].id, 1);
    }
    
    function playAudio(audiosrc){
        document.getElementById("cotenedor_cartas_juegocartas_audio").innerHTML += 
        '<div class="contenedor_carta_reproductor"><audio id="reproductor_audio"  controls ><source id="audioSource" src="'+ audiosrc +'" /></audio></div>';
        var reproductor_audio = document.getElementById('reproductor_audio');
        reproductor_audio.play();
    }
 
    // Volver al mazo - La single Card
    function CartaSingleVolverMazo() {
        fondo_elegir_cartas.classList.remove('show');
        contenedor_carta_juegocartas.classList.remove('show');
        reproductor_audio.remove();
    }

    // Reiniciar el Juego
    function reinciarJuego() {
        numerosCartas.length = 0;
        document.getElementById("contenedor_cartaselegidas_juegocartas").remove();
        contenedor_cartas_juegocartas[0].innerHTML += 
        '<ul id="contenedor_cartaselegidas_juegocartas"></ul>';
        creoMazo();
    }
};
