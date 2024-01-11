import styles from './stars.module.css';
import { FaStar } from 'react-icons/fa';

function Stars() {
    const stars = Array(5).fill(0)

    return <>
    <div className={styles.star}>
        {stars.map((_, index) => {
            return(
                <FaStar key={index} className={styles.star_img}/>
            )
        })}
    </div>
    
    </>
}

export default Stars;