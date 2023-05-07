import { useContext, useState } from 'react';
import Context from '../context/Context';
import {Link} from 'react-router-dom';

// import images
import logo from '../assets/logo.svg';

// import images
import {AiOutlineCaretDown, AiOutlinePlus} from 'react-icons/ai';
import {FaBars} from 'react-icons/fa';


const Navbar = () => {

    const [bar, setBar] = useState(true);
    const {lang, setLang, data, setModal} = useContext(Context);

  return (
    <>
        <nav>
            <header className="container">
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="Uncle Jo" />
                </Link>
                <div className={bar ? "nav-main active" : "nav-main"}>
                    <div className="bar-close message-close questions_plus questions_plus_big"  onClick={()=>setBar(!bar)}>
                        <AiOutlinePlus />
                    </div>
                    <div className="nav-lang">
                        <div className="nav-current-lang">
                            <b>{data[lang].name}</b>
                            <span>
                                <AiOutlineCaretDown/>
                            </span>
                        </div>
                        <div className="nav-more-langs">
                            <div className="has-lang" onClick={()=>setLang(0)}>{data[0].name}</div>
                            <div className="has-lang" onClick={()=>setLang(1)}>{data[1].name}</div>
                        </div>
                    </div>
                    <div className="nav-links">
                        <a href='#hero' className="nav-link">{data[lang].navLink1}</a>
                        <a href='#tarif' className="nav-link">{data[lang].navLink2}</a>
                        <a href='#faq' className="nav-link">{data[lang].navLink3}</a>
                        <a href='#contact' className="nav-link">{data[lang].navLink4}</a>
                    </div>
                    <div className="nav-order-btn" onClick={()=>setModal(true)}>{data[lang].sendBtn}</div>
                </div>
                <div className="bar " onClick={()=>setBar(!bar)}>
                    <FaBars />
                </div>
            </header>
        </nav>
        <div className="navbar-free"></div>
    </>
  );
}

export default Navbar;