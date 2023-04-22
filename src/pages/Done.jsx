// import images
import img1 from '../assets/'

const Done = () => {
  return (
    <div className='container done'>
        <div className="done-cards">
            <div className="done-card">
                <div className="done-top">
                    <div className="done-title">Топ-Селлер в Uzum</div>
                    <img src={img1} alt="image 1" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Done;
