import React from 'react'
import './IconAndTitle.scss'

export function IconAndTitle(props: { children: React.ReactNode }) {
  return (
    <div className="icon-title">
      <div className="icon-title__icon"></div>
      <h4 className="icon-title__title">{props.children}</h4>
    </div>
  )
}
