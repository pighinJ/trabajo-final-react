import React, { useState, useEffect } from "react";
import "../components/Favs.css"; // Asegúrate de usar el nombre del archivo CSS correcto

function Favs({ peliculas }) {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosGuardados = JSON.parse(localStorage.getItem("favoritos"));
    if (favoritosGuardados) {
      setFavoritos(favoritosGuardados);
    }


  }, []);

  

  

  const toggleFavorito = (indice, ) => {
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

  if (!peliculas || peliculas.length === 0) {
    return <p className="no-movie"></p>;
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
            />
            <div className="title-container">
              <h5 className="pelicula-title">{pelicula.title}</h5>
              <a
                href="#"
                onClick={() => toggleFavorito(indice)}
                className={favoritos.find((fav) => fav.id === pelicula.id) ? "enlarged" : ""}
              >
                <i className={`bi bi-star-fill enlarged`} />
              </a>
            </div>
          </div>
        </div>
      ))}

      <div>
        <h2>Películas Favoritas</h2>
        {peliculasFavoritas.length > 0 ? (
          <ul>
            {peliculasFavoritas.map((peliculaFavorita) => (
              <li key={peliculaFavorita.id}>
                <img
                  className="pelicula-poster"
                  src={`https://image.tmdb.org/t/p/w500${peliculaFavorita.poster_path}`}
                  alt="pelicula"
                />
                <span>{peliculaFavorita.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Favs;
