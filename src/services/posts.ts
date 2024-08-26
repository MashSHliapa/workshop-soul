import { client } from '../utils/client'
import { amuletsEndpoint, bijouterieEndpoint, decorEndpoint, dreamCatchersEndpoint, forgetProductsEndpoint, musicEndpoint, runesEndpoint, talismansEndpoint } from '../api'

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

export const requestBijouterie = async () => {
  const { data } = await client.get(bijouterieEndpoint)
  return data
}

export const requestTalismans = async () => {
  const { data } = await client.get(talismansEndpoint)
  return data
}

export const requestMusic = async () => {
  const { data } = await client.get(musicEndpoint)
  return data
}

export const requestAmulets = async () => {
  const { data } = await client.get(amuletsEndpoint)
  return data
}
