import React, { useState } from 'react';
import '../components/Search.css';
import Swal from 'sweetalert2';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === '') {
      // Muestra una alerta si el campo de búsqueda está vacío
      Swal.fire({
        icon: 'warning',
        title: 'Campo de búsqueda vacío',
        text: 'Por favor, ingresa un término de búsqueda',
      });
      return; // Evita continuar con la búsqueda si el campo está vacío
    }

    // Llama a la función de búsqueda proporcionada como prop
    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar películas..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default Search;