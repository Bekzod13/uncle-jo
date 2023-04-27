// img
import img from '../assets/contact_img/img.png'
// icons
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="container">
                <div className="contact_main">
                    <p className="title">Контакты</p>
                    <div className="contact_main_div">
                        <div className="contact_main_div_left">
                            <div className="contact_main_div_left_form">
                                <form action="">
                                    <div className='contact_main_div_left_form_div'>
                                        <input type="text" placeholder='ФИО' />
                                        <input type="text" placeholder='Название компании' />
                                    </div>
                                    <div className='contact_main_div_left_form_div'>
                                        <input type="text" placeholder='+998' />
                                        <input type="text" placeholder='Email' />
                                    </div>
                                    <button className='contact_main_div_left_form_btn'>Отправить заявку</button>
                                </form>
                            </div>
                            <div className="contact_main_div_left_bottom">
                                <div className="contact_main_div_left_bottom_left">
                                    <p>Телефон: </p>
                                    <a href='tel:+998-90-806-50-67'>+998 90 806 50 67</a>
                                    <a href='tel:+998-90-806-50-67'>+998 99 520 88 55</a>
                                </div>
                                <div className="contact_main_div_left_bottom_right">
                                    <p>Мы в соцсетях::</p>
                                    <div className='contact_main_div_left_bottom_right_div'>
                                        <a href='https://www.facebook.com/profile.php?id=100091669283557'><BsFacebook /></a>
                                        <a href='https://www.instagram.com/uncle_jo_fulfillment/'><BsInstagram /></a>
                                        <a href='https://t.me/uncle_jo_fulfillment'><BsTelegram /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_main_div_img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact