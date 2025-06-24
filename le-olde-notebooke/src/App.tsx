import { useState } from "react"
import css from "./App.module.css"
import { DesktopMenu } from "./components/DesktopMenu/DesktopMenu"
import { Page } from "./components/Page/Page"

const DEF_PREF = {
  theme: 0,
  font: 0,
  menu: false
}

function App() {
  const [pref, setPref] = useState(JSON.parse(JSON.stringify(DEF_PREF)))

  const onSetPref = (path: string, value: number | boolean) => {
    const next = { ...pref }
    next[path] = value
    setPref(next)
  }

  return (
    <>
      <div className={css.main}>
        <DesktopMenu pref={pref} onSetPref={onSetPref} />
        <Page pref={pref} onSetPref={onSetPref} />
      </div>
    </>
  )
}

export default App
