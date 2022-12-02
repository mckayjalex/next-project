import { Header, Footer } from '../../components';
import styles from '../../styles/Base.module.sass';

export function Layout({ children }) {
    return (
        <>
            <Header />
                <main className={styles.container}>
                    {children}
                </main>
            <Footer />
        </>
    )
}