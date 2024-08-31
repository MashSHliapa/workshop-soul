import { NavLink } from 'react-router-dom'
import { IconAndTitle } from '../../components/IconAndTitle/IconAndTitle'
import { TitleBlog } from '../../components/TitleBlog/TitleBlog'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import image from '../../components/images/blog_image.png'
import photo from '../../components/images/about_photo.png'
import './Blog.scss'

export function Blog() {
  const breadCrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Блог', path: '/blog' }
  ]

  return (
    <div className="blog">
      <div className="blog__container _container">
        <div className="blog__body">
          <BreadCrumbs crumbs={breadCrumbs} />
          <div className="blog__title">
            <TitleBlog>Рубрика: Блог</TitleBlog>
          </div>
          <div className="blog__cards-blog">

            <div className="blog__card-blog card-blog blog__blog-about blog-about">
              <div className="blog-about__image">
                <img src={photo} alt="image" />
              </div>
              <div className="card-blog__info blog-about__info">
                <div className="card-blog__icon-and-title blog-about__icon-and-title">
                  <IconAndTitle>Обо мне</IconAndTitle>
                </div>
                <h5 className="card-blog__subtitle blog-about__subtitle">Здравствуйте, меня зовут Анастасия Кирашёва. <br /> Добро пожаловать в мир моей души или творческую мастерскую "Soul". Я реконструктор и мастер народных ремёсел. Работаю с различными природными материалами. С 2010 года изготавливаю шумы дождя, руны, обереги и многое другое. Здесь каждый найдёт изделие по душе. А также в моем блоге вы можете узнавать о всех мероприятиях в которых я принимаю участия и посетить их для знакомства с моими работами в живую</h5>
              </div>
            </div>

            <div className="blog__card-blog card-blog blog__card-events card-events">
              <div className="card-blog__info card-events__info">
                <div className="card-blog__icon-and-title card-events__icon-and-title">
                  <IconAndTitle>ЯРМАРКИ <span>ДАТЫ И МЕСТА проведения</span></IconAndTitle>
                </div>
                <h5 className="card-blog__subtitle">Ярмарки имеют давние традиции, восходящие еще к средневековью. «Где двое, там рынок, трое – базар, а семеро – ярмарка». Это изречение, дошедшее до нас из глубины истории, может даже навести на мысль, что само слово «ярмарка» русского происхождения. Но его германские корни очевидны – jahr-markt – ежегодный рынок, регулярные торжища широкого значения.</h5>
              </div>
              <button className="card-blog__button _button">
                <NavLink to="/blog/tradeFairs" target="_top">Читать далее</NavLink>
              </button>
            </div>

            <div className="blog__card-blog card-blog blog__card-events card-events">
              <div className="card-blog__info card-events__info">
                <div className="card-blog__icon-and-title card-events__icon-and-title">
                  <IconAndTitle>Фестивали<span>ДАТЫ И МЕСТА проведения</span></IconAndTitle>
                </div>
                <h5 className="card-blog__subtitle">Фестивали имеют давние традиции, восходящие еще к средневековью. «Где двое, там рынок, трое – базар, а семеро – ярмарка». Это изречение, дошедшее до нас из глубины истории, может даже навести на мысль, что само слово «ярмарка» русского происхождения.</h5>
              </div>
              <button className="card-blog__button _button">
                <NavLink to="/blog/festivals" target="_top">Читать далее</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='blog__background _ibg'>
        <img src={image} alt="background" />
      </div>
    </div >
  )
}
