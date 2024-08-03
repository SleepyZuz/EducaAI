$(document).ready(function () {
    $('#header').load('/html/Layout/header.html');
    $('#footer').load('/html/Layout/footer.html');
    btnConcisa();
    btn_basico1Paso1();
    botonZero();
});




function LlamarDescripcion() {
    $("#botonDescripcionGPT").attr("disabled", true);
    $("#botonDescripcionGPT").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        dataType: "json",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "Dame una descripción resumida de qué es ChatGPT"}
        ]
    }`,
        success: function (result) {
            $('#p-respuesta-chatgpt__Introduccion').html(result.choices[0].message.content);
            $("#botonDescripcionGPT").attr("disabled", false);
            $("#botonDescripcionGPT").html("Generar descripción");
        },
        error: function (result) {
            $('#descripcionGPT').html("<p style='color=red;'>Algo pasó, intenta nuevamente.</p><br/>");
            $("#botonDescripcionGPT").attr("disabled", false);
            $("#botonDescripcionGPT").html("Generar descripción");
        },
    });
}
function LlamarRespuestaEMC2(modo) {
    var dataConcisa = `{
            "model": "gpt-3.5-turbo",
            "messages": [
                {"role": "user", "content": "¿Cuál es la fórmula de la equivalencia entre masa y energía? Respuesta concisa sin explicación"}
            ]
    }`;
    var dataResumida = `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "¿Cuál es la fórmula de la equivalencia entre masa y energía? Respuesta resumida"}
        ]
    }`;
    var dataExtendida = `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "¿Cuál es la fórmula de la equivalencia entre masa y energía? Respuesta de un párrafo"}
        ]
    }`;
    $("#botonPreguntaEMC2-p").attr("disabled", true);
    $("#botonPreguntaEMC2-r").attr("disabled", true);
    $("#botonPreguntaEMC2-e").attr("disabled", true);
    $("#botonPreguntaEMC2-p").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $("#botonPreguntaEMC2-r").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $("#botonPreguntaEMC2-e").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        dataType: "json",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: modo == "conciso" ? dataConcisa : modo == "resumido" ? dataResumida : dataExtendida,
        success: function (result) {
            $('#p-respuesta-chatgpt__precision').html("<p>" + result.choices[0].message.content + "</p><br/>");
            $("#botonPreguntaEMC2-p").attr("disabled", false);
            $("#botonPreguntaEMC2-r").attr("disabled", false);
            $("#botonPreguntaEMC2-e").attr("disabled", false);
            $("#botonPreguntaEMC2-p").text("Pregunta concisa");
            $("#botonPreguntaEMC2-r").html("Pregunta resumida");
            $("#botonPreguntaEMC2-e").html("Pregunta extendida");
        },
        error: function (result) {
            $('#p-respuesta-chatgpt__precision').html("<p style='color=red;'>Algo pasó, intenta nuevamente.</p><br/>");
            $("#botonPreguntaEMC2-p").attr("disabled", false);
            $("#botonPreguntaEMC2-r").attr("disabled", false);
            $("#botonPreguntaEMC2-e").attr("disabled", false);
            $("#botonPreguntaEMC2-p").text("Pregunta concisa");
            $("#botonPreguntaEMC2-r").html("Pregunta resumida");
            $("#botonPreguntaEMC2-e").html("Pregunta extendida");
        },
    });

}


function LlamarEstructura() {
    $("#botonEstructura").attr("disabled", true);
    $("#botonEstructura").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        dataType: "json",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "Actua como un experto en historia del arte, compara y contrasta las pinturas “la ultima cena” de Leonardo da Vinci y “El Guernica” de Pablo Picasso, y entrégame las comparaciones en numerales. Formatea la respuesta en HTML."}
        ]
    }`,
        success: function (result) {
            $('#p-respuesta-chatgpt__estructura').html(result.choices[0].message.content);
            $("#botonEstructura").attr("disabled", false);
            $("#botonEstructura").html("Generar descripción");
        },
        error: function (result) {
            $('#p-respuesta-chatgpt__estructura').html("<p style='color=red;'>Algo pasó, intenta nuevamente.</p><br/>");
            $("#botonEstructura").attr("disabled", false);
            $("#botonEstructura").html("Generar descripción");
        },
    });
}


function LlamarRespuestaBasico1(modo) {
    var dataSencillo = `{
            "model": "gpt-3.5-turbo",
            "messages": [
                {"role": "user", "content": "escribe una receta de pasta. Formatea la respuesta en HTML."}
            ]
    }`;
    var dataMedio = `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "eres un chef italiano. Crea una receta original de pasta con ingredientes tradicionales italianos. Formatea la respuesta en HTML."}
        ]
    }`;
    var dataDetallado = `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "Eres un chef italiano. crea una receta original de pasta con ingredientes tradicionales italianos y que sea fácil de preparar en casa para alguien que no es experto en cocina. Lista de los pasos numerables. Formatea la respuesta en HTML."}
        ]
    }`;
    $("#botonSencillo").attr("disabled", true);
    $("#botonMedio").attr("disabled", true);
    $("#botonDetallado").attr("disabled", true);
    $("#botonSencillo").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $("#botonMedio").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $("#botonDetallado").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        dataType: "json",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        data: modo == "sencillo" ? dataSencillo : modo == "medio" ? dataMedio : dataDetallado,
        success: function (result) {
            $('#p-respuesta-chatgpt__basico1').html("<p>" + result.choices[0].message.content + "</p><br/>");
            $("#botonSencillo").attr("disabled", false);
            $("#botonMedio").attr("disabled", false);
            $("#botonDetallado").attr("disabled", false);
            $("#botonSencillo").text("Inicio Sencillo");
            $("#botonMedio").html("Agregar unos detalles");
            $("#botonDetallado").html("Darle todavia mas detalles");
        },
        error: function (result) {
            $('#p-respuesta-chatgpt__basico1').html("<p style='color=red;'>Algo pasó, intenta nuevamente.</p><br/>");
            $("#botonSencillo").attr("disabled", false);
            $("#botonMedio").attr("disabled", false);
            $("#botonDetallado").attr("disabled", false);
            $("#botonSencillo").text("Inicio Sencillo");
            $("#botonMedio").html("Agregar unos detalles");
            $("#botonDetallado").html("Darle todavia mas detalles");
        },
    });

}

function LlamarRespuestaBasico2() {
    $("#btnBasico2").attr("disabled", true);
    $("#btnBasico2").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        dataType: "json",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "Redacta una carta de recomendación de un estudiante llamado Juan Pérez para su solicitud de ingreso a la maestría de Ciencias de la computación. Menciona su habilidad en programación, capacidad para trabajar en equipo y habilidades de comunicación. la carta debe incluir una introducción cuerpo y conclusión y debe contener no más de 3 párrafos. Formatea la respuesta en HTML."}
        ]
    }`,
        success: function (result) {
            $('#p-respuesta-chatgpt__basico2').html(result.choices[0].message.content);
            $("#btnBasico2").attr("disabled", false);
            $("#btnBasico2").html("Ser especifico");
        },
        error: function (result) {
            $('#p-respuesta-chatgpt__basico2').html("<p style='color=red;'>Algo pasó, intenta nuevamente.</p><br/>");
            $("#btnBasico2").attr("disabled", false);
            $("#btnBasico2").html("Ser especifico");
        },
    });
}


function LlamarRespuestaBasico3() {
    $("#btnBasico3").attr("disabled", true);
    $("#btnBasico3").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        dataType: "json",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "Usa de 2 a 3 oraciones para explicar el concepto de promt engineering a un estudiante de Secundaria. Formatea la respuesta en HTML."}
        ]
    }`,
        success: function (result) {
            $('#p-respuesta-chatgpt__basico3').html(result.choices[0].message.content);
            $("#btnBasico3").attr("disabled", false);
            $("#btnBasico3").html("Evitar ambiguedades");
        },
        error: function (result) {
            $('#p-respuesta-chatgpt__basico3').html("<p style='color=red;'>Algo pasó, intenta nuevamente.</p><br/>");
            $("#btnBasico3").attr("disabled", false);
            $("#btnBasico3").html("Evitar ambiguedades");
        },
    });
}

function LlamarRespuestaBasico4() {
    $("#btnBasico4").attr("disabled", true);
    $("#btnBasico4").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        dataType: "json",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "Actua como un experto en historia del arte, compara y contrasta las pinturas “La última Cena” de Leonardo Da Vinci y “El Guernica” de Pablo Picasso, y entrégame las comparaciones en numerales ¿Entendiste tu proposito?. Formatea la respuesta en HTML."}
        ]
    }`,
        success: function (result) {
            $('#p-respuesta-chatgpt__basico4').html(result.choices[0].message.content);
            $("#btnBasico4").attr("disabled", false);
            $("#btnBasico4").html("Reafirmar");
        },
        error: function (result) {
            $('#p-respuesta-chatgpt__basico3').html("<p style='color=red;'>Algo pasó, intenta nuevamente.</p><br/>");
            $("#btnBasico4").attr("disabled", false);
            $("#btnBasico4").html("Reafirmar");
        },
    });
}

function LlamarRespuestaBasico5() {
    $("#btnBasico5").attr("disabled", true);
    $("#btnBasico5").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        dataType: "json",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "Actua como un experto en física y aplica el conocimiento de la teoría de la relatividad de Einstein a un niño de 12 años. Describe de manera simple y con analogías cotidianas los distintos conceptos alrededor de esta teoría. Formatea la respuesta en HTML."}
        ]
    }`,
        success: function (result) {
            $('#p-respuesta-chatgpt__basico5').html(result.choices[0].message.content);
            $("#btnBasico5").attr("disabled", false);
            $("#btnBasico5").html("Audiencia objetivo");
        },
        error: function (result) {
            $('#p-respuesta-chatgpt__basico5').html("<p style='color=red;'>Algo pasó, intenta nuevamente.</p><br/>");
            $("#btnBasico5").attr("disabled", false);
            $("#btnBasico5").html("Audiencia objetivo");
        },
    });
}

function LlamarRespuestaBasico6() {
    $("#btnBasico6").attr("disabled", true);
    $("#btnBasico6").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        dataType: "json",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "Your work is to describe a scene in a beautiful photo in your very detail way. your description cannot exceed 70 words and should be similar to the next example. Example: “a photographer capturing the beauty and intricacy of a handcrafted piece of pottery with the texture and details of the clay surface adding visual interest and depth. the use of soft light and shallow depth of field creates a sense of focus on intricate powers and forms, emphasizing the beauty of human craftsmanship and creativity.”"}
        ]
    }`,
        success: function (result) {
            $('#p-respuesta-chatgpt__basico6').html(result.choices[0].message.content);
            $("#btnBasico6").attr("disabled", false);
            $("#btnBasico6").html("Dar ejemplo");
        },
        error: function (result) {
            $('#p-respuesta-chatgpt__basico5').html("<p style='color=red;'>Algo pasó, intenta nuevamente.</p><br/>");
            $("#btnBasico6").attr("disabled", false);
            $("#btnBasico6").html("Dar ejemplo");
        },
    });
}



function LlamarRespuestaTPE1(modo) {
    var dataSencillo = `{
            "model": "gpt-3.5-turbo",
            "messages": [
                {"role": "user", "content": "Diseña 10 preguntas de deletreo para un niño de 7 años. coloca un <br> al final de cada pregunta"}
            ]
    }`;
    var dataMedio = `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "Diseña 10 preguntas de deletreo para un niño de 7 años, sigue el siguiente ejemplo: [Como se escribe la palabra del animal que ladra]. Formatea la respuesta en HTML."}
        ]
    }`;
    var dataDetallado = `{
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": "Te voy a pasar una serie de ejemplos de notas de estudiantes y vas a tener que responder de una manera parecida basado en los ejemplos. Ejemplo 1:Nota de 90 a 100, Felicidades!!!! Aprobaste con un nota increíble, te deseo los mejores exitos. Ejemplo 2: Nota 70 a 90: Pasaste el curso,  Suerte en los siguientes. Ejemplo 3: Nota inferior a 70, Lo intentaste pero no lo conseguiste, sigue estudiando y seguro apruebas la proxima. Si el estudiante obtuvo 78, Cual seria tu respuesta?. Formatea la respuesta en HTML."}
        ]
    }`;
    $("#botonZero").attr("disabled", true);
    $("#botonOne").attr("disabled", true);
    $("#botonFew").attr("disabled", true);
    $("#botonZero").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $("#botonOne").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $("#botonFew").html("<i class='fa fa-spinner fa-spin'></i>Enviando consulta");
    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        dataType: "json",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer API KEY"
        },
        data: modo == "Zero-Shot" ? dataSencillo : modo == "One-Shot" ? dataMedio : dataDetallado,
        success: function (result) {
            $('#p-respuesta-chatgpt__tpe1').html("<p>" + result.choices[0].message.content + "</p><br/>");
            $("#botonZero").attr("disabled", false);
            $("#botonOne").attr("disabled", false);
            $("#botonFew").attr("disabled", false);
            $("#botonZero").text("Zero-Shot");
            $("#botonOne").html("One-Shot");
            $("#botonFew").html("botonFew");
        },
        error: function (result) {
            $('#p-respuesta-chatgpt__tpe1').html("<p style='color=red;'>Algo pasó, intenta nuevamente.</p><br/>");
            $("#botonZero").attr("disabled", false);
            $("#botonOne").attr("disabled", false);
            $("#botonFew").attr("disabled", false);
            $("#botonZero").text("Zero-Shot");
            $("#botonOne").html("One-Shot");
            $("#botonFew").html("botonFew");
        },
    });

}

const p__precision = document.querySelector('#p__precision');
const btn__Concisa = document.querySelector('#botonPreguntaEMC2-p');
const btn__Resumida = document.querySelector('#botonPreguntaEMC2-r');
const btn__Extensa = document.querySelector('#botonPreguntaEMC2-e');



//PRECISION
function btnConcisa() {
    p__precision.innerHTML = "¿Cuál es la fórmula de la equivalencia entre masa y energía? <span>Respuesta concisa sin explicación</span>"

    btn__Concisa.classList.remove('inactive');
    btn__Resumida.classList.add('inactive');
    btn__Extensa.classList.add('inactive');

}
function btnResumida() {
    p__precision.innerHTML = "¿Cuál es la fórmula de la equivalencia entre masa y energía? <span>Respuesta resumida</span>"



    btn__Concisa.classList.add('inactive');
    btn__Resumida.classList.remove('inactive');
    btn__Extensa.classList.add('inactive');
}
function btnExtensa() {
    p__precision.innerHTML = "¿Cuál es la fórmula de la equivalencia entre masa y energía? <span>Respuesta de un párrafo</span>"

    btn__Concisa.classList.add('inactive');
    btn__Resumida.classList.add('inactive');
    btn__Extensa.classList.remove('inactive');
}



//TIP BASICO 1
const p__basico1 = document.querySelector('#p__basico1');
const btn__basico1Sencillo = document.querySelector('#botonSencillo');
const btn__basico1Medio = document.querySelector('#botonMedio');
const btn__basicoDetallado = document.querySelector('#botonDetallado');

function btn_basico1Paso1() {
    p__basico1.innerHTML = "Escribe una receta de pasta"

    btn__basico1Sencillo.classList.remove('inactive');
    btn__basico1Medio.classList.add('inactive');
    btn__basicoDetallado.classList.add('inactive');

}
function btn_basico1Paso2() {
    p__basico1.innerHTML = "eres un chef italiano. Crea una receta original de pasta con ingredientes tradicionales italianos"

    btn__basico1Sencillo.classList.add('inactive');
    btn__basico1Medio.classList.remove('inactive');
    btn__basicoDetallado.classList.add('inactive');

}
function btn_basico1Paso3() {
    p__basico1.innerHTML = "Eres un chef italiano. Crea una receta original de pasta con ingredientes tradicionales italianos y que sea fácil de preparar en casa para alguien que no es experto en cocina. Lista de los pasos numerables"

    btn__basico1Sencillo.classList.add('inactive');
    btn__basico1Medio.classList.add('inactive');
    btn__basicoDetallado.classList.remove('inactive');

}

//Tecnica Prompt Engineering
const p__tpe1 = document.querySelector('#p__tpe1');
const tpeZero = document.querySelector('#botonZero');
const tpeOne = document.querySelector('#botonOne');
const tpeFew = document.querySelector('#botonFew');

function botonZero() {
    p__tpe1.innerHTML = "Diseña 10 preguntas de deletreo para un niño de 7 años"

    tpeZero.classList.remove('inactive');
    tpeOne.classList.add('inactive');
    tpeFew.classList.add('inactive');

}
function botonOne() {
    p__tpe1.innerHTML = "Diseña 10 preguntas de deletreo para un niño de 7 años, sigue el siguiente ejemplo: Como se escribe la palabra del animal que ladra"

    tpeZero.classList.add('inactive');
    tpeOne.classList.remove('inactive');
    tpeFew.classList.add('inactive');

}
function botonFew() {
    p__tpe1.innerHTML = "Te voy a pasar una serie de ejemplos de notas de estudiantes y vas a tener que responder de una manera parecida basado en los ejemplos. Ejemplo 1:Nota de 90 a 100, Felicidades!!!! Aprobaste con un nota increíble, te deseo los mejores exitos. Ejemplo 2: Nota 70 a 90< Pasaste el curso,  Suerte en los siguientes. Ejemplo 3: Nota inferior a 70, Lo intentaste pero no lo conseguiste, sigue estudiando y seguro apruebas la proxima. Si el estudiante obtuvo 78, Cual seria tu respuesta?"

    tpeZero.classList.add('inactive');
    tpeOne.classList.add('inactive');
    tpeFew.classList.remove('inactive');

}
