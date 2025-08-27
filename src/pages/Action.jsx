import Header from '../components/Header.jsx';
import { actionList } from '../data/data.js';

const Action = () => {
    return (
        <>
            <Header></Header>
            <main className="main">
                <div className="main__container">
                    <div className="action">
                        <span className="action__title">Акции</span>
                        <div className="action__block">
                            {actionList.map((action) => (
                                <div className="action__cart">
                                    <img src={ action.img } alt="" className="action__cart-img" />
                                    <h3 className="action__cart-title">{action.title}</h3>
                                    <p className="action__cart-text">{action.text}</p>
                                    <button className="action-btn">Посмотреть</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Action;