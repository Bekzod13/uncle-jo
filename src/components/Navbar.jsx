import { useContext, useState } from 'react';
import Context from '../context/Context';
import {Link} from 'react-router-dom';

// import images
import logo from '../assets/logo.png';

// import images
import {AiOutlineCaretDown} from 'react-icons/ai';
import {FaBars} from 'react-icons/fa';
import {GrClose} from 'react-icons/gr';


const Navbar = () => {

    const [bar, setBar] = useState(true);
    const {lang, setLang, data} = useContext(Context);

  return (
    <>
        <nav>
            <header className="container">
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="Uncle Jo" />
                </Link>
                <div className={bar ? "nav-main active" : "nav-main"}>
                    <div className="bar-close"  onClick={()=>setBar(!bar)}>
                        <GrClose/>
                    </div>
                    <div className="nav-lang">
                        <div className="nav-current-lang">
                            <b>{data.language[lang].name}</b>
                            <span>
                                <AiOutlineCaretDown/>
                            </span>
                        </div>
                        <div className="nav-more-langs">
                            <div className="has-lang" onClick={()=>setLang(0)}>Uzbek</div>
                            <div className="has-lang" onClick={()=>setLang(1)}>Русский</div>
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
                <div className="bar" onClick={()=>setBar(!bar)}>
                    <FaBars/>
                </div>
            </header>
        </nav>
        <div className="navbar-free"></div>
    </>
  );
}

export default Navbar;
