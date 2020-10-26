import { FunctionComponent } from "react";

import styles from "../styles/ProfilePicture.module.scss";

const ProfilePicture: FunctionComponent = () => {
    return <img className={styles.profile} src="/images/Dennis.jpg" />;
};

export default ProfilePicture;
