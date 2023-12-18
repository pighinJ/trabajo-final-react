import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Peliculas from './components/Peliculas.jsx';
import './App.css';
import Footer from './components/Footer.jsx';
import Search from './components/Search.jsx';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Favs from './components/Favs.jsx';






function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const apiKey = '76bb8b298de9c1041887ed018259c03b'; // Clave de la API

  useEffect(() => {
    // Lógica para obtener películas usando la API al cargar la página
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
      .then(respuesta => respuesta.json())
      .then(dato => {
        console.log(dato);
        setPeliculas(dato.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [apiKey]);

  const handleSearch = (query) => {
    if (query.trim() === '') {
      // Muestra una alerta si el campo de búsqueda está vacío
      Swal.fire({
        icon: 'warning',
        title: 'Campo de búsqueda vacío',
        text: 'Por favor, ingresa un término de búsqueda',
      });
      return; // Evita continuar con la búsqueda si el campo está vacío
    }
    
    // Realiza la búsqueda con el término ingresado en la API
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
      .then(respuesta => respuesta.json())
      .then(dato => {
        console.log(dato);
        setPeliculas(dato.results);
      })
      .catch(error => {
        console.error('Error searching:', error);
      });
  };

  const mostrarDetalles = async (peliculaId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${apiKey}`);
      const peliculaSeleccionada = await response.json();
      setPeliculaSeleccionada(peliculaSeleccionada);
    } catch (error) {
      console.error('Error al obtener detalles de la película:', error);
    }
  };

  const cerrarDetalles = () => {
    setPeliculaSeleccionada(null);
  };

  return (
    <>
      <Header />
      
      <Search onSearch={handleSearch} />
      {peliculaSeleccionada && (
        <div>
          <button onClick={cerrarDetalles}>Cerrar</button>
          <h2>{peliculaSeleccionada.title}</h2>
          <p>Descripción: {peliculaSeleccionada.overview}</p>
          <p>Fecha de lanzamiento: {peliculaSeleccionada.release_date}</p>
          {/* Agrega más detalles según lo necesario */}
        </div>
      )}
      <Peliculas peliculas={peliculas} mostrarDetalles={mostrarDetalles} />
      <Favs />
      <Footer />
    </>
  );
}

export default App;
