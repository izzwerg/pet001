export interface IDesktopMenuProps {
    pref: {
        theme: number,
        font: number,
        menu: boolean
    }
    onSetPref: (arg1: string, arg2:boolean|number) => void
}

export interface IPageProps {
    pref: {
        theme: number,
        font: number,
        menu: boolean
    }
    onSetPref: (arg1: string, arg2:boolean|number) => void
}

export interface IHeaderProps {
    pref: {
        theme: number,
        font: number,
        menu: boolean
    }
    onSetPref: (arg1: string, arg2:boolean|number) => void
}