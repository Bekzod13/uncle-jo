import Context from '../context/Context'
import { useState, useContext } from 'react'
// img
import img from '../assets/questions_img/img.png'
// icons
import { AiOutlinePlus } from 'react-icons/ai'

const Questions = () => {

    const {lang, data} = useContext(Context);

    const [none, setNone] = useState(false);
    const [noneOne, setNoneOne] = useState(false);
    const [noneTwo, setNoneTwo] = useState(false);
    const [noneThree, setNoneThree] = useState(false);
    const [noneFour, setNoneFour] = useState(false);
    
    const handleNone = () => setNone(!none);
    const handleNoneOne = () => setNoneOne(!noneOne);
    const handleNoneTwo = () => setNoneTwo(!noneTwo);
    const handleNoneThree = () => setNoneThree(!noneThree);
    const handleNoneFour = () => setNoneFour(!noneFour);
    return (
        <div className='questions' id='faq'>
            <div className="container">
                <div className="questions_main">
                    <p className="title">{data[lang].questionsTitle}</p>
                    <div className="questions_main_div">
                        <div className="questions_main_div_img">
                            <img src={img} alt="" />
                        </div>
                        <div className="questions_main_div_text">
                            <div className='questions_boxes'>
                                <div className='questions_main_div_text_border'>
                                    <p className={none ? 'questions_main_div_text_border_title title_big' : 'questions_main_div_text_border_title'}>{data[lang].questionTitle1}</p>
                                    <p className={none ? 'questions_plus questions_plus_big' : 'questions_plus'} onClick={handleNone}><AiOutlinePlus /></p>
                                </div>
                                <div className={none ? "questions_box questions_box_flex" : "questions_box"}>
                                    <p className='questions_box_body'>{data[lang].questionBody1}</p>
                                </div>
                            </div>
                            <div className='questions_boxes'>
                                <div className='questions_main_div_text_border'>
                                    <p className={noneOne ? 'questions_main_div_text_border_title title_big' : 'questions_main_div_text_border_title'}>{data[lang].questionTitle2}</p>
                                    <p className={noneOne ? 'questions_plus questions_plus_big' : 'questions_plus'} onClick={handleNoneOne}><AiOutlinePlus /></p>
                                </div>
                                <div className={noneOne ? "questions_box questions_box_flex" : "questions_box"}>
                                    <p className='questions_box_body'>{data[lang].questionBody2}</p>
                                </div>
                            </div>
                            <div className='questions_boxes'>
                                <div className='questions_main_div_text_border'>
                                    <p className={noneTwo ? 'questions_main_div_text_border_title title_big' : 'questions_main_div_text_border_title'}>{data[lang].questionTitle3} </p>
                                    <p className={noneTwo ? 'questions_plus questions_plus_big' : 'questions_plus'} onClick={handleNoneTwo}><AiOutlinePlus /></p>
                                </div>
                                <div className={noneTwo ? "questions_box questions_box_flex" : "questions_box"}>
                                    <p className='questions_box_body'>{data[lang].questionBody3}</p>
                                </div>
                            </div>
                            <div className='questions_boxes'>
                                <div className='questions_main_div_text_border'>
                                    <p className={noneThree ? 'questions_main_div_text_border_title title_big' : 'questions_main_div_text_border_title'}>{data[lang].questionTitle4}</p>
                                    <p className={noneThree ? 'questions_plus questions_plus_big' : 'questions_plus'} onClick={handleNoneThree}><AiOutlinePlus /></p>
                                </div>
                                <div className={noneThree ? "questions_box questions_box_flex" : "questions_box"}>
                                    <p className='questions_box_body'>{data[lang].questionBody4}</p>
                                </div>
                            </div>
                            <div className='questions_boxes'>
                                <div className='questions_main_div_text_border'>
                                    <p className={noneFour ? 'questions_main_div_text_border_title title_big' : 'questions_main_div_text_border_title'}>{data[lang].questionTitle5}</p>
                                    <p className={noneFour ? 'questions_plus questions_plus_big' : 'questions_plus'} onClick={handleNoneFour}><AiOutlinePlus /></p>
                                </div>
                                <div className={noneFour ? "questions_box questions_box_flex" : "questions_box"}>
                                    <p className='questions_box_body'>{data[lang].questionBody5}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions