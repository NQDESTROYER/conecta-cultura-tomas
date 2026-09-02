// ===== Guía 7: Cartelera dinámica =====
// Datos de las actividades representados como objetos
const actividades = [
  {
    codigo: "FOT001",
    nombre: "Taller de fotografía",
    categoria: "Cultura",
    precio: 10000,
    cupos: 15
  },
  {
    codigo: "HUE002",
    nombre: "Huerto comunitario",
    categoria: "Bienestar",
    precio: 0,
    cupos: 20
  },
  {
    codigo: "PRO003",
    nombre: "Programación creativa",
    categoria: "Tecnología",
    precio: 15000,
    cupos: 5
  },
  {
    codigo: "GUI004",
    nombre: "Taller de guitarra",
    categoria: "Música",
    precio: 12000,
    cupos: 8
  },
  {
    codigo: "ACU005",
    nombre: "Acuarela para principiantes",
    categoria: "Artes visuales",
    precio: 12000,
    cupos: 4
  },
  {
    codigo: "TEA006",
    nombre: "Teatro comunitario",
    categoria: "Teatro",
    precio: 0,
    cupos: 0
  },
  {
    codigo: "LEC007",
    nombre: "Club de lectura",
    categoria: "Cultura",
    precio: 0,
    cupos: 3
  },
  {
    codigo: "CRO008",
    nombre: "Crochet y tejido",
    categoria: "Bienestar",
    precio: 8000,
    cupos: 12
  }
];

const cartelera = document.querySelector("#cartelera");

// Crea una tarjeta a partir de un objeto actividad
function crearTarjeta(actividad) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  const nombre = document.createElement("h3");
  nombre.textContent = actividad.nombre;

  const categoria = document.createElement("p");
  categoria.textContent = `Categoría: ${actividad.categoria}`;

  const precio = document.createElement("p");
  if (actividad.precio === 0) {
    precio.textContent = "Gratis";
  } else {
    precio.textContent = `Precio: $${actividad.precio}`;
  }

  const cupos = document.createElement("p");
  cupos.textContent = `Cupos: ${actividad.cupos}`;

  if (actividad.cupos > 0 && actividad.cupos <= 5) {
    cupos.textContent = `¡Últimos ${actividad.cupos} cupos!`;
    cupos.classList.add("aviso-cupos");
  }
  if (actividad.cupos === 0) {
    cupos.textContent = "Actividad completa";
    cupos.classList.add("actividad-completa");
  }

  tarjeta.appendChild(nombre);
  tarjeta.appendChild(categoria);
  tarjeta.appendChild(precio);
  tarjeta.appendChild(cupos);
  cartelera.appendChild(tarjeta);
}

// Limpia la cartelera y renderiza una lista de actividades
function mostrarActividades(lista) {
  cartelera.replaceChildren();
  for (const actividad of lista) {
    crearTarjeta(actividad);
  }
}

mostrarActividades(actividades);

// Filtros
const botonTodas = document.querySelector("#mostrar-todas");
const botonDisponibles = document.querySelector("#mostrar-disponibles");

function mostrarTodas() {
  mostrarActividades(actividades);
}

function mostrarDisponibles() {
  const disponibles = [];
  for (const actividad of actividades) {
    if (actividad.cupos > 0) {
      disponibles.push(actividad);
    }
  }
  mostrarActividades(disponibles);
}

botonTodas.addEventListener("click", mostrarTodas);
botonDisponibles.addEventListener("click", mostrarDisponibles);
