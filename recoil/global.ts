import {
  atom
} from "recoil"

const id = new Date()

export const isOpenNav = atom<boolean>({
  key: `nav/${id.getTime()}`,
  default: false
})
