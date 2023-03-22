import React, { useEffect, useState } from "react";
import styles from "./Typewriter.module.css"

export default function Typewriter({ textScreen, hiddenCursor, delay }) {
    const [text, setText] = useState("");
    const [showCursor, setShowCursor] = useState(false);

    const WriteOnScreen = (text, i = 0) => {
        if (i < text.length) {
            setShowCursor(true);

            setText(text.slice(0, i + 1));
            setTimeout(() => WriteOnScreen(text, i + 1), 90)
        } else if (i >= text.length && hiddenCursor) {
            setShowCursor(false);
        }
    };

    useEffect(() => {
        setTimeout(() => WriteOnScreen(textScreen), delay ?? 200)
    }, [])

    return (
        <>
            {text}
            {showCursor && (
                <span className={styles.barra}>|</span>
            )}
        </>
    )
}