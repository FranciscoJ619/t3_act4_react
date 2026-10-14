
function TarjetaAnime({
  titulo,
  genero,
  estado,
  cambiarEstado,
  eliminarAnime
}) {
  return (
    <article>
      <h3>{titulo}</h3>

      <p>Género: {genero}</p>
      <p>Estado: {estado}</p>

      {estado !== 'Terminado' && (
        <button onClick={cambiarEstado}>
          Marcar como terminado
        </button>
      )}

      <button onClick={eliminarAnime}>
        Eliminar anime
      </button>
    </article>
  );
}

export default TarjetaAnime;
