import css from "./DesktopMenu.module.css"

interface IDesktopMenuProps {
    pref: {
        theme: number,
        font: number
    }
}

export const DesktopMenu = (props: IDesktopMenuProps) => {
    return (
        <div className={css.menu}></div>
    )
}