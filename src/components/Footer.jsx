// Link
import { Link } from 'react-router-dom';
import img from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer_main">
                    <div className="footer_main_logo">
                        <img src={img} alt="" />
                    </div>
                    <div className="footer_main_links">
                        <a href='#hero' to='/'>О Дяде Джо</a>
                        <a href='#tarif' to='/'>Тарифы и услуги</a>
                        <a href='#faq' to='/'>FAQ</a>
                        <a href='#contact' to='/'>Контакты</a>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p>Все права защищены Любое копирование и воспроизведение текста, в том числе частичное
                        и в любых формах, без письменного разрешения правообладателя запрещено.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;