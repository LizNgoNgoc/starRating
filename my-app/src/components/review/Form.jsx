import styles from './form.module.css';


function Form() {
    return <form className={styles.form}>
        <input type='text' name='name' placeholder='Name' className={styles.input}></input>
        <input type='text' name='email' placeholder='Email' className={styles.input}></input>
        <textarea placeholder='Your review' className={styles.textarea}></textarea>
    </form>
}

export default Form;