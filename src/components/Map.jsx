import { useContext } from 'react';
import Location from './Location';
import Context from '../context/Context';

const Map = () => {
    const {lang, data} = useContext(Context);
    return (
        <div className='map'>
            <div className="container">
                <div className="map_main">
                    <p className="title">{data[lang].addressTitle}</p>
                    <div className='map_main_div'>
                        <div className="map_main_div_img">
                            <Location/>
                        </div>
                        <div className="map_main_div_text">
                            <p>{data[lang].addressSubTitle1}</p>
                            <p className='map_main_div_text_body one'>{data[lang].addressTitle1}</p>
                            <p>{data[lang].addressSubTitle2}</p>
                            <p className='map_main_div_text_body'>{data[lang].addressTitle2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;