import"../../node_modules/bootstrap/dist/js/bootstrap.js";

let boton = document.getElementById('btn1');

// boton.addEventListener('click', function(){
//     console.log('Información Enviada');
//     });

boton.onclick=function(e){
    alert("La información fue correctamente enviada, gracias por tu visita.");
}