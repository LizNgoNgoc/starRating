import { useState } from 'react';
import styles from './stars.module.css';
import { FaStar } from 'react-icons/fa';

const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9'
}

function Stars() {
    const stars = Array(5).fill(0)
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);


    return <>
    <div className={styles.star}>
        {stars.map((_, index) => {
            return(
                <FaStar key={index} size={30} className={styles.img_stars}/>
            )
        })}
    </div>
    
    </>
}

export default Stars;