import styles from './form.module.css';


function Form() {
    return <form>
        <input type='text' name='name' placeholder='Name'></input>
        <input type='text' name='email' placeholder='Email'></input>
        <textarea placeholder='Your review' className={styles.textarea}></textarea>
    </form>
}

export default Form;