import { memo } from "react"

import Link from "../Link";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.container}>
            <Link label="Link 1" />
            <Link label="Link 2" />
        </div>
    )
}

export default memo(Navigation);