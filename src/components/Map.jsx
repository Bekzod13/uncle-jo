import Location from './Location';

const Map = () => {
    return (
        <div className='map'>
            <div className="container">
                <div className="map_main">
                    <p className="title">Наш адрес</p>
                    <div className='map_main_div'>
                        <div className="map_main_div_img">
                            <Location/>
                        </div>
                        <div className="map_main_div_text">
                            <p>Адрес:</p>
                            <p className='map_main_div_text_body'>г. Ташкент, Шайхантахурский район, улица Хадра, 17</p>
                            <p>Ориентир:</p>
                            <p className='map_main_div_text_body'>напротив бывших торговых рядов “Навои”, сзади “Ганги”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;