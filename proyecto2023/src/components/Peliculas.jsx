import React, { useState } from "react";
import "../components/Peliculas.css";

function Peliculas({ peliculas }) {
  const [favoritos, setFavoritos] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const toggleFavorito = (indice) => {
    const pelicula = peliculas[indice];
    const nuevasFavoritas = [...favoritos];

    const existe = nuevasFavoritas.find((fav) => fav.id === pelicula.id);

    if (existe) {
      nuevasFavoritas.splice(nuevasFavoritas.indexOf(existe), 1);
    } else {
      nuevasFavoritas.push(pelicula);
    }

    setFavoritos(nuevasFavoritas);
  };

  const mostrarDetalles = (indice) => {
    setPeliculaSeleccionada(peliculas[indice]);
  };

  const cerrarDetalles = () => {
    setPeliculaSeleccionada(null);
  };

  if (!peliculas || peliculas.length === 0) {
    return <p className="no-movie">No hay películas disponibles</p>;
  }

  const peliculasFavoritas = peliculas.filter((pelicula) =>
    favoritos.find((fav) => fav.id === pelicula.id)
  );

  return (
    <div className="container">
      {peliculas.map((pelicula, indice) => (
        <div className="column" key={indice}>
          <div className="column-peli">
            <img
              className="pelicula-poster"
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt="pelicula"
              onClick={() => mostrarDetalles(indice)} // Mostrar detalles al hacer clic en la imagen
            />
            <div className="title-container">
              <h5 className="pelicula-title" onClick={() => mostrarDetalles(indice)}>
                {pelicula.title}
              </h5>
              <a
                href="#"
                onClick={() => toggleFavorito(indice)}
                className={favoritos.find((fav) => fav.id === pelicula.id) ? "enlarged" : ""}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
              </a>
            </div>
          </div>
        </div>
      ))}

{peliculaSeleccionada && (
  <div className={`detalles-pelicula ${peliculaSeleccionada ? 'active' : ''}`}>
    <button onClick={cerrarDetalles}>Cerrar</button>
    <h2>{peliculaSeleccionada.title}</h2>
    <p>Descripción: {peliculaSeleccionada.overview}</p>
    <p>Fecha de lanzamiento: {peliculaSeleccionada.release_date}</p>
    {/* Otros detalles que desees mostrar */}
  </div>
)}

<div className="favoritos-container" id="favoritos">
  <h2  className="favoritos-container">Películas Favoritas</h2>
  {peliculasFavoritas.length > 0 ? (
    <ul className="lista-favoritos">
      {peliculasFavoritas.map((peliculaFavorita) => (
        <li key={peliculaFavorita.id}>
          <img
            className="pelicula-poster"
            src={`https://image.tmdb.org/t/p/w500${peliculaFavorita.poster_path}`}
            alt="pelicula"
            onClick={() => mostrarDetalles(peliculaFavorita.id)}
          />
          <span>{peliculaFavorita.title}</span>
        </li>
      ))}
    </ul>
  ) : (
    <p className="no-movies">No hay películas marcadas como favoritas.</p>
  )}
</div>
    </div>
  );
}

export default Peliculas;
