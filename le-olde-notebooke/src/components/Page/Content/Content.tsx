import clsx from "clsx"
import css from "./Content.module.css"
import type { IContentProps } from "../../../interfaces/IGeneral"
import { useEffect } from "react";

export const Content = (props: IContentProps) => {

    let text = document.getElementById('content');

    // const handleInput = () => {
    //     const buk = document.getElementById('buk')

    //     if (text?.innerText.length && text?.innerText.length === 1) {
    //         const next = text?.innerText
    //         buk!.innerText = next
    //     }
    //     else if (text?.innerHTML.length && text?.innerHTML.length > 1) {
    //         // const next = text?.innerText.charAt(0)
    //         // const rest = text?.innerText.slice(1)
    //         // text.innerHTML = `<span className=${css.buk}>${next}</span>${rest}`
    //     }
    //     console.log(text?.innerText)
    // }

    const resizeFont = () => {
        text = document.getElementById('content')
        if (text) {
            const width = text.offsetWidth;
            text.style.fontSize = (width * 0.08) + 'px';
            // text.addEventListener('input', handleInput)
        }
        // console.log(1);

    };

    useEffect(() => {
        setTimeout(resizeFont, 200)
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