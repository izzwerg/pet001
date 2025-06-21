import clsx from "clsx"
import css from "./Content.module.css"
import type { IContentProps } from "../../../interfaces/IGeneral"
import { useEffect } from "react";

export const Content = (props: IContentProps) => {

    let text = document.getElementById('content');

    const resizeFont = () => {
        text = document.getElementById('content')
        if (text) {
            const width = text.offsetWidth;
            text.style.fontSize = (width * 0.08) + 'px';
        }
    };

    setTimeout(resizeFont, 1200)
    useEffect(() => {

        setTimeout(resizeFont, 1200)
    }, [props.pref.menu])
    useEffect(() => {

        setTimeout(resizeFont, 1200)
    }, [])

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
                id='content'
            >
            </div>
        </div >
    )
}