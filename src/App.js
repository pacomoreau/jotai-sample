import { useAtom } from "jotai"
import { countAtom, uiAtom, combinedAtom, persistedAtom } from "./atoms"
import "./App.css"

const Counter = () => {
  const [count, setCount] = useAtom(countAtom)

  console.log({ count })

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment count</button>
    </>
  )
}

const ToggleTheme = () => {
  const [ui, setUi] = useAtom(uiAtom)

  console.log({ ui })

  return (
    <>
      <h2>Theme: {ui.theme}</h2>
      <button
        onClick={() =>
          setUi((prev) => ({ ...prev, theme: prev.theme === "dark" ? "light" : "dark" }))
        }
      >
        Toggle theme
      </button>
    </>
  )
}

const Persisted = () => {
  const [persisted, setPersisted] = useAtom(persistedAtom)

  console.log({ persisted })

  return (
    <>
      <h2>Persisted</h2>
      <input type="text" value={persisted} onChange={(e) => setPersisted(e.target.value)} />
    </>
  )
}

const Message = () => {
  const [message] = useAtom(combinedAtom)

  console.log({ message })

  return <h2>{message}</h2>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jotai sample</h1>
        <Counter />
        <ToggleTheme />
        <Message />
        <Persisted />
      </header>
    </div>
  )
}

export default App
