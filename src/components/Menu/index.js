import React from "react";
import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

export default function Menu() {
 
    return (
        <header>
            <nav className={styles.nav}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/aboutme">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}