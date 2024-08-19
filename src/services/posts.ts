import { client } from '../utils/client'
import { decorEndpoint, forgetProductsEndpoint } from '../api'

export const requestDecor = async () => {
  const { data } = await client.get(decorEndpoint)
  return data
}

export const requestForgedProducts = async () => {
  const { data } = await client.get(forgetProductsEndpoint)
  return data
}
