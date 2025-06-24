export interface IPref {
    theme: number,
    font: number,
    menu: boolean
}
export interface IDesktopMenuProps {
    pref: IPref
    onSetPref: (arg1: string, arg2: boolean | number) => void
}

export interface IPageProps {
    pref: IPref
    onSetPref: (arg1: string, arg2: boolean | number) => void
}

export interface IHeaderProps {
    pref: IPref
    onSetPref: (arg1: string, arg2: boolean | number) => void
}

export interface IContentProps {
    pref: IPref
}