import { useState } from 'react';
import './styles.css';
import { ShoppingCart, User } from 'lucide-react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(open => !open);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className="navbar">
                <div className="logo-nav">
                    <a href="/">SebaStore</a>
                </div>

                <nav className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/" onClick={handleLinkClick}>Inicio</a></li>
                        <li><a href="/Products" onClick={handleLinkClick}>Productos</a></li>
                        <li><a href="/contact" onClick={handleLinkClick}>Contacto</a></li>
                    </ul>
                    <div className="btn-login-nav mobile">
                        <button
                            className="button-global btn-menu"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </nav>

                {/* ÍCONOS + LOGIN DE ESCRITORIO */}
                <div className="buttons-nav">
                    <div className="icons-nav">
                        <ShoppingCart className="icon-nav" />
                        <User className="icon-nav" />
                    </div>
                    <div className="btn-login-nav desktop">
                        <button className="button-global">Iniciar Sesión</button>
                    </div>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <div></div><div></div><div></div>
                </div>
            </div>

            <div
                className={`overlay-navbar ${menuOpen ? 'show' : ''}`}
                onClick={toggleMenu}
            >
            </div>
        </>
    );
}

export default Navbar;
