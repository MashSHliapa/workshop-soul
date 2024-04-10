import instagram from '../images/contacts/instagram.svg'
import vk from '../images/contacts/vk.svg'
import './InstagramAndVK.scss'

export function InstagramAndVK() {
  return (
    <div className="instagram-and-vk">
      <ul className="instagram-and-vk__list">
        <li className="instagram-and-vk__item">
          <img src={instagram} alt="instagram" />
          <a href="https://www.instagram.com/masterskayasoul2023/" target="_blank">masterskayasoul2023</a>
        </li>
        <li className="instagram-and-vk__item">
          <img src={vk} alt="vk" />
          <a href="https://vk.com/soul_borisov" target="_blank">soul_borisov</a>
        </li>
      </ul>
    </div>
  )
}
