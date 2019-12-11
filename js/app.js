function validarEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$("#email").on("keyup focusout change", function () {
    cambiarColorInput();
});

function cambiarColorInput() {

    var input_email = $("#email");

    console.log("Texto ingresado: " + input_email.val());

    if (validarEmail(input_email.val()) === true) {
        console.log("Email válido :)");
        input_email.addClass("valid");
        input_email.removeClass("not-valid");
    } else {
        console.log("Email no válido :(");
        input_email.addClass("not-valid");
        input_email.removeClass("valid");
    }
}

$(".btn").on("click", function () {

    console.log("btn funciona");

});

