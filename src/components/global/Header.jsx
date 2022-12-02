import styles from '../../styles/Header.module.sass';

export function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.logo}>Rocket</h1>
        </header>
    )
}