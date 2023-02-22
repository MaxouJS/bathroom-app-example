import { atom } from 'recoil'

const currentCabinetState = atom({
  key: 'currentCabinetState',
  default: {}
})

export default currentCabinetState
