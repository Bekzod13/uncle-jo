import { useContext } from 'react';
import Context from '../context/Context';
// img
import img from '../assets/tarif_img/img.png';
import img1 from '../assets/tarif_img/img1.png';
import img2 from '../assets/tarif_img/img2.png';

// import icons 
import {ImInfinite} from 'react-icons/im';

const Tarif = () => {
    const {lang, data} = useContext(Context);
    return (
        <div className='tarif' id='tarif'>
            <div className="container">
                <div className="tarif_main">
                    <p className="title">{data[lang].navLink2}</p>
                </div>
            </div>
            <div className="tarif_product">
                <div className="container">
                    <div className="tarif_product_main">
                        <div className="tarif_product_main_text">
                            <p className='tarif_product_subtitle'>{data[lang].tarifSubtitle1}</p>
                            <p className='tarif_product_title'>{data[lang].tarifTitle1}</p>
                            <ul>
                                <li>{data[lang].tarifBody11}</li>
                                <li>{data[lang].tarifBody12}</li>
                                <li>{data[lang].tarifBody13}</li>
                            </ul>
                        </div>
                        <div className="tarif_product_main_img">
                            <img src={img} alt="" />
                            <button className='img_btn'>{data[lang].tarifBtn1}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tarif_product blue_bg">
                <div className="container">
                    <div className="tarif_product_main">
                        <div className="tarif_product_main_text">
                            <p className='tarif_product_subtitle white_bg'>{data[lang].tarifSubtitle2}</p>
                            <p className='tarif_product_title white_bg'>{data[lang].tarifTitle2}</p>
                            <ul>
                                <li>{data[lang].tarifBody21}</li>
                                <li>{data[lang].tarifBody22}</li>
                                <li>{data[lang].tarifBody23}</li>
                                <li>{data[lang].tarifBody24}</li>
                                <li>{data[lang].tarifBody25}</li>
                            </ul>
                        </div>
                        <div className="tarif_product_main_img">
                            <img src={img1} alt="" />
                            <button className='img_btn'>{data[lang].tarifBtn2}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tarif_product blue">
                <div className="container">
                    <div className="tarif_product_main">
                        <div className="tarif_product_main_text">
                            <p className='tarif_product_subtitle white_bg'>{data[lang].tarifSubtitle3}</p>
                            <p className='tarif_product_title white_bg'>{data[lang].tarifTitle3}</p>
                            <ul>
                                <li>{data[lang].tarifBody31}</li>
                                <li>{data[lang].tarifBody32}</li>
                                <li>{data[lang].tarifBody33}</li>
                            </ul>
                        </div>
                        <div className="tarif_product_main_img">
                            <img src={img2} alt="" />
                            <button className='img_btn'>{data[lang].tarifBtn3}<span className='infinity'><ImInfinite/></span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarif;