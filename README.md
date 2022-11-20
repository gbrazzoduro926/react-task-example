# react-task-example

## Nivel 1 (React + componets + customComponets):
Complementar aprendizaje adquirido con:
- Preparar componentes custom (Al menos unos 3 componentes custom).
  - Ej:
    - Un boton que reciba parametros de entrada al que se le permitan configurar sus propiedades asi como se muestra a continuacion:
    
    ```
    <BottonCustom 
      color="red"
      value="titulo del boton"
      disabled
      shadow
      onCLick={fnOnClick}
      type="submit"
      autocomplete
    />
    ```
- Integrar libreria de iconos y hacer uso de ellos. Ejemplo: [FontAwesome](https://fontawesome.com/)
- Crear un screen que permita integrar el API de google para mostrar un mapa con una direccion 
   - Ej: [GoogleMap](https://www.npmjs.com/package/google-maps-react)


## Nivel 2 (Redux):

Por que hacer uso de redux? Simple; porque en el momento de desarollar aplicaciones grandes, los arboles de componentes se hacen tan gigantescos que
el elemento "context" se hace complicado, desordenado y terminamos haciendo mas complicada de entender para otros desarrolladores que vengan a mantener
la app. Por lo tanto; se recomienda hacer uso de un contenedor de estados reactivos como redux. Esto te permitira mantener una app limpia y comoda de mantener.

(Esta actividad te permitira entender como hacer uso de un contenedor de estados reactivo).

### Pasos:
- Leer como armar una arquitectura de carpetas en react (Buenas practicas) [React](https://reactjs.org/docs/faq-structure.html).
  ´´´
  // La que uso para una app simple:

  /src
  .../components
  .../utils       // Aqui guardas los scripts de los cuales reutilizas en varias partes de la app (funciones genericas).
  .../store       // Aqui guardas /actions /reducers /
  .../screens
  .../assets
  .../api
  
  ´´´
- Instalar y configurar redux.
- Reemplazar context por redux.

DP: Ire cargando mas actividades con mas frecuencia para que vayas cubriendo puntos tecnicos que debes aprender.

