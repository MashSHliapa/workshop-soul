import { NavLink } from 'react-router-dom'
import { IconAndTitle } from '../../components/IconAndTitle/IconAndTitle'
import { TitleBlog } from '../../components/TitleBlog/TitleBlog'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import image from '../../components/images/blog_image.png'
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
            <div className="blog__card-blog card-blog">
              <div className="card-blog__info">
                <div className="card-blog__icon-and-title">
                  <IconAndTitle>Обо мне</IconAndTitle>
                </div>
                <h5 className="card-blog__subtitle">ТЕКСТ О ТЕБЕ: Об обучении, об улечениях, о развитии... имеют давние традиции, восходящие еще к средневековью. «Где двое, там рынок, трое – базар, а семеро – ярмарка». Это изречение, дошедшее до нас из глубины истории, может даже навести на мысль, что само слово «ярмарка» русского происхождения. Но его германские корни очевидны – jahr-markt – ежегодный рынок, регулярные торжища широкого значения.</h5>
              </div>
              <button className="card-blog__button _button">
                Читать далее
              </button>
            </div>

            <div className="blog__card-blog card-blog">
              <div className="card-blog__info">
                <div className="card-blog__icon-and-title">
                  <IconAndTitle>ЯРМАРКИ <span>ДАТЫ И МЕСТА проведения</span></IconAndTitle>
                </div>
                <h5 className="card-blog__subtitle">Ярмарки имеют давние традиции, восходящие еще к средневековью. «Где двое, там рынок, трое – базар, а семеро – ярмарка». Это изречение, дошедшее до нас из глубины истории, может даже навести на мысль, что само слово «ярмарка» русского происхождения. Но его германские корни очевидны – jahr-markt – ежегодный рынок, регулярные торжища широкого значения.</h5>
                <div className="card-blog__date">Опубликовано 5 мая, 2024</div>
              </div>
              <button className="card-blog__button _button">
                <NavLink to="/blog/tradeFairs" target="_top">Читать далее</NavLink>
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
