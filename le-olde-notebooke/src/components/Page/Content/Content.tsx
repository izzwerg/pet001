import clsx from "clsx"
import css from "./Content.module.css"
import type { IContentProps } from "../../../interfaces/IGeneral"

export const Content = (props: IContentProps) => {
    return (
        <div className={css.content}>
            <div
                className={clsx(
                    css.contentPage,
                    props.pref.theme === 0 && css.theme0,
                    props.pref.theme === 1 && css.theme1,
                    props.pref.theme === 2 && css.theme2
                )}
                contentEditable="true"
            >
            </div>
        </div >
    )
}