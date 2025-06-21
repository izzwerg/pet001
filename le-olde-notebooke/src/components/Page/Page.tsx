import type { IPageProps } from '../../interfaces/IGeneral'
import { Content } from './Content/Content'
import { Header } from './Header/Header'
import css from './Page.module.css'

export const Page = (props: IPageProps) => {
    return (
        <div className={css.container}>
            <Header pref={props.pref} onSetPref={props.onSetPref} />
            <Content pref={props.pref} />
        </div>
    )
}