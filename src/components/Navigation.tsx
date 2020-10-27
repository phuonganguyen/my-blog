import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

import styles from "../styles/Navigation.module.scss";

type Props = {
    children?: ReactNode;
};

const Navigation: FunctionComponent = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <Link href="/">
                <a>
                    <div className={styles["dots-wrapper"]}>
                        <div className={`${styles["browser-dot"]} ${styles["dot-1"]}`}></div>
                        <div className={`${styles["browser-dot"]} ${styles["dot-2"]}`}></div>
                        <div className={`${styles["browser-dot"]} ${styles["dot-3"]}`}></div>
                    </div>
                </a>
            </Link>

            <ul className={styles.navigation}>
                <li>{children}</li>
            </ul>
        </div>
    );
};

export default Navigation;
