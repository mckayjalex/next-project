import styles from '../../styles/Header.module.sass';

export function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.logo}>Rockethouse</h1>
            <p className={styles.alert}>We&apos;re Hiring</p>
        </header>
    )
}