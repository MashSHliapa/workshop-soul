import { client } from '../utils/client'
import { decorEndpoint, dreamCatchersEndpoint, forgetProductsEndpoint, runesEndpoint } from '../api'

export const requestDecor = async () => {
  const { data } = await client.get(decorEndpoint)
  return data
}

export const requestForgedProducts = async () => {
  const { data } = await client.get(forgetProductsEndpoint)
  return data
}

export const requestRunes = async () => {
  const { data } = await client.get(runesEndpoint)
  return data
}

export const requestDreamCathers = async () => {
  const { data } = await client.get(dreamCatchersEndpoint)
  return data
}
