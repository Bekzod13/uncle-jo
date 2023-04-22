// import images
import img1 from '../assets/biznes1.png';
import img2 from '../assets/biznes2.png';
import img3 from '../assets/biznes3.png';

const Done = () => {
  return (
    <>
    <div className='container done'>
        <div className="done-cards">
            <div className="done-card">
                <div className="done-top">
                    <div className="done-title">Топ-Селлер в Uzum</div>
                    <img src={img1} alt="image 1" />
                </div>
                <div className="done-body">За 3 месяца оборот более 500 миллионов сум и цифра растет вверх</div>
            </div>
            <div className="done-card">
                <div className="done-top">
                    <div className="done-title">Экономия времени</div>
                    <img src={img2} alt="image 2" />
                </div>
                <div className="done-body">Полный спектр услуг по упаковке, маркировке и фотографированию товаров</div>
            </div>
            <div className="done-card">
                <div className="done-top">
                    <div className="done-title">Дядя Джо учит</div>
                    <img src={img3} alt="image 3" />
                </div>
                <div className="done-body">Услуги по продвижению и консультированию владельцев магазинов в Uzum</div>
            </div>
        </div>
    </div>
    <div className="done-bg">
        <div className="container">
            <h1>Всё готово для вашего бизнеса</h1>
            <p>Компания "Дядя Джо" - это фулфилмент-центр, который предоставляет полный спектр услуг по упаковке, маркировке и фотографированию товаров для продажи на маркетплейсе Uzum. Наша команда опытных специалистов гарантирует высокое качество обработки товаров и своевременную доставку на склад Uzum. 

Мы также предлагаем услуги по продвижению и консультированию владельцев магазинов на маркетплейсе Uzum, чтобы помочь им максимально эффективно реализовать свой товар. 

Благодаря нашему опыту и высокому уровню обслуживания мы стали топ-селлерами на Uzum с более чем тысячей заказов в день и оборотом более 500 миллионов сум за три месяца. Присоединяйтесь к нам и станьте частью успешной команды "Дядя Джо"!</p>
        </div>
    </div>
    </>
  );
}

export default Done;
