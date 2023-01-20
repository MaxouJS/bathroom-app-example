import { atom } from 'recoil'

const currentSinkState = atom({
  key: 'currentSinkState',
  default: {}
})

export default currentSinkState
