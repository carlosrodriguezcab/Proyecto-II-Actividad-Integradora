# Visualizador de Calendarización de Sprint

Esta aplicación es una herramienta interactiva desarrollada por Carlos Rodríguez Caballero en **React** para visualizar la planificación y seguimiento de un Sprint de desarrollo de software. Fue creada como parte de la **Actividad Integradora 1** para la clase Proyecto II de la Licenciatura en Desarrollo de Sistemas Web en la Universidad de Guadalajara.


## Funcionalidades

*   **Vista de Calendario:** Visualización clara de un Sprint de 3 semanas.
*   **Gestión de Tareas:** Tarjetas diarias que indican la actividad, el tipo de trabajo (Diseño, Desarrollo, Pruebas, Revisión), el responsable y los recursos necesarios.
*   **Reuniones Ágiles:** Indicadores visuales para eventos de Scrum como *Sprint Planning*, *Daily Scrum* y *Sprint Review/Retrospective*.
*   **Detalle de Tareas:** Al hacer clic en una tarjeta, se despliega un modal con información detallada:
    *   Historia de Usuario.
    *   Criterios de Aceptación.
    *   Objetivo Técnico.
    *   Puntos de Historia.
    *   Valor del negocio.
    *   Responsable.
    *   Herramientas (Recursos necesarios)
*   **Indicador "Hoy":** Resaltado visual y animación para identificar el día actual dentro del sprint, incluyendo fines de semana no laborables.


## Leyenda de Colores

Las tarjetas están codificadas por colores para identificar rápidamente el tipo de actividad:

*   **Azul (Design):** Actividades de diseño y arquitectura.
*   **Verde (Dev):** Desarrollo de código, backend, frontend y configuración.
*   **Morado (Test):** Pruebas de calidad, seguridad e integridad.

## Tecnologías Utilizadas

*   **React + Vite:** Framework y entorno de desarrollo.
*   **Tailwind CSS:** Estilizado moderno y responsivo.
*   **Lucide React:** Iconografía.


## Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Instala las dependencias:**
    ```bash
    npm install
    ```

2.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación suele estar disponible en `http://localhost:5173`.
