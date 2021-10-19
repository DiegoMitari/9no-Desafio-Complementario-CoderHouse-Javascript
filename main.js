
//1. Esta function retorna el 'value' ingresado en el <input>, es decir el valor del prestamo solicitado
function prestamo() {
    montoPrestamo = parseInt(document.getElementById("prestamo").value);
    return montoPrestamo;
}


//2. Esta function retorna el 'value' ingresado en el <select>, es decir el valor de cuantas cuotas elige.
function cuota() {
    let cantidadCuotas = parseInt(document.getElementById("cantCuotas").value)
    return cantidadCuotas;
}

function tipoCuota() {
    let tipoCuota = parseInt(document.getElementById("tipoCuota").value)
    if(tipoCuota == 0.035)
        return ` 3.5% - Cuota Ordinaria`;
    else    
        return `2.5% - Cuota Extraordinaria`
}

//3. Esta arrow function retorna el valor de la cuota, considerando un interes del 20% mensual.
const valorCuota = () => { 
    const interes = 1.2;
    return parseFloat(prestamo()*interes/cuota()).toFixed(2);
}

// -------------8vo Desafio -------------
//Seimprimen en el HTML con ayuda del .innerHTML, los inputs ingresado. en el form
//estos inputs son guardados en varias funciones para luego ser llamados con la funcion 'btnSubmit'
const btnSubmit = document.querySelector('.btn-primary');
btnSubmit.addEventListener('click', () => {
    const div = document.querySelector('.divPrint');
    const div2 = document.querySelector('.divPrint2');

     div.innerHTML = `
                 <p class="font-weight-bold px-4 mt-3">Información de tu préstamo:</p>
                 <p class="font-weight-bold px-4">Monto Solicitado: $ ${prestamo()}</p>
                 <p class="font-weight-bold px-4">Tipo de interes: $ ${tipoCuota()}</p>
                 <p class="font-weight-bold px-4">Cantidad de Cuotas: ${cuota()}</p>
                 <p class="font-weight-bold px-4">Valor de cuota: $ ${valorCuota()}</p>
                 <small class="px-4">El interés es del 20%</small>
                 <br>
                 
                 <table id="lista-tabla" class="table">
                 <thead>
                   <tr>
                     <th>Fecha</th>
                     <th>Cuota</th>
                     <th>Capital</th>
                     <th>Interes</th>
                     <th>Saldo</th>
                   </tr>
                 </thead>
               </table>`;  
            });                 
