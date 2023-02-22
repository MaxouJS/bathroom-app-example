import { atom } from 'recoil'

const currentVanityState = atom({
  key: 'currentVanityState',
  default: {}
})

export default currentVanityState
