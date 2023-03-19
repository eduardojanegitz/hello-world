import React from "react";
import styles from "./Banner.module.css";
import colorCirle from "assets/circulo_colorido.png"
import myPhoto from "assets/minha_foto.png"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.title}>
                    Hello, World!
                </h1>
                <p className={styles.paragraph}>
                    Meu nome é Eduardo, seja bem-vindo ao Hello, World! 
                </p>
            </div>
            <div className={styles.images}>
                <img 
                className={styles.colorCirle} 
                src={colorCirle} 
                alt="Circulo colorido"
                aria-hidden={true}
                />
                <img 
                className={styles.myPhoto} 
                src={myPhoto} 
                alt="Minha foto"
                aria-hidden={true}
                />
            </div>
        </div>
    )
}