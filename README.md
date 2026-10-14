# Mini Aplicacion con React

## Portada

**Alumno:** Francisco Javier González Santiago 

**Proyecto:** Mini Aplicacion con React

### Descripción

Este proyecto consiste en una mini aplicacion que use elementos de Vite con React para generar componentes y
una pagina web asemejando una aplicacion que utilice estos componentes de React

La mini aplicacion `AniTask` es una aplicacion que muestra una lista de animes ingresada por el usuario que
el mismo puede añadir y modificar animes que ya existan dentro de la lista

Para cada anime esta lista muestra:
1. Nombre del anime
2. Genero del anime
3. Estado en el que se ecnuentra (pendiente, en proceso o terminado)

Dentro de cada elemento que muestra un anime tenemos 2 botones, el boton `Marcar como terminado` cambia el estado
del anime a `Terminado`. El boton `Eliminar anime` borra la tarjeta del anime de la lista

Por ultimo tenemos un contador que muestra la cantidad de animes totales en la lista, y otro que muestra
la cantidad de animes con el estado de `Terminado`

---

## Componentes

### header.jsx

Este componente es muy simple, simplemente es una division aparte para poner el encabezado de la pagina principal.
Cumple el rol del componente sencillo:

```jsx
function Encabezado() {
  return (
    <header>
      <h1>AniTask</h1>
      <p>Tu lista personal de anime.</p>
    </header>
  );
}
```

### tarjetaAnime.jsx

Este componente usa props para crear las tarjetas de Animes, estos props son utilizados en los elementos de la tarjeta:
`Nombre`, `Genero` y `Estado`

```jsx
function TarjetaAnime({titulo,genero,estado,cambiarEstado,eliminarAnime}) {
  return (
    <article>
      <h3>{titulo}</h3>

      <p>Género: {genero}</p>
      <p>Estado: {estado}</p>
    )
}
```

### formulario.jsx

Este componente se usa para ingresar nuevos animes a la lista. Cuenta con 2 campos vacios para añadir texto el cual son 
datos del anime nuevo a ingresar, y un boton de tipo `Submit` el cual al ser presionado activara un evento donde 
recuperaremos los datos de los campos de texto para crear un nuevo anime en la lista

```jsx
function FormularioAnime({ agregarAnime }) {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');

  agregarAnime({
      titulo: titulo.trim(),
      genero: genero.trim()
    });
}
```

---

---

## Respuestas de preguntas

### a) ¿Qué diferencia hay entre props y state en React?

Un `prop` es un dato que se usa para mostrarse dentro de un componente y un `state` es la informacion que
se encuentra el elemento en cuestion en ese momento, es decir, el `state` es el dato en el momento en el que se
requiere, y el `prop` es el dato que se mostrara

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

Porque una `key` es lo que usara el metodo `map(key)` para identificar cada uno de los elementos de la lista

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

`useState` se usa para obtener el estado en el que se encuentra un elemento y retornarlo, basicamente es como si tuvieramos
un metodo `get()` para cada parametro y que nos retorne su estado actual
Se uso en el proyecto, en el componente `formulario` para crear un nuevo anime obteniendo el `State` de los formularios
para crear la nueva tarjeta con esos datos

```jsx
const [titulo, setTitulo] = useState('');
const [genero, setGenero] = useState('');
```

### d) Pega el enlace de tu repositorio de GitHub.

<https://github.com/FranciscoJ619/t3_act4_react>

### e) Pega el enlace de tu proyecto ya desplegado en GitHub Pages.

<https://franciscoj619.github.io/t3_act4_react/>

---



Proyecto realizado para la materia de Programación Web.