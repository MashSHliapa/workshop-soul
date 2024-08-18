export interface IPropsTradeCard {
  id: number
  title: string
  subtitle: string
  ["date-pretext-from"]: string
  ["number-from"]: string
  ["month-from"]: string
  ["date-pretext-to"]?: string
  ["number-to"]?: string
  ["month-to"]?: string
  year: string
  ["title-description"]: string
  ["subtitle-description"]: string
  text1?: string
  text2?: string
  ['date-description']?: string
  ['time-description']?: string
  ['adress-description']?: string
  condition?: string
  age?: string
  image?: string
}

export interface IPropsItems {
  id: string
  image: string
  item: string
  name: string
  size: string
  material: string
  description?: string
}

export interface IPropsCatalogCards {
  name: string
  image: string
  description: string
  handleClickOpenSection: () => void
}

export interface IPropsSectionEsotericCard {
  image: string
  item: string
  description: string
  handleClickOpenSection: () => void
}

export interface IPropsNavbar {
  blog: string
  contacts: string
  newItems: string
  catalog: string
}

export interface IPropsFuncReturnBack {
  handleClickReturnBack: () => void
}
