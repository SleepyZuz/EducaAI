$(document).ready(function () {
    $('#header').load('/html/Layout/header.html');
    $('#footer').load('/html/Layout/footer.html');
    btnSencilla()
}); 

function LlamarEjemploDALLE() {
    $("#botonEjemplo").attr("disabled", true);
    $("#botonEjemplo").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        url: "https://api.openai.com/v1/images/generations",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: JSON.stringify({
            "prompt": "Dibuja un perro feliz.",
            "size": "256x256"
        }),
        success: function(resultado) {
            var imageUrl = resultado.data[0].url;
            $("#img-respuesta-dalle").attr("src", imageUrl);
            $("#botonEjemplo").attr("disabled", false);
            $("#botonEjemplo").html("Generar imagen");
        },
        error: function(error) {
            console.log("Error al llamar a la API de DALL-E");
            console.log(error);
            $("#botonEjemplo").attr("disabled", false);
            $("#botonEjemplo").html("Generar imagen");
        }
    });
}

function LlamarOpcion1() {
    $("#botonOpcion1").attr("disabled", true);
    $("#botonOpcion2").attr("disabled", true);
    $("#botonOpcion1").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $("#botonOpcion2").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        url: "https://api.openai.com/v1/images/generations",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        data: JSON.stringify({
            "prompt": "Dibuja un perro.",
            "size": "256x256"
        }),
        success: function(resultado) {
            var imageUrl = resultado.data[0].url;
            $("#img-respuesta-precision").attr("src", imageUrl);
            $("#botonOpcion1").attr("disabled", false);
            $("#botonOpcion1").html("Generar imagen");
            $("#botonOpcion2").attr("disabled", false);
            $("#botonOpcion2").html("Generar imagen");
        },
        error: function(error) {
            console.log("Error al llamar a la API de DALL-E");
            console.log(error);
            $("#botonOpcion1").attr("disabled", false);
            $("#botonOpcion1").html("Generar imagen");
            $("#botonOpcion2").attr("disabled", false);
            $("#botonOpcion2").html("Generar imagen");
        }
    });
}

function LlamarOpcion2() {
    $("#botonOpcion1").attr("disabled", true);
    $("#botonOpcion2").attr("disabled", true);
    $("#botonOpcion1").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $("#botonOpcion2").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        url: "https://api.openai.com/v1/images/generations",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: JSON.stringify({
            "prompt": "Dibuja un perro color café y con lentes.",
            "size": "256x256"
        }),
        success: function(resultado) {
            var imageUrl = resultado.data[0].url;
            $("#img-respuesta-precision").attr("src", imageUrl);
            $("#botonOpcion1").attr("disabled", false);
            $("#botonOpcion1").html("Generar sencilla");
            $("#botonOpcion2").attr("disabled", false);
            $("#botonOpcion2").html("Generar detallada");
        },
        error: function(error) {
            console.log("Error al llamar a la API de DALL-E");
            console.log(error);
            $("#botonOpcion1").attr("disabled", false);
            $("#botonOpcion1").html("Generar sencilla");
            $("#botonOpcion2").attr("disabled", false);
            $("#botonOpcion2").html("Generar detallada");
        }
    });
}

function LlamarEstructura() {
    $("#botonEstructura").attr("disabled", true);
    $("#botonEstructura").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        url: "https://api.openai.com/v1/images/generations",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: JSON.stringify({
            "prompt": "Crea una ilustración de un paisaje de ensueño con un castillo en ruinas y una luna llena en el cielo, y entrégame la imagen en formato PNG.",
            "size": "256x256"
        }),
        success: function(resultado) {
            var imageUrl = resultado.data[0].url;
            $("#img-respuesta-estructura").attr("src", imageUrl);
            $("#botonEstructura").attr("disabled", false);
            $("#botonEstructura").html("Generar descripción");
        },
        error: function(error) {
            console.log("Error al llamar a la API de DALL-E");
            console.log(error);
            $("#botonEstructura").attr("disabled", false);
            $("#botonEstructura").html("Generar descripción");
        }
    });
}

const p_precision = document.querySelector('#p_precision');
const btn_sencilla = document.querySelector('#botonOpcion1');
const btn_detallada = document.querySelector('#botonOpcion2');

function btnSencilla() {
    p_precision.innerHTML = "¿Puedes generar una imagen de un perro? <span>Respuesta sencilla sin explicación.</span>"
    
    btn_sencilla.classList.remove('inactive');
    btn_detallada.classList.add('inactive');
    
}
function btnDetallada() {
    p_precision.innerHTML = "¿Puedes generar una imagen de un perro color café y con lentes? <span>Respuesta detallada.</span>"

    btn_sencilla.classList.add('inactive');
    btn_detallada.classList.remove('inactive');

}

function LlamarArteUno() {
    $("#botonArteUno").attr("disabled", true);
    $("#botonArteUno").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        url: "https://api.openai.com/v1/images/generations",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: JSON.stringify({
            "prompt": "Generar una pintura realista en oleo de un capybara usando un traje real medieval con una corona en un fondo osucro y entrégame la imagen en formato PNG.",
            "size": "256x256"
        }),
        success: function(resultado) {
            var imageUrl = resultado.data[0].url;
            $("#img-respuesta-arteUno").attr("src", imageUrl);
            $("#botonArteUno").attr("disabled", false);
            $("#botonArteUno").html("Generar descripción");
        },
        error: function(error) {
            console.log("Error al llamar a la API de DALL-E");
            console.log(error);
            $("#botonArteUno").attr("disabled", false);
            $("#botonArteUno").html("Generar descripción");
        }
    });
}

function LlamarArteDos() {
    $("#botonArteDos").attr("disabled", true);
    $("#botonArteDos").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        url: "https://api.openai.com/v1/images/generations",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: JSON.stringify({
            "prompt": "Generar una ilustracion dibujado en pixel art de un capybara usando un traje formal y elegante con un fondo oscuro, entrégame la imagen en formato PNG.",
            "size": "256x256"
        }),
        success: function(resultado) {
            var imageUrl = resultado.data[0].url;
            $("#img-respuesta-arteDos").attr("src", imageUrl);
            $("#botonArteDos").attr("disabled", false);
            $("#botonArteDos").html("Generar descripción");
        },
        error: function(error) {
            console.log("Error al llamar a la API de DALL-E");
            console.log(error);
            $("#botonArteDos").attr("disabled", false);
            $("#botonArteDos").html("Generar descripción");
        }
    });
}
