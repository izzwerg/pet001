import clsx from "clsx"
import type { IDesktopMenuProps } from "../../interfaces/IGeneral"
import css from "./DesktopMenu.module.css"



export const DesktopMenu = (props: IDesktopMenuProps) => {
    return (
        <div className={clsx(
            css.menu,
            props.pref.menu ? css.open : css.close
        )}>
            <button onClick={() => props.onSetPref('menu', false)}>Hide menu</button>
        </div>
    )
}