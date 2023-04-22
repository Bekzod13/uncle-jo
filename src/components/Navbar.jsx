import {Link} from 'react-router-dom';

// import images
import logo from '../assets/logo.png';

// import images
import {AiOutlineCaretDown} from 'react-icons/ai';

const Navbar = () => {
  return (
    <>
        <nav>
        <header className="container">
            <Link to="/" className="nav-logo">
                <img src={logo} alt="Uncle Jo" />
            </Link>
            <div className="nav-main">
                <div className="nav-lang">
                    <div className="nav-current-lang">
                        <b>Русский</b>
                        <span>
                            <AiOutlineCaretDown/>
                        </span>
                    </div>
                </div>
                <div className="nav-links">
                    <div className="nav-link">О Дяде Джо</div>
                    <div className="nav-link">Тарифы и услуги</div>
                    <div className="nav-link">FAQ</div>
                    <div className="nav-link">Контакты</div>
                </div>
                <div className="nav-order-btn">Оставь заявку Дяде Джо</div>
            </div>
        </header>
        </nav>
        <div className="navbar-free"></div>
    </>
  );
}

export default Navbar;
