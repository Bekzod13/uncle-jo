import img from '../assets/img.png'

const Map = () => {
    return (
        <div className='map'>
            <div className="container">
                <div className="map_main">
                    <p className="title">Наш адрес</p>
                    <div className='map_main_div'>
                        <div className="map_main_div_img">
                            <img src={img} alt="" />
                        </div>
                        <div className="map_main_div_text">
                            <p>Адрес:</p>
                            <p className='map_main_div_text_body'>г. Ташкент, Шайхантаурский район, улица Хадра, 17</p>
                            <p>Ориентир:</p>
                            <p className='map_main_div_text_body'>Напротив Торговых Рядов "Малика"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;