import { useState } from 'react'
// img
import img from '../assets/questions_img/img.png'
// icons
import { AiOutlinePlus } from 'react-icons/ai'

const Questions = () => {
    const [none, setNone] = useState();
    const [noneOne, setNoneOne] = useState();
    const [noneTwo, setNoneTwo] = useState();
    const [noneThree, setNoneThree] = useState();
    const [noneFour, setNoneFour] = useState();
    
    const handleNone = () => setNone(!none);
    const handleNoneOne = () => setNoneOne(!noneOne);
    const handleNoneTwo = () => setNoneTwo(!noneTwo);
    const handleNoneThree = () => setNoneThree(!noneThree);
    const handleNoneFour = () => setNoneFour(!noneFour);
    return (
        <div className='questions'>
            <div className="container">
                <div className="questions_main">
                    <p className="title">Часто задаваемые вопросы</p>
                    <div className="questions_main_div">
                        <div className="questions_main_div_img">
                            <img src={img} alt="" />
                        </div>
                        <div className="questions_main_div_text">
                            <div className='questions_boxes'>
                                <div className='questions_main_div_text_border'>
                                    <p>Работаете с маленьким объемом товара?</p>
                                    <p className={none ? 'questions_plus questions_plus_big' : 'questions_plus'} onClick={handleNone}><AiOutlinePlus /></p>
                                </div>
                                <div className={none ? "questions_box questions_box_flex" : "questions_box"}>
                                    <p className='questions_box_body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque quia nobis tempora autem consequatur veritatis dolorum eius qui maxime pariatur, deleniti reiciendis animi hic officia alias necessitatibus repellat non nemo aut iusto! Eum libero, autem quasi laboriosam ab illo optio nesciunt culpa natus maiores error assumenda deserunt deleniti, atque dignissimos consectetur rem amet ipsa nemo laudantium fuga voluptatum, mollitia accusamus reiciendis. Fuga nemo cumque at nam necessitatibus doloremque nostrum rerum a officiis excepturi nihil temporibus molestias similique distinctio, earum eveniet quos sed consequatur obcaecati alias laborum perferendis eaque eligendi. Voluptate quam commodi vel molestias, fugit itaque eaque aliquid alias.</p>
                                </div>
                            </div>
                            <div className='questions_boxes'>
                                <div className='questions_main_div_text_border'>
                                    <p>Какие способы доставки товара имеются у Дяди Джо?</p>
                                    <p className={noneOne ? 'questions_plus questions_plus_big' : 'questions_plus'} onClick={handleNoneOne}><AiOutlinePlus /></p>
                                </div>
                                <div className={noneOne ? "questions_box questions_box_flex" : "questions_box"}>
                                    <p className='questions_box_body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque quia nobis tempora autem consequatur veritatis dolorum eius qui maxime pariatur, deleniti reiciendis animi hic officia alias necessitatibus repellat non nemo aut iusto! Eum libero, autem quasi laboriosam ab illo optio nesciunt culpa natus maiores error assumenda deserunt deleniti, atque dignissimos consectetur rem amet ipsa nemo laudantium fuga voluptatum, mollitia accusamus reiciendis. Fuga nemo cumque at nam necessitatibus doloremque nostrum rerum a officiis excepturi nihil temporibus molestias similique distinctio, earum eveniet quos sed consequatur obcaecati alias laborum perferendis eaque eligendi. Voluptate quam commodi vel molestias, fugit itaque eaque aliquid alias.</p>
                                </div>
                            </div>
                            <div className='questions_boxes'>
                                <div className='questions_main_div_text_border'>
                                    <p>Как быстро мой товар будет выставлен на продажу? </p>
                                    <p className={noneTwo ? 'questions_plus questions_plus_big' : 'questions_plus'} onClick={handleNoneTwo}><AiOutlinePlus /></p>
                                </div>
                                <div className={noneTwo ? "questions_box questions_box_flex" : "questions_box"}>
                                    <p className='questions_box_body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque quia nobis tempora autem consequatur veritatis dolorum eius qui maxime pariatur, deleniti reiciendis animi hic officia alias necessitatibus repellat non nemo aut iusto! Eum libero, autem quasi laboriosam ab illo optio nesciunt culpa natus maiores error assumenda deserunt deleniti, atque dignissimos consectetur rem amet ipsa nemo laudantium fuga voluptatum, mollitia accusamus reiciendis. Fuga nemo cumque at nam necessitatibus doloremque nostrum rerum a officiis excepturi nihil temporibus molestias similique distinctio, earum eveniet quos sed consequatur obcaecati alias laborum perferendis eaque eligendi. Voluptate quam commodi vel molestias, fugit itaque eaque aliquid alias.</p>
                                </div>
                            </div>
                            <div className='questions_boxes'>
                                <div className='questions_main_div_text_border'>
                                    <p>Как подобрать идеальную упаковку для вашего товара? </p>
                                    <p className={noneThree ? 'questions_plus questions_plus_big' : 'questions_plus'} onClick={handleNoneThree}><AiOutlinePlus /></p>
                                </div>
                                <div className={noneThree ? "questions_box questions_box_flex" : "questions_box"}>
                                    <p className='questions_box_body'>Мы учитываем все индивидуальные характеристики и размеры, чтобы обеспечить максимальную защиту. Например, хрупкие изделия мы обернем в воздушно-пузырьковую пленку, а объемные товары - в стрейч-пленку. Мы позаботимся о том, чтобы ваш товар был надежно упакован и готов к отправке.</p>
                                </div>
                            </div>
                            <div className='questions_boxes'>
                                <div className='questions_main_div_text_border'>
                                    <p>Какие методы оплаты доступны у Дяди Джо?</p>
                                    <p className={noneFour ? 'questions_plus questions_plus_big' : 'questions_plus'} onClick={handleNoneFour}><AiOutlinePlus /></p>
                                </div>
                                <div className={noneFour ? "questions_box questions_box_flex" : "questions_box"}>
                                    <p className='questions_box_body'>Мы учитываем все индивидуальные характеристики и размеры, чтобы обеспечить максимальную защиту. Например, хрупкие изделия мы обернем в воздушно-пузырьковую пленку, а объемные товары - в стрейч-пленку. Мы позаботимся о том, чтобы ваш товар был надежно упакован и готов к отправке.</p>
                                </div>
                            </div>
                            {/* <div className='questions_main_div_text_border'>
                                <p>Работаете с маленьким объемом товара?</p>
                                <p><AiOutlinePlus /></p>
                            </div>
                            <div className='questions_main_div_text_border'>
                                <p>Работаете с маленьким объемом товара?</p>
                                <p><AiOutlinePlus /></p>
                            </div>
                            <div className='questions_main_div_text_border'>
                                <p>Работаете с маленьким объемом товара?</p>
                                <p><AiOutlinePlus /></p>
                            </div>
                            <div className='questions_main_div_text_border'>
                                <p>Работаете с маленьким объемом товара?</p>
                                <p><AiOutlinePlus /></p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions