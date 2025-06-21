import type { IPageProps } from '../../interfaces/IGeneral'
import { Header } from './Header/Header'
import css from './Page.module.css'

export const Page = (props: IPageProps) => {
    return (
        <div className={css.container}>
            <Header />
        </div>
    )
}