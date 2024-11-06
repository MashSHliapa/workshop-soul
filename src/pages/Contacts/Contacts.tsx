import { InstagramAndVK } from '../../components/InstagramAndVK/InstagramAndVK';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { GoToTop } from '../../components/GoToTop/GoToTop';
import { pathnameMainPage } from '../../helpers/pathnameMainPage';
import background from '../../components/images/contacts/background_contacts.png';
import icon from '../../components/images/icon_eye_contacts.svg';
import image_parachute from '../../components/images/contacts/contacts_image.png';
import image_box from '../../components/images/contacts/contacts_box.png';
import viber from '../../components/images/contacts/viber.svg';
import './Contacts.scss';

export function Contacts() {
  const breadCrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <div className="contacts" id="contacts">
      <div className="contacts__container _container">
        <div className="contacts__body">
          {!pathnameMainPage(location) ? (
            <div className="contacts__breadCrumbs">
              <BreadCrumbs crumbs={breadCrumbs} />
            </div>
          ) : (
            <div className="contacts__goToTop">
              <GoToTop />
            </div>
          )}
          <div className="contacts__info">
            <div className="contacts__text-question">Вам что-то понравилось?</div>
            <div className="contacts__slogan">Закажи с доставкой любое изделие!</div>
            <div className="contacts__description">
              <h3 className="contacts__title">
                <span>КАК</span> КУПИТЬ
              </h3>
              <div className="contacts__subtitle">
                Авторские изделия <span>ручной работы</span>
              </div>
            </div>
          </div>

          <div className="contacts__row">
            <div className="contacts__column">
              <div className="contacts__icon">
                <img src={icon} alt="icon" />
              </div>
              <div className="contacts__image-decor">
                <img src={image_parachute} alt="image_parachute" />
              </div>
              <h4 className="contacts__service">ЗАКАЗ</h4>
              <h5 className="contacts__text">
                На данном сайте Вы можете ознакомиться с моими <span>изделиями</span>. Выбрав понравившееся, отправьте
                его название или фото мне удобным для Вас способом: <br />
                <span> Viber, Telegram, Instagram, VK. </span>
                После чего я вышлю сообщение, в котором будет указана{' '}
                <span>стоимость изделия, способы оплаты и доставки</span>.
              </h5>
            </div>

            <div className="contacts__column">
              <div className="contacts__icon">
                <img src={icon} alt="icon" />
              </div>
              <h4 className="contacts__service">ДОСТАВКА</h4>
              <h5 className="contacts__text">
                Доставка осуществляется при помощи курьерской службы <span> СДЭК </span> после внесения{' '}
                <span> 100% предоплаты </span> за изделие.
                <p>* Почтовые услуги оплачивает получатель в момент самого получения.</p>
                Стоимость доставки просчитывается службой СДЭК, исходя из габаритов посылки{' '}
              </h5>
            </div>

            <div className="contacts__column">
              <div className="contacts__icon">
                <img src={icon} alt="icon" />
              </div>
              <div className="contacts__service">контакты</div>
              <div className="contacts__contacts-box">
                <div className="contacts__image-contacts-box">
                  <img src={image_box} alt="image_box" />
                </div>
                <ul className="contacts__list">
                  <li className="contacts__item">
                    <img src={viber} alt="viber" />
                    <a href="tel:+375291216051" target="_blank">
                      <b>+375(29) 12 16 051</b>
                    </a>
                  </li>
                  <InstagramAndVK />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts__background background _ibg">
        <img src={background} alt="background" />
      </div>
    </div>
  );
}
