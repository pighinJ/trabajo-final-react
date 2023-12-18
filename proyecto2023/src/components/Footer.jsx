import React from 'react';
import '../components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Nosotros</h3>
          <p>Somos una página dedicada a ofrecerte las mejores películas y series.</p>
          
        </div>
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/peliculas">Películas</a></li>
            <li><a href="/series">Series</a></li>
            <li><a href="/favoritos">Favoritos</a></li>
            <li><a href="/contacto">Contacto</a></li>
            {/* Puedes agregar más enlaces según necesites */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            {/* Puedes agregar más enlaces a redes sociales */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MiPáginaDePelículas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;