import { useState } from 'react';
import styles from './stars.module.css';
import { FaStar } from 'react-icons/fa';



function Stars() {
    const colors = {
        orange: '#FFBA5A',
        grey: '#a9a9a9'
    }
    const stars = Array(5).fill(0)
    const [currentValue, setCurrentValue] = useState(0); //хук для подсветки звезд при клике
    const [hoverValue, setHoverValue] = useState(undefined); //хук для подсветки звезд при наведении мыши

    function handleClick(value) {
        return setCurrentValue(value)
    }

    function handleMouseOver(value) {
        return setHoverValue(value)
    }

    function handleMouseLeave() {
        return setHoverValue(undefined)
    }


    return <>
    <div className={styles.star}>
        {stars.map((_, index) => {
            return(
                <FaStar key={index} size={30} className={styles.img_stars} 
                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                />
            )
        })}
    </div>
    
    </>
}

export default Stars;