import { useContext } from "react"
import Context from "../context/Context"

const Trade = () => {
    const {lang, data} = useContext(Context);
    return (
        <div className='trade'>
            <div className="container">
                <div className="trade_main">
                    <p className="title">{data[lang].tradeTitle}</p>
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
                                <p className='trade_divs_product_right_title'>{data[lang].tradeTitle1}</p>
                                <p className='trade_divs_product_right_body'>{data[lang].tradeBody1}</p>
                            </div>
                        </div>
                        <div className="trade_divs_product">
                            <div>
                                <p className='trade_divs_product_num'>2</p>
                            </div>
                            <div className="trade_divs_product_right">
                                <p className='trade_divs_product_right_title'>{data[lang].tradeTitle2}</p>
                                <p className='trade_divs_product_right_body'>{data[lang].tradeBody2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="trade_divs_products trade_divs_products2">
                        <div className="trade_divs_product">
                            <div>
                                <p className='trade_divs_product_num'>3</p>
                            </div>
                            <div className="trade_divs_product_right">
                                <p className='trade_divs_product_right_title'>{data[lang].tradeTitle3}</p>
                                <p className='trade_divs_product_right_body'>{data[lang].tradeBody3}</p>
                            </div>
                        </div>
                        <div className="trade_divs_product">
                            <div>
                                <p className='trade_divs_product_num'>4</p>
                            </div>
                            <div className="trade_divs_product_right">
                                <p className='trade_divs_product_right_title'>{data[lang].tradeTitle4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade