
import { useState } from 'react';
import Encabezado from './componentes/header';
import TarjetaAnime from './componentes/tarjetaAnime';
import FormularioAnime from './componentes/formulario';

function App() {
  const [animes, setAnimes] = useState([
    {
      id: 1,
      titulo: 'Frieren',
      genero: 'Fantasía',
      estado: 'Pendiente'
    },
    {
      id: 2,
      titulo: 'One Piece',
      genero: 'Aventura',
      estado: 'En progreso'
    },
    {
      id: 3,
      titulo: 'Death Note',
      genero: 'Suspenso',
      estado: 'Terminado'
    }
  ]);

  function agregarAnime(nuevoAnime) {
    const animeCompleto = {
      ...nuevoAnime,
      id: Date.now(),
      estado: 'Pendiente'
    };

    setAnimes((listaAnterior) => [
      ...listaAnterior,
      animeCompleto
    ]);
  }

  function cambiarEstado(id) {
    setAnimes((listaAnterior) =>
      listaAnterior.map((anime) =>
        anime.id === id
          ? { ...anime, estado: 'Terminado' }
          : anime
      )
    );
  }

  function eliminarAnime(id) {
    setAnimes((listaAnterior) =>
      listaAnterior.filter((anime) => anime.id !== id)
    );
  }

  const pendientes = animes.filter(
    (anime) => anime.estado !== 'Terminado'
  ).length;

  return (
    <div>
      <Encabezado />
      <main>
        <FormularioAnime agregarAnime={agregarAnime} />
        <section>
          <h2>Mi lista de animes</h2>
          <p>Animes en tu lista: {animes.length}</p>
          <p>Animes pendientes: {pendientes}</p>
          
          {animes.length === 0 ? (
            <p>Tu lista está vacía. ¡Tu si te bañas!</p>
          ) : (
            animes.map((anime) => (
              <TarjetaAnime
                key={anime.id}
                titulo={anime.titulo}
                genero={anime.genero}
                estado={anime.estado}
                cambiarEstado={() => cambiarEstado(anime.id)}
                eliminarAnime={() => eliminarAnime(anime.id)}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
