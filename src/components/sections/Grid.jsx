import styles from '../../styles/Grid.module.sass';

export function Grid() {

    // Test data
    const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
 
    return (
        <section className={styles.container}>
            {items.map((item, index) => (
                <div key={index} className={styles.item}></div>
            ))}
        </section>
    )
}