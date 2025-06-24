import type { IHeaderProps } from "../../../interfaces/IGeneral"
import css from "./Header.module.css"

export const Header = (props: IHeaderProps) => {
    return (
        <div className={css.header}>
            <div>
                <button
                    onClick={() => props.onSetPref('menu', true)}
                >Show menu</button>
            </div>
            <div>pagination</div>
            <div>
                {/* <button>Login</button> */}
            </div>
        </div>
    )
}