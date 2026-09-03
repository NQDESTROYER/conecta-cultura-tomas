# Conecta Cultura

Proyecto incremental de la asignatura Desarrollo FullStack II.

## Integrante

- NQDESTROYER (youngbarbersss@gmail.com)

## Etapas del proyecto

### Guía 1 - Estructura inicial

- Estructura HTML inicial.
- Hoja de estilos externa.
- Archivo JavaScript enlazado.

### Guía 2 - HTML5 semántico y navegación

- Cinco páginas enlazadas: Inicio, Nosotros, Noticias y dos detalles.
- Estructura semántica con header, nav, main, section, article, aside y footer.
- Navegación con rutas relativas y `aria-current` para la página activa.
- Imágenes locales con texto alternativo y `figure`/`figcaption`.

### Guía 3 - Tablas, formularios y multimedia

- Página Agenda con tabla semántica (caption, thead, tbody, th, td, scope).
- Formulario de participación con validaciones HTML nativas.
- Página de confirmación posteriores al envío.
- Recursos multimedia con video, audio y subtítulos.

### Guía 4 - Identidad visual y CSS

- Hoja de estilos organizada por secciones con variables CSS.
- Sistema de colores, tipografía, radios y sombras reutilizables.
- Modelo de caja con box-sizing: border-box.
- Componentes reutilizables: .tarjeta, .boton, .etiqueta.
- Estados interactivos y foco visible con :focus-visible.

### Guía 5 - Diseño adaptable

- Enfoque mobile first: una columna en pantallas estrechas.
- Flexbox para reorganizar cabecera y menú.
- CSS Grid para distribuir tarjetas en 1, 2 y 3 columnas.
- Media queries a 48rem y 64rem.
- Video, iframe y tabla sin desbordamiento horizontal.

### Guía 6 - Fundamentos de JavaScript

- Archivo app.js enlazado y ejecutándose en la consola.
- Variables con const y let, tipos string, number y boolean.
- Operadores aritméticos, comparación y template literals.
- Condicionales if, else if y else.
- Funciones que calculan cupos y determinan el estado.
- Arreglos de actividades y recorrido con for...of.

### Guía 7 - DOM, eventos y cartelera dinámica

- Menú hamburguesa accesible en pantallas pequeñas (menu.js).
- Selección de elementos con querySelector y eventos con addEventListener.
- Cartelera generada desde un arreglo de objetos con createElement.
- textContent y classList para actualizar contenido y estilos.
- Filtros "Todas" y "Con cupos" sobre las actividades.
- Estados de cupos críticos y actividad completa.

### Guía 8 - Validación y persistencia

- Formulario de registro con mensajes de error accesibles.
- Evento submit controlado con preventDefault().
- Validación de RUT chileno, correo, contraseña, fecha y nombre.
- Validación en tiempo real con blur e input.
- Persistencia del registro válido en localStorage con JSON.
- Recuperación del último registro al recargar la página.

## Imágenes

| Archivo | Descripción |
|---------|-------------|
| `assets/img/fotografia.jpg` | Taller de fotografía urbana |
| `assets/img/huerto.webp` | Huerto comunitario |
| `assets/img/programacion.webp` | Programación creativa |

*Falta registrar el autor y la fuente de cada imagen y archivo multimedia.*

## Ejecución

Abrir `index.html` en el navegador o utilizar Live Server.
