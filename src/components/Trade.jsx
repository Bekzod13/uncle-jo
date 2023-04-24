import React from 'react'

const Trade = () => {
    return (
        <div className='trade'>
            <div className="container">
                <div className="trade_main">
                    <p className="title">Процесс начала торговли в Uzum</p>
                </div>
            </div>
            <div className="trade_divs">
                <div className="container">
                    <div className="trade_divs_products">
                        <div className="trade_divs_product">
                            <div>
                                <p className='trade_divs_product_num'>1</p>
                            </div>
                            <div className="trade_divs_product_right">
                                <p className='trade_divs_product_right_title'>Оставляй заявĸу или звони напрямую Дяде Джо</p>
                                <p className='trade_divs_product_right_body'>Дядя Джо свяжется с вами в течении 24 часов, чтобы обсудить, как помочь вашему бизнесу.</p>
                            </div>
                        </div>
                        <div className="trade_divs_product">
                            <div>
                                <p className='trade_divs_product_num'>2</p>
                            </div>
                            <div className="trade_divs_product_right">
                                <p className='trade_divs_product_right_title'>Консультируем, подбираем индивидуальный подход</p>
                                <p className='trade_divs_product_right_body'>Мы предоставляем уникальные стратегии и особые решения, чтобы обеспечить оптимальное управление бизнеса.</p>
                            </div>
                        </div>
                    </div>
                    <div className="trade_divs_products trade_divs_products2">
                        <div className="trade_divs_product">
                            <div>
                                <p className='trade_divs_product_num'>3</p>
                            </div>
                            <div className="trade_divs_product_right">
                                <p className='trade_divs_product_right_title'>Соглашение о сотрудничестве</p>
                                <p className='trade_divs_product_right_body'>Произведем официальное оформление нашего сотрудничества письменным договором с печатью.</p>
                            </div>
                        </div>
                        <div className="trade_divs_product">
                            <div>
                                <p className='trade_divs_product_num'>4</p>
                            </div>
                            <div className="trade_divs_product_right">
                                <p className='trade_divs_product_right_title'>Вы в Uzum-e!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade