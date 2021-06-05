import { useAtom } from "jotai"
import { countAtom } from "./atoms"

export const Other = () => {
  const [count] = useAtom(countAtom)

  return <h2>Other: {count}</h2>
}
