import './TitleBlog.scss'

export function TitleBlog(props: { children: string }) {
  return (
    <div className="title-blog">
      <h2 className="title-blog__text">{props.children}</h2>
    </div>
  )
}
