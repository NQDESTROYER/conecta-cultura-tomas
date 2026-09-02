// ===== Guía 6: Fundamentos de JavaScript =====
// Programa que calcula cupos disponibles y determina
// el estado de una actividad. Los resultados se ven en consola.

const nombreActividad = "Taller de fotografía";
const capacidad = 30;
const inscritos = 18;

function calcularCupos(capacidad, inscritos) {
  return capacidad - inscritos;
}

function obtenerEstado(cuposDisponibles) {
  if (cuposDisponibles === 0) {
    return "Completa";
  }
  if (cuposDisponibles <= 5) {
    return "Últimos cupos";
  }
  return "Disponible";
}

const cuposDisponibles = calcularCupos(capacidad, inscritos);
const estado = obtenerEstado(cuposDisponibles);

console.log(`Actividad: ${nombreActividad}`);
console.log(`Cupos disponibles: ${cuposDisponibles}`);
console.log(`Estado: ${estado}`);

// ===== Trabajo autónomo =====
// Segunda actividad para probar el estado "Últimos cupos"
const nombreActividad2 = "Huerto comunitario";
const capacidad2 = 20;
const inscritos2 = 17;

const cuposActividad2 = calcularCupos(capacidad2, inscritos2);
const estadoActividad2 = obtenerEstado(cuposActividad2);

console.log(`Actividad: ${nombreActividad2}`);
console.log(`Cupos disponibles: ${cuposActividad2}`);
console.log(`Estado: ${estadoActividad2}`);

// Arreglo con actividades y recorrido con for...of
const actividades = [
  "Taller de fotografía",
  "Huerto comunitario",
  "Programación creativa",
  "Taller de guitarra"
];

console.log(`La agenda contiene ${actividades.length} actividades`);

for (const actividad of actividades) {
  console.log(actividad);
}
