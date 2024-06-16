import Context from '../context/Context'
import { useContext } from 'react'
import img from '../assets/packaging/img.png'
import img1 from '../assets/packaging/img2.png'
import img2 from '../assets/packaging/img3.png'

const Packaging = () => {
    const {lang, data} = useContext(Context);
    return (
        <div className='packaging'>
            <div className="container">
                <div className="packaging_main">
                    <p className="title">{data[lang].packagingTitle}</p>
                    <div className="packaging_main_products">
                        <div className="packaging_main_product">
                            <p className='packaging_main_product_title'>{data[lang].packagingProductTitle1}</p>
                            <img src={img} alt="" />
                            <button className='img_btn img_btn_scale'>{data[lang].packagingProductBtn1}</button>
                        </div>
                        <div className="packaging_main_product">
                            <p className='packaging_main_product_title packaging_main_product_title2'>{data[lang].packagingProductTitle2}</p>
                            <p className='packaging_main_product_subtitle'>{data[lang].packagingProductSubtitle2}</p>
                            <img src={img1} alt="" />
                            <button className='img_btn img_btn_scale'>{data[lang].packagingProductBtn2}</button>
                        </div>
                        <div className="packaging_main_product">
                            <p className='packaging_main_product_title packaging_main_product_title2'>{data[lang].packagingProductTitle31} <br />{data[lang].packagingProductTitle32}</p>
                            <img src={img2} alt="" />
                            <button className='img_btn img_btn_scale'>{data[lang].packagingProductBtn3}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packaging;