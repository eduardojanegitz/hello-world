import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuLink.module.css";
import { useLocation } from "react-router-dom";

export default function MenuLink({ to, children }) {
    const location = useLocation();
    return (
        <Link className={`
        ${styles.link}
        ${location.pathname === to ? styles.currentLink : ""}
        `} to={to}>
            {children}
        </Link>
    )
}