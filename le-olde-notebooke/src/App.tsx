import css from "./App.module.css"
import { DesktopMenu } from "./components/DesktopMenu/DesktopMenu"
import { Page } from "./components/Page/Page"

function App() {

  return (
    <>
      <div className={css.main}>
        <DesktopMenu />
        <Page />
      </div>
    </>
  )
}

export default App
