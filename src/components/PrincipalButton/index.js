import React from "react";
import styles from "./PrincipalButton.module.css";

export default function PrincipalButton({ children, length }) {
    return (
        <button className={`
        ${styles.principalButton}
        ${styles[length]}
        `}>
            {children}
        </button>

    )
}