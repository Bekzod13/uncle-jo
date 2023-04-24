// img
import img from '../assets/questions_img/img.png'
// icons
import {AiOutlinePlus} from 'react-icons/ai'

const Questions = () => {
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
                        <div className='questions_main_div_text_border'>
                            <p>Работаете с маленьким объемом товара?</p>
                            <p><AiOutlinePlus/></p>
                        </div>
                        <div className='questions_main_div_text_border'>
                            <p>Работаете с маленьким объемом товара?</p>
                            <p><AiOutlinePlus/></p>
                        </div>
                        <div className='questions_main_div_text_border'>
                            <p>Работаете с маленьким объемом товара?</p>
                            <p><AiOutlinePlus/></p>
                        </div>
                        <div className='questions_main_div_text_border'>
                            <p>Работаете с маленьким объемом товара?</p>
                            <p><AiOutlinePlus/></p>
                        </div>
                        <div className='questions_main_div_text_border'>
                            <p>Работаете с маленьким объемом товара?</p>
                            <p><AiOutlinePlus/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions