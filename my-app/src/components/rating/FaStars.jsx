import styles from './fastars.module.css';
import Stars from '../stars/Stars';
import Form from '../review/Form';

function FaStars() {
    return <div className={styles.container}>
        <p className={styles.star}>Stars</p>
        <Stars />
        <Form />
    </div>
   
}

export default FaStars;