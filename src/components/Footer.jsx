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
                        <Link to='/'>О Дяде Джо</Link>
                        <Link to='/'>Тарифы и услуги</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Контакты</Link>
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