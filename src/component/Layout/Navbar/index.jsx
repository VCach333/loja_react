/* style import */
import styles from './style.module.css'

/* icon import */
import {FaBars, FaUserCircle} from 'react-icons/fa'

export default function Navbar() {

    return (

        <nav>
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo">
                    <img src="/files/img/logo/favicon_trans.png" alt="LOJA" className={styles.logo} />
                </a>

                <a href="#" className="hide-on-large-only">
                    <FaBars />
                </a>

                <ul className="hide-on-med-and-down right">
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Categorias</a></li>
                    <li>
                        <a href="#">
                            <FaUserCircle />
                        </a>
                    </li>
                </ul>

                <a href="#" className="right hide-on-large-only">
                    <FaUserCircle />
                </a>
            </div>
        </nav>
    )
}