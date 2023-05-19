import Context from '../context/Context';
import { useContext, useRef } from 'react';

// img
import img from '../assets/contact_img/img.png';
// icons
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';

const Contact = () => {

    const {lang, data, modal, setModal, modalMessage, setModalMessage} = useContext(Context);

    const nameRef = useRef();
    const companyRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();


    let tg = {
        token: "6043180980:AAHO1AgfOrTaFfGDJUnhji_iiggbUwJXhks",
        chat_id: "-1001868258872"
    }
    
    function sendMessage(text)
    {
        const url = `https://api.telegram.org/bot${tg.token}/sendMessage` 
        const obj = {
            chat_id: tg.chat_id, 
            parse_mode: 'HTML',
            text: text 
        };
        const xht = new XMLHttpRequest();
        xht.open("POST", url, true);
        xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        xht.send(JSON.stringify(obj));
    }
    const formSender = (e) => {
        e.preventDefault();
        if(
            nameRef.current.value !== '' &&
            companyRef.current.value !== '' &&
            phoneRef.current.value !== '' &&
            emailRef.current.value !== ''
        ){

            let message = 
            `
            <b>✅Заявка от сайта</b>\n
            <b>👤Отправитель: </b> ${nameRef.current.value}\n
            <b>🏢Название компании: </b> ${companyRef.current.value}\n
            <b>☎️Номер телефона: </b> ${phoneRef.current.value}\n
            <b>📧Email: </b> ${emailRef.current.value}\n
            `;
            sendMessage(message);
            nameRef.current.value = '',
            companyRef.current.value = '',
            phoneRef.current.value = '',
            emailRef.current.value = '',
            setModalMessage(true);
                setTimeout(() => {
                    setModal(false);
                    setModalMessage(false);
                }, 5000);
        }else{
            alert(data[lang].error);
        }

  
    }
       
    return (
        <>
        <div className='contact' id='contact'>
            <div className="container">
                <div className="contact_main">
                    <p className="title">{data[lang].navLink4}</p>
                    <div className="contact_main_div">
                        <div className="contact_main_div_left">
                            <div className="contact_main_div_left_form">
                                <form onSubmit={formSender} action="" className='contact_main_div_left_form_box'>
                                    <div className='contact_main_div_left_form_div'>
                                        <input ref={nameRef} type="text" placeholder={data[lang].placeholderFish} />
                                        <input ref={companyRef} type="text" placeholder={data[lang].placeholderCompany} />
                                    </div>
                                    <div className='contact_main_div_left_form_div'>
                                        <input ref={phoneRef} type="text" placeholder='+998' />
                                        <input ref={emailRef} type="text" placeholder='Email' />
                                    </div>
                                    <button className='contact_main_div_left_form_btn'>{data[lang].sendBtnShort}</button>
                                </form>
                            </div>
                            <div className="contact_main_div_left_bottom">
                                <div className="contact_main_div_left_bottom_left">
                                    <p>{data[lang].phone}</p>
                                    <a href='tel:+998-90-806-50-67'>+998 97 758 91 52</a>
                                    <a href='tel:+998-99-520-88-55'>+998 99 520 88 55</a>
                                </div>
                                <div className="contact_main_div_left_bottom_right">
                                    <p>{data[lang].social}</p>
                                    <div className='contact_main_div_left_bottom_right_div'>
                                        <a href='https://www.facebook.com/profile.php?id=100091669283557'><BsFacebook /></a>
                                        <a href='https://www.instagram.com/uncle_jo_fulfillment/'><BsInstagram /></a>
                                        <a href='https://t.me/uncle_jo_fulfillment'><BsTelegram /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_main_div_img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={ modal ? "modal-contact" : "modal-contact none"}>
            <div className="modal-contact-bg" onClick={()=>setModal(false)}></div>
            <form onSubmit={formSender} action="" className='contact_main_div_left_form_box modal'>
                <h2>{data[lang].sendBtn}</h2>
                <div className='contact_main_div_left_form_div'>
                    <input ref={nameRef} type="text" placeholder={data[lang].placeholderFish} />
                    <input ref={companyRef} type="text" placeholder={data[lang].placeholderCompany} />
                </div>
                <div className='contact_main_div_left_form_div'>
                    <input ref={phoneRef} type="text" placeholder='+998' />
                    <input ref={emailRef} type="text" placeholder='Email' />
                </div>
                <button className='contact_main_div_left_form_btn'>{data[lang].sendBtnShort}</button>
            </form>
        </div>
        <div className={ modalMessage ? "message-modal" : "message-modal none" }>
            <div className="message-modal-bg" onClick={()=>setModalMessage(false)}></div>
            <div className="message-modal-main ok">
                <div className="message-close questions_plus questions_plus_big" onClick={()=>setModalMessage(false)}><AiOutlinePlus /></div>
                <p>
                   {data[lang].thanks}
                </p>
            </div>
        </div>
        </>
    )
}

export default Contact