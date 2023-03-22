import { memo } from "react"

import Link from "../Link";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.container}>
            <Link label="Home" to="/" />
            <Link label="Create" to="/create" />
        </div>
    )
}

export default memo(Navigation);