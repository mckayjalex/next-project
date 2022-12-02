import styles from '../../styles/Heading.module.sass';

export function Heading({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}