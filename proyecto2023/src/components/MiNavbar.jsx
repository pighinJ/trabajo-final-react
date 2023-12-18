import React from "react";
import {NavBar,Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fortawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const MiNavbar = () => {
    return(
        <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <FontAwesomeIcon icon={faBars} />
        Mi Aplicación
      </Navbar.Brand>
      <Nav className="ml-auto">
        {/* Agrega aquí más elementos de la barra de navegación si es necesario */}
      </Nav>
    </Navbar>
  );
    
    
};
export default MiNavbar;