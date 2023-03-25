import ModelPost from "components/ModelPost";
import React from "react";
import coverPhoto from "assets/sobre_mim_capa.png"
import styles from "./AboutMe.module.css";
import aboutMePhoto from "assets/minha_foto.png"

export default function AboutMe() {
    return (
        <ModelPost
            coverPhoto={coverPhoto}
            title="Sobre mim"
        >
            <h3 className={styles.subtitle}>
                Olá, eu sou o Eduardo!
            </h3>

            <img
                src={aboutMePhoto}
                alt="Foto do Eduardo"
                className={styles.aboutMePhoto}
            />

            <p className={styles.paragraph}>
                FGSLDKÇMGSDKLGMNIKLOADFSGNMDSFngdsf
            </p>
        

        </ModelPost>
    )
}
