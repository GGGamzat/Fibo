import logo from '../assets/icons/logo.svg';
import viber from '../assets/icons/viber.svg';
import skype from '../assets/icons/skype.svg';
import messenger from '../assets/icons/messenger.svg';
import telegram from '../assets/icons/telegram.svg';
import facebook from '../assets/icons/facebook.svg';
import vk from '../assets/icons/vk.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__left-block">
                    <img src={ logo } alt="" className="footer_logo" />
                    <div className="info-1">
                        <span>Калорийность и состав</span>
                        <span>Правовая информация</span>
                    </div>
                    <div className="info-2">Мы в соцсетях</div>
                    <div className="info-3">
                        <div>
                            <h4>YouTube</h4>
                            <h4>Instagram</h4>
                        </div>
                        <div>
                            <h4>Facebook</h4>
                            <h4>ВКонтакте</h4>
                        </div>
                        <div>
                            <h4>Москва ул. Проспект</h4>
                            <h4>Вернадского 86В</h4>
                        </div>
                    </div>
                    <div className="info-4">YaBao Все праав защищены © 2021</div>
                </div>
                <div className="footer__right-block">
                    <h3 className="right-block__title">Остались вопросы? А мы всегда на связи:</h3>
                    <div className="messenger_btns">
                        <button className="messenger__btn-1 short-btn"><img src={ viber } alt="" /></button>
                        <button className="messenger__btn-2 short-btn"><img src={ skype } alt="" /></button>
                        <button className="messenger__btn-3 short-btn"><img src={ messenger } alt="" /></button>
                        <button className="messenger__btn-4 short-btn"><img src={ telegram } alt="" /></button>
                        <button className="messenger__btn-5 short-btn"><img src={ facebook } alt="" /></button>
                        <button className="messenger__btn-6 short-btn"><img src={ vk } alt="" /></button>
                        <button className="messenger__btn-7 long-btn">Написать нам</button>
                    </div>
                    <h1 className="footer_number">8 499 391-84-49</h1>
                    <button className="footer__call-btn">Заказать звонок</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;