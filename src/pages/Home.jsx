import Header from '../components/Header.jsx';
import Slider from '../components/Slider.jsx';
import noveltyList from '../data/data.js';

function Home() {
    return (
        <>
            <Header></Header>
            <Slider></Slider>
            <main className="main">
                <div className="main__container">
                    <div className="novelty">
                        <span className="novelty__title">Новинки</span>
                        <div className="novelty__block">
                            {noveltyList.map(({ img, title, price }) => (
                                <div className="novelty__cart">
                                    <img src={ img } alt="" className="novelty__cart-img" />
                                    <div className="novelty__cart-info">
                                        <h3 className="novelty__cart-title">{title}</h3>
                                        <h3 className="novelty__cart-price">{price} ₽</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;