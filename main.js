// ------------  Creando FUNCION CONSTRUCTORA  ----------------

function Plan(plan, precio, licencia) {
    this.plan = plan;
    this.precio = precio;
    this.licencia = licencia;
}

// ---------------  Creando Objetos con la Funcion Constructora  --------------

const basico = new Plan("Basico", 50, 5);
const estandar = new Plan("Estandar", 100, 3);
const premium = new Plan("Premium", 150, 1);

// ------------------  Creando Array de Objetos  --------------------

const licenciaPlanes = [basico, estandar, premium];

alert("Bienvenido a Parcel, tu tienda de software preferida");

let seleccionUsuario = prompt("Desea ingresar como Cliente o Administrador? Escriba la respuesta en el siguiente campo").toLowerCase();

while (seleccionUsuario) {
    if (seleccionUsuario == "cliente") {
        let decisionCliente = confirm("¿Desea buscar algun plan en especifico?");
        if (decisionCliente) {
            const planBuscado = prompt("Ingrese el nombre del plan que desea").toLowerCase();
            const planEncontrado = [];
            for (let i = 0; i < licenciaPlanes.length; i++) {
                // Convertir el nombre del plan a minúsculas para comparación
                if (licenciaPlanes[i].plan.toLowerCase() === planBuscado) {
                    planEncontrado.push(licenciaPlanes[i]);
                }
            }
            if (planEncontrado.length > 0) {
                console.table(planEncontrado);
                alert("Felicitaciones! la licencia para el plan " + planBuscado + " se encuentra disponible");
            } else {
                alert("No contamos con licencias para el plan " + planBuscado + " o no ha ingresado un valor valido, en ese caso reintente la busqueda.");
            }
        } else {
            alert("A continuación le mostraremos la lista de licencias que tenemos disponibles");
            console.table(licenciaPlanes);
        }
        break; // Romper el bucle después de la interacción del cliente
    } else if (seleccionUsuario == "administrador" || seleccionUsuario == "admin") {
        alert("Bienvenido, a continuacion vamos a verificar su identidad con su nombre de usuario y contraseña, recuerdes que tiene solo 3 intentos");

        // Creando funcion para ingreso de usuario con limite de intentos.
        function ingresoAdmin() {
            // Usuario y contraseña 
            const usuarioAdmin = "admin";
            const contraseniaAdmin = "password";
             
            let intentos = 3;
          
            while (intentos > 0) {
                const usuario = prompt("Ingrese su nombre de usuario");
                const contrasenia = prompt("Ingrese su contraseña");
          
                if (usuario === usuarioAdmin && contrasenia === contraseniaAdmin) {
                    alert("¡Validacion de administrador exitosa! A continuacion vas a poder agregar equipos a la lista de stock");
                  
                    // Función para agregar un nuevo producto
                    function ingresoPlan() {
                        const plan = prompt("Ingrese el nombre del plan:");
                        const precio = parseFloat(prompt("Ingrese el precio del plan:"));
                        const licencia = prompt("Ingrese la cantidad de licencias que van a estar disponibles:");
                    
                        const ingresoPlan = new Plan(plan, precio, licencia);
  
                        const licenciaCopia = licenciaPlanes.slice();
                        licenciaCopia.push(ingresoPlan);
  
                        alert("¡Equipo agregado satisfactoriamente! Por consola va a poder ver el stock actual actualizado");
                    
                        const fechaHoraActual = new Date().toLocaleString();
                        console.log("Cantidad de licencias actualizada " + fechaHoraActual, licenciaCopia);
                        console.table(licenciaCopia);
                    }
                  
                    ingresoPlan();
                  
                    return;
                } else {
                    intentos--;
                    alert("Usuario o contraseña incorrectos. Le quedan " + intentos + " intentos.");
                }
            }
          
            alert("Ha agotado el número de intentos permitidos. Por favor, inténtelo más tarde.");
        }
          
        ingresoAdmin();
        break; // Romper el bucle después de la interacción del administrador
    } else {
        seleccionUsuario = prompt("Desea ingresar como Cliente o Administrador? Escriba la respuesta en el siguiente campo").toLowerCase();
    }
}