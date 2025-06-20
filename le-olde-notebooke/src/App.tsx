import css from "./App.module.css"
import { DesktopMenu } from "./components/DesktopMenu/DesktopMenu"

function App() {

  return (
    <>
      <div className={css.main}>
        <DesktopMenu />
      </div>
    </>
  )
}

export default App
