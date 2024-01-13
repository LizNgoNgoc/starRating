import styles from './fastars.module.css';
import Stars from '../stars/Stars';
import Form from '../review/Form';

function FaStars() {
    return <div className={styles.container}>
        <Stars />
        <Form />
    </div>
   
}

export default FaStars;