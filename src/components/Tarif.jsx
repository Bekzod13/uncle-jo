// img
import img from '../assets/tarif_img/img.png'
import img1 from '../assets/tarif_img/img1.png'
import img2 from '../assets/tarif_img/img2.png'

const Tarif = () => {
    return (
        <div className='tarif'>
            <div className="container">
                <div className="tarif_main">
                    <p className="title">Тарифы и Услуги</p>
                </div>
            </div>
            <div className="tarif_product">
                <div className="container">
                    <div className="tarif_product_main">
                        <div className="tarif_product_main_text">
                            <p className='tarif_product_subtitle'>Базовый Тариф</p>
                            <p className='tarif_product_title'>Добрый Дядя Джо</p>
                            <ul>
                                <li>У Дяди Джо есть отличное предложение для производителей, дистрибьюторов и поставщиков.</li>
                                <li>Дядя Джо берет всю работу на себя по продаже вашего товара.</li>
                                <li>Вы его предоставляете, а Дядя Джо реализует!</li>
                            </ul>
                        </div>
                        <div className="tarif_product_main_img">
                            <img src={img} alt="" />
                            <button className='img_btn'>Бесплатно</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tarif_product blue_bg">
                <div className="container">
                    <div className="tarif_product_main">
                        <div className="tarif_product_main_text">
                            <p className='tarif_product_subtitle white_bg'>Стандартный Тариф</p>
                            <p className='tarif_product_title white_bg'>Продавец Дядя Джо</p>
                            <ul>
                                <li>Станьте продавцом в Uzum. </li>
                                <li>Дядя Джо создаст за вас магазины в Uzum.</li>
                                <li>Создаст ĸарточĸи ваших товаров в Uzum.</li>
                                <li>Выведет до 1000 единиц и доставит товар на сĸлад.</li>
                                <li>Будет управлять процессами вашего магазина - 1 месяц.</li>
                            </ul>
                        </div>
                        <div className="tarif_product_main_img">
                            <img src={img1} alt="" />
                            <button className='img_btn'>1,5млн сум +10% от прибыли</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tarif_product blue">
                <div className="container">
                    <div className="tarif_product_main">
                        <div className="tarif_product_main_text">
                            <p className='tarif_product_subtitle white_bg'>Премиальный Тариф</p>
                            <p className='tarif_product_title white_bg'>Серьезный Дядя Джо</p>
                            <ul>
                                <li>Этот премиальный тариф, предназначен для серьезных владельцев бизнеса, которые нуждаются в абсолютно индивидуальном подходе.</li>
                                <li>Дядя Джо предоставляет полный спектр услуг</li>
                                <li>Полная поддержка 24/7</li>
                            </ul>
                        </div>
                        <div className="tarif_product_main_img">
                            <img src={img2} alt="" />
                            <button className='img_btn'>Бесĸонечно - ꝏ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarif;