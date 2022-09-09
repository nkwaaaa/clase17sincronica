import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/EndGame.module.css";

/* --------------------------------- images --------------------------------- */
import mageM from "../assets/images/mageM.webp";
import warriorM from "../assets/images/warriorM.webp";
import rangerM from "../assets/images/rangerM.webp";
import mageW from "../assets/images/mageW.webp";
import warriorW from "../assets/images/warriorW.webp";
import rangerW from "../assets/images/rangerW.webp";
/* -------------------------------------------------------------------------- */

function EndGame() {
    const { genero, clase } = useParams();
    const navigate = useNavigate();

    const img = {
        hombremage: mageM,
        hombrewarrior: warriorM,
        hombreranger: rangerM,
        mujermage: mageW,
        mujerwarrior: warriorW,
        mujerranger: rangerW,
    };

    const aux = genero + clase;

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1>VAMO!</h1>
            <img width="100px" src={img[aux]} alt={`${clase}`} />
            <h3>{`Tu personaje es ${genero} y su clase es ${clase}.`}</h3>
            <button onClick={handleClick}>Atras</button>

            <button
                className={styles.botton}
                onClick={() => navigate("/clase17sincronica")}
            >
                Volver al inicio
            </button>
        </div>
    );
}

export default EndGame;
