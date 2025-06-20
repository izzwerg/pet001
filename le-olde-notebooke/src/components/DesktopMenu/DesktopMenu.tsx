import type { IDesktopMenuProps } from "../../interfaces/IGeneral"
import css from "./DesktopMenu.module.css"



export const DesktopMenu = (props: IDesktopMenuProps) => {
    return (
        <div className={css.menu}></div>
    )
}