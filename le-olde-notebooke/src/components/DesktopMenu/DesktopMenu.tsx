import clsx from "clsx"
import type { IDesktopMenuProps } from "../../interfaces/IGeneral"
import css from "./DesktopMenu.module.css"
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";



export const DesktopMenu = (props: IDesktopMenuProps) => {
    const [anchorElTheme, setAnchorElTheme] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorElTheme);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElTheme(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElTheme(null);
    };

    return (
        <div className={clsx(
            css.menu,
            props.pref.menu ? css.open : css.close
        )}>
            <button onClick={() => props.onSetPref('menu', false)}>Hide menu</button>
            <button onClick={handleClick}>Theme</button>
            <Menu
                id="basic-menu"
                anchorEl={anchorElTheme}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
            >
                <MenuItem
                    onClick={() => {
                        props.onSetPref('theme', 0)
                        handleClose()
                    }}
                >
                    Theme 1
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        props.onSetPref('theme', 1)
                        handleClose()
                    }}
                >
                    Theme 2
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        props.onSetPref('theme', 2)
                        handleClose()
                    }}
                >
                    Theme 3
                </MenuItem>
            </Menu>
        </div>
    )
}