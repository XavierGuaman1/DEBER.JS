let calificaciones=[50,80,40,70,60,30];
for (let i= 0; i < calificaciones.length; i++){
    if(calificaciones[i] >= 70){
        console.log("calificacion"+calificaciones[i]+"APRUEBA");
    } else{
        console.log("calificacion" + calificaciones[i] + "REPRUEBA");
    }
}