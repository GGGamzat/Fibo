import { Link } from "react-router-dom";

import logo from '../assets/icons/logo.svg';
import icon_1 from '../assets/icons/1.svg';
import icon_2 from '../assets/icons/2.svg';


const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__upper">
                    <Link to="/"><img src={logo} alt="" className="logo" /></Link>
                    <div className="delivery__info">
                        <div className="delivery-info__upper">
                            <span className="info-upper1">Доставка пасты </span>
                            <span className="info-upper2">Москва</span>
                        </div>
                        <div className="delivery-info__lower">
                            <div className="info-lower__block1">
                                <img src={icon_1} alt="" />
                                <span>Яндекс еда</span>
                                <div class="circle"></div>
                                <span>4.8</span>
                                <img src={icon_2} alt="" />
                            </div>
                            <div className="info-lower__block2">
                                <span>Время доставки</span>
                                <div class="circle"></div>
                                <span>от 31 мин</span>
                            </div>
                        </div>
                    </div>
                    <button>Заказать звонок</button>
                    <span className="number">8 499 391-84-49</span>
                </div>
                <div className="header__lower">
                    <ul className="menu">
                        <li><a href="">Пицца</a></li>
                        <li><a href="">Паста</a></li>
                        <li><a href="">Супы</a></li>
                        <li><a href="">Салаты</a></li>
                        <li><a href="">Напитки</a></li>
                        <li><a href="">Десерты</a></li>
                        <li><a href="">Бакалея</a></li>
                        <li><a href="">Антипасти</a></li>
                        <li><Link to="/action">Акции</Link></li>
                        <li><a href="">Комбо</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                    <a href="" className="header__auth-btn">Войти</a>
                    <button className="cart-btn">Корзина | 1</button>
                </div>
            </div>
        </header>
    );
}

export default Header;