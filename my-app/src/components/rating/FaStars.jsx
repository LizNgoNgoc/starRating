import styles from './fastars.module.css';
import Stars from '../stars/Stars';

function FaStars() {
    return <div className={styles.container}>
        <p className={styles.star}>Stars</p>
        <Stars />
        <textarea className={styles.textarea}></textarea>
    </div>
   
}

export default FaStars;