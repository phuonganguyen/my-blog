import { FunctionComponent } from "react";

import Post from "../models/Post";
import styles from "../styles/PostPreview.module.scss";

const PostPreview: FunctionComponent<{ data: Post }> = ({ data }) => {
    const thumbnailUrl = `/images/${data.thumbnail}`;
    return (
        <div className={styles['post-preview']}>
            <img className={styles['thumbnail']} src={thumbnailUrl} />
            <div className={styles.info}>
                <h6 className={styles.title}>{data.title}</h6>
                <p className={styles.intro}>{data.intro}</p>
                <a href="#">Read More</a>
            </div>
        </div>
    );
};

export default PostPreview;
