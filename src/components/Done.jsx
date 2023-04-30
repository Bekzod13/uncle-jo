import { useContext } from 'react';
import Context from '../context/Context';
// import images
import img1 from '../assets/biznes1.png';
import img2 from '../assets/biznes2.png';
import img3 from '../assets/biznes3.png';

const Done = () => {
    const {lang, data} = useContext(Context);
    return (
        <>
            <div className='container done'>
                <div className="done-cards-box">
                    <div className="done-cards">
                        <div className="done-card">
                            <div className="done-top">
                                <div className="done-title">{data[lang].doneTopCardTitle1}</div>
                                <img src={img1} alt="image 1" />
                            </div>
                            <div className="done-body">{data[lang].doneTopCardBody1}</div>
                        </div>
                        <div className="done-card">
                            <div className="done-top">
                                <div className="done-title">{data[lang].doneTopCardTitle2}</div>
                                <img src={img2} alt="image 2" />
                            </div>
                            <div className="done-body">{data[lang].doneTopCardBody2}</div>
                        </div>
                        <div className="done-card">
                            <div className="done-top">
                                <div className="done-title">{data[lang].doneTopCardTitle3}</div>
                                <img src={img3} alt="image 3" />
                            </div>
                            <div className="done-body">{data[lang].doneTopCardBody3}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="done-bg">
                <div className="container">
                    <span>{data[lang].doneSubtitle}</span>
                    <p className='done_bg_title'>{data[lang].doneTitle}</p>
                    <div className='done-bg_div'>
                        <p>{data[lang].doneText1}</p>
                        <br /><br />
                        <p>{data[lang].doneText2}</p>
                        <br /><br />
                        <p>{data[lang].doneText3}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Done;
