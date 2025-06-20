import { useState } from "react"
import css from "./App.module.css"
import { DesktopMenu } from "./components/DesktopMenu/DesktopMenu"
import { Page } from "./components/Page/Page"

const DEF_PREF = {
  theme: 0,
  font: 0
}

function App() {
  const [pref, setPref] = useState(JSON.parse(JSON.stringify(DEF_PREF)))

  const onSetPref = () => { }

  return (
    <>
      <div className={css.main}>
        <DesktopMenu pref={pref} />
        <Page pref={pref} />
      </div>
    </>
  )
}

export default App
