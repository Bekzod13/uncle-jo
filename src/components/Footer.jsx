import Context from '../context/Context';
import { useContext } from 'react';
// import image
import img from '../assets/logo.svg'

const Footer = () => {
    const {lang, data} = useContext(Context);
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer_main">
                    <div className="footer_main_logo">
                        <img src={img} alt="" />
                    </div>
                    <div className="footer_main_links">
                        <a href='#hero' to='/'>{data[lang].navLink1}</a>
                        <a href='#tarif' to='/'>{data[lang].navLink2}</a>
                        <a href='#faq' to='/'>{data[lang].navLink3}</a>
                        <a href='#contact' to='/'>{data[lang].navLink4}</a>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p>{data[lang].footerText}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;