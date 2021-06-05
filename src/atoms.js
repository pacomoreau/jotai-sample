import { atom } from "jotai"

const atomWithLocalStorage = (key, initialValue) => {
  const getInitialValue = () => {
    const item = localStorage.getItem(key)
    if (item !== null) {
      return JSON.parse(item)
    }
    return initialValue
  }
  const baseAtom = atom(getInitialValue())
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue = typeof update === "function" ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      localStorage.setItem(key, JSON.stringify(nextValue))
    }
  )
  return derivedAtom
}

export const countAtom = atom(0)
export const uiAtom = atom({ theme: "dark", menuOpened: false })
export const combinedAtom = atom(
  (get) => `Hello ${get(uiAtom).theme} friend, you counted ${get(countAtom)} time(s)!`
)
export const persistedAtom = atomWithLocalStorage("persistedString", "itinial string")
