import React from "react";
import styles from "./NotFound.module.css";
import error404 from "assets/erro_404.png";
import PrincipalButton from "components/PrincipalButton";

export default function NotFound() {
    return (
        <>

            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>

                <h1 className={styles.title}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragraph}>
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <p className={styles.paragraph}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página anterior.
                </p>

                <div className={styles.containerButton}>
                    <PrincipalButton>Voltar</PrincipalButton>
                </div>

                <img
                    src={error404}
                    alt="Cachorro vestido de óculos e com roupas de humano."
                    className={styles.dogImage}
                />


            </div>
            <div className={styles.whiteSpace}>

            </div>


        </>
    )
}