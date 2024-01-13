import styles from './form.module.css';


function getInputValues(e) {
    e.preventDefault();
}



function Form() {
    return <form className={styles.form} onSubmit={getInputValues}>
        <input type='text' name='name' placeholder='Name' className={styles.input}></input>
        <input type='text' name='email' placeholder='Email' className={styles.input}></input>
        <textarea placeholder='Your review' className={styles.textarea}></textarea>
        <button className={styles.btn_submit}>Submit</button>
    </form>
}

export default Form;