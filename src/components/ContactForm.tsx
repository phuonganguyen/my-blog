import { FunctionComponent } from "react";

import styles from "../styles/ContactForm.module.scss";

const ContactForm: FunctionComponent = () => {
    return (
        <>
            <h3 className={styles.title}>Get In Touch</h3>
            <form className={styles["contact-form"]}>
                <label>Name</label>
                <input className={styles["input-field"]} type="text" name="name" />

                <label>Subject</label>
                <input className={styles["input-field"]} type="text" name="subject" />

                <label>Email</label>
                <input className={styles["input-field"]} type="text" name="email" />

                <label>Message</label>
                <textarea className={styles["input-field"]} name="message"></textarea>

                <input className={styles["submit-btn"]} type="submit" value="Send" />
            </form>
        </>
    );
};

export default ContactForm;
