let contraseñaCorrecta = "lola456"

do{
    contraseñaIngresada = prompt ("Por favor, ingresa la contraseña");
    if (contraseñaIngresada != contraseñaCorrecta){
        alert("Contraseña incorrecta. Intentalo de nuevo");
}
}while (contraseñaIngresada  !== contraseñaCorrecta);
alert("Contraseña correcta.");