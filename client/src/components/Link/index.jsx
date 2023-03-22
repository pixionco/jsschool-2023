import { memo } from "react";

import styles from './Link.module.css';

const Link = (props) => {
    const { label } = props;

    return (
        <div className={styles.label}>
            {label}
        </div>
    )
}

export default memo(Link);