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
