import type { IPageProps } from '../../interfaces/IGeneral'
import css from './Page.module.css'

export const Page = (props: IPageProps) => {
    return (
        <div className={css.container}></div>
    )
}