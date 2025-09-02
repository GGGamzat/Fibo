import Header from '../components/Header.jsx';
import Slider from '../components/Slider.jsx';
import Footer from '../components/Footer.jsx';
import { dishList } from '../data/data.js';

function Home() {
    const multipliedList = [...dishList, ...dishList, ...dishList, ...dishList, ...dishList];

    return (
        <>
            <Header></Header>
            <Slider></Slider>
            <main className="main">
                <div className="main__container">
                    <div className="novelty">
                        <span className="novelty__title">Новинки</span>
                        <div className="novelty__block">
                            {dishList.map(({ img, title, price }) => (
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
                    <div className="dishes">
                        <h1 className="dishes__title">Блюда</h1>
                        <div className="dishes__block">
                            {multipliedList.map(({ img, title, text, price }) => (
                                <div className="dishes__cart">
                                    <img src={ img } alt="" className="dishes__cart-img" />
                                    <h2 className="dishes__cart-title">{title}</h2>
                                    <p className="dishes__cart-text">{text}</p>
                                    <div className="dishes__cart_block-bot">
                                        <h3 className="dishes__cart-price">от {price} ₽</h3>
                                        <button className="dishes__cart-btn">В корзину</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Home;