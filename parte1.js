
let array = [3,5,7,8,10,15];
let sumatoria = 0;

for (let i=0; i < array.length;  i++){
    sumatoria += array[i];
}
 
document.write("La suma total es: " + sumatoria + "<br>");
let promedio = sumatoria / array.length;
document.write("El promedio es: " + promedio);