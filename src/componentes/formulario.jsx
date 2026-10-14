
import { useState } from 'react';

function FormularioAnime({ agregarAnime }) {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');

  function manejarEnvio(evento) {
    evento.preventDefault();

    if (!titulo.trim() || !genero.trim()) {
      return;
    }

    agregarAnime({
      titulo: titulo.trim(),
      genero: genero.trim()
    });

    setTitulo('');
    setGenero('');
  }

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Agregar un anime</h2>

      <input
        type="text"
        placeholder="Nombre del anime"
        value={titulo}
        onChange={(evento) => setTitulo(evento.target.value)}
      />

      <input
        type="text"
        placeholder="Género"
        value={genero}
        onChange={(evento) => setGenero(evento.target.value)}
      />

      <button type="submit">Agregar anime</button>
    </form>
  );
}

export default FormularioAnime;
