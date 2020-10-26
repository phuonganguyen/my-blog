import { FunctionComponent } from "react";

import styles from "../styles/Bio.module.scss";

const Bio: FunctionComponent = () => {
    return (
        <div className={styles["preview-shadow"]}>
            <div className={styles.preview}>
                <div className={`${styles.corner} ${styles.tl}`}></div>
                <div className={`${styles.corner} ${styles.tr}`}></div>
                <h3>What I Do</h3>
                <p>I was a lead developer in a past life, now I enjoy teaching courses.</p>
                <div className={`${styles.corner} ${styles.br}`}></div>
                <div className={`${styles.corner} ${styles.bl}`}></div>
            </div>
        </div>
    );
};

export default Bio;
