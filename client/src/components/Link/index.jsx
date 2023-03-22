import { memo } from "react";
import { Link as RouterLink } from 'react-router-dom'

import styles from './Link.module.css';

const Link = (props) => {
    const { label, to } = props;

    return (
        <RouterLink className={styles.label} to={to}>
            {label}
        </RouterLink>
    )
}

export default memo(Link);