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
