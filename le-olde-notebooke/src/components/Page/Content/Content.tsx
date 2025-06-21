import clsx from "clsx"
import css from "./Content.module.css"
import type { IContentProps } from "../../../interfaces/IGeneral"

export const Content = (props: IContentProps) => {
    return (
        <div className={css.content}>
            <div className={clsx(
                'content-page',
                props.pref.theme === 0 && 'theme0',
                props.pref.theme === 1 && 'theme1',
                props.pref.theme === 2 && 'theme2'
            )}></div>
        </div >
    )
}