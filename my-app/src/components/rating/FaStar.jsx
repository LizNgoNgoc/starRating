import styles from './fastar.module.css';

function FaStars() {
    return <div className={styles.container}>
        <p className={styles.star}>Stars</p>
        <textarea className={styles.textarea}></textarea>
    </div>
   
}

export default FaStars;