import React from "react";
import styles from "./PrincipalButton.module.css";

export default function PrincipalButton({ children }) {
    return (
        <button className={styles.principalButton}>
            {children}
        </button>

    )
}